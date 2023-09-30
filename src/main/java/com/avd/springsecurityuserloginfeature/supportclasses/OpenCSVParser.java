package com.avd.springsecurityuserloginfeature.supportclasses;

import com.avd.springsecurityuserloginfeature.cast.actor.Actor;
import com.avd.springsecurityuserloginfeature.cast.actor.ActorRepository;
import com.avd.springsecurityuserloginfeature.cast.movieCast.Cast;
import com.avd.springsecurityuserloginfeature.cast.movieCast.CastRepository;
import com.avd.springsecurityuserloginfeature.genre.Genre;
import com.avd.springsecurityuserloginfeature.genre.GenreRepository;
import com.avd.springsecurityuserloginfeature.movie.Movie;
import com.avd.springsecurityuserloginfeature.movie.MovieRepository;
import com.avd.springsecurityuserloginfeature.supportclasses.listParser.ParseCreditValues;
import com.opencsv.CSVReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Component
public class OpenCSVParser implements CommandLineRunner {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private GenreRepository genreRepository;

    @Autowired
    private ActorRepository actorRepository;

    @Autowired
    private CastRepository castRepository;

    @Value("${motionpickr.dir}")
    private String filename;

    @Value("${motionpickrCast.dir}")
    private String filenameCast;

    private final Set<String> knownActors = new HashSet<>();
    private final Set<String> knownGenres = new HashSet<>();


    public void getActors(String[] line) {
        String csvCreditsActors = line[0];
        int id = Integer.valueOf(line[2]);
        List<String> names = ParseCreditValues.getFieldName(csvCreditsActors, "'name': ");
        List<String> characters = ParseCreditValues.getFieldName(csvCreditsActors, "'character': ");


        for (String actorName : names) {
            if (!knownActors.contains(actorName)) {
                knownActors.add(actorName);
                if (actorRepository.findByName(actorName).isEmpty()) {
                    actorRepository.save(new Actor(actorName));
                }
            }
        }
        System.out.println(id);
        var movie = movieRepository.findByDataId(id).get();

        for (String name : names) {
            var actor = actorRepository.findByName(name);

            castRepository.save(new Cast(actor.get(0), movie, characters.get(names.indexOf(name))));
        }
    }


    public void seedActorfromCsv() throws IOException {
        try (CSVReader reader = new CSVReader(new FileReader(filenameCast))) {
            List<String[]> csv = reader.readAll().stream().skip(1).toList();
            for (String[] string : csv) {
                getActors(string);
            }
        }
    }


    private Movie createMovieFromArray(String[] line) {
        String genres = line[3];
        int dataId = Integer.valueOf(line[5]);



        String[] genresArray = genres.split("'");
        List<String> genreNames = Arrays.stream(genresArray).filter(term -> Character.isUpperCase(term.charAt(0))).toList();
        System.out.println(genreNames);
        Set<Genre> setOfGenres = new HashSet<>();

        for (String t : genreNames) {
            if (!knownGenres.contains(t)) {
                knownGenres.add(t);
                if (genreRepository.findByName(t).isEmpty()) {
                    genreRepository.save(new Genre(t));
                }
            }
            var genre = genreRepository.findByName(t).get();
            // Add each element into the set
            setOfGenres.add(genre);
        }
        if (line.length < 21) {
            System.out.println(Arrays.toString(line));
            System.exit(-1);
        }

        return new Movie(line[20], setOfGenres, dataId);
    }


    @Override
    public void run(String... args) throws Exception {
        if (movieRepository.count() == 0) {
            seeder();
        }

        if (actorRepository.count() == 0) {
            seedActorfromCsv();
        }

    }

    private void seeder() throws IOException {
        try (CSVReader reader = new CSVReader(new FileReader(filename))) {
            List<String[]> movieList = reader.readAll();
            for (String[] strings : movieList.stream().skip(1).toList()) {
                var movie = createMovieFromArray(strings);
                movieRepository.save(movie);
                //print
                System.out.println(movie.getTitle());
            }
        }
    }
}
