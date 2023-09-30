//package com.avd.springsecurityuserloginfeature.movie.watchList;
//
//
//import com.ateam.motionpickr.domain.movie.Movie;
//import com.ateam.motionpickr.domain.movie.MovieRepository;
//import com.ateam.motionpickr.security.user.User;
//import com.ateam.motionpickr.security.user.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Objects;
//import java.util.Set;
//import java.util.stream.Collectors;
//
//@RestController
//@CrossOrigin
//@RequestMapping("api/v1/watchlist")
//public class WatchListController {
//
//    @Autowired
//    MovieRepository movieRepository;
//    @Autowired
//    UserRepository userRepository;
//
//    @GetMapping
//    public Set<Movie>getByUser(@AuthenticationPrincipal UserDetails details){
//
//        User user=userRepository.findByEmail(details.getUsername()).orElseThrow();
//
//        user.getWatchlist().add(movieRepository.findById(1L).orElseThrow());
//
//        return user.getWatchlist();
//    }
//    @DeleteMapping
//    public void deleteFromWatchList(@RequestBody WatchListPto dto, @AuthenticationPrincipal UserDetails details){
//        User user=userRepository.findByEmail(details.getUsername()).orElseThrow();
//        Set<Movie>movies=user.getWatchlist();
//        Movie movie=movieRepository.findById(dto.getMovieId()).orElseThrow();
//        movies= movies.stream().filter
//                ((item)-> !Objects.equals(item.getId(), movie.getId())).collect(Collectors.toSet());
//       user.setWatchlist(movies);
//       userRepository.save(user);
//    }
//
//    @PostMapping
//    public void addMovieToWatchList(@RequestBody WatchListPto dto, @AuthenticationPrincipal UserDetails details){
//        User user=userRepository.findByEmail(details.getUsername()).orElseThrow();
//        Set<Movie>movies=user.getWatchlist();
//        Movie movie=movieRepository.findById(dto.getMovieId()).orElseThrow();
//        movies.add(movie);
//        user.setWatchlist(movies);
//        userRepository.save(user);
//
//    }
//
//}
