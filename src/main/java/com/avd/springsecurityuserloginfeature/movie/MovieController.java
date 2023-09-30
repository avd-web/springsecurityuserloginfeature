package com.avd.springsecurityuserloginfeature.movie;

import com.avd.springsecurityuserloginfeature.cast.movieCast.Cast;
import com.avd.springsecurityuserloginfeature.cast.movieCast.CastRepository;
import com.avd.springsecurityuserloginfeature.genre.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/v1/movie")
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    GenreRepository genreRepository;
    @Autowired
    CastRepository castRepository;

    @GetMapping("{id}")
    Movie getMovieById(@PathVariable("id") long id) {
        System.out.println(id);



        return movieRepository.findById(id).orElseThrow();
    }

    @GetMapping("list")
    public List<Movie> movieList() {
        System.out.println("Fetch movie");
        return movieRepository.findAll();
    }


    @GetMapping
    public ResponseEntity<Map<String, Object>> findAll(@RequestParam int page, @RequestParam int size) {
        Pageable searchMovie = PageRequest.of(page, size, Sort.by("title"));
        Page<Movie> searchPage = movieRepository.findAll(searchMovie);
        List<Movie> movies = searchPage.getContent();
        Map<String, Object> response = new HashMap<>();
        response.put("movies", movies);
        response.put("currentPage", searchPage.getNumber());
        response.put("totalItems", searchPage.getTotalElements());
        response.put("totalPages", searchPage.getTotalPages());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("letter/{letter}")
    public ResponseEntity<Map<String, Object>> findByLetter(@PathVariable("letter") String letter, @RequestParam int page, @RequestParam int size) {
        Pageable searchMovie = PageRequest.of(page, size, Sort.by("title"));
        Page<Movie> searchPage = movieRepository.findMoviesByTitleStartingWithIgnoringCase(letter, searchMovie);
        List<Movie> movies = searchPage.getContent();
        Map<String, Object> response = new HashMap<>();
        response.put("movies", movies);
        response.put("currentPage", searchPage.getNumber());
        response.put("totalItems", searchPage.getTotalElements());
        response.put("totalPages", searchPage.getTotalPages());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/genre/{id}")
    public List<Movie> findByGenres(@PathVariable("id") Long id) {
        var genre = genreRepository.findById(id).get();
        return movieRepository.findByGenres(genre);
    }

    @GetMapping("/cast/{id}")
    public List<Cast> findByMovieId(@PathVariable("id") Long id){
        return castRepository.findByMovieId(id);
    }


    @GetMapping("search/{search}")

    public ResponseEntity<Map<String, Object>> containsSearch(@PathVariable String search, @RequestParam int page, @RequestParam int size) {
        Pageable searchMovie = PageRequest.of(page, size, Sort.by("title"));
        Page<Movie> searchPage = movieRepository.findMoviesByTitleContainsIgnoringCase(search, searchMovie);
        List<Movie> movies = searchPage.getContent();
        Map<String, Object> response = new HashMap<>();
        response.put("movies", movies);
        response.put("currentPage", searchPage.getNumber());
        response.put("totalItems", searchPage.getTotalElements());
        response.put("totalPages", searchPage.getTotalPages());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


}
