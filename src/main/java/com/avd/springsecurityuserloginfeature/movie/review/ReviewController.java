//package com.avd.springsecurityuserloginfeature.movie.review;
//
//
//import com.ateam.motionpickr.domain.movie.MovieRepository;
//import com.ateam.motionpickr.security.user.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@CrossOrigin
//@RequestMapping("api/v1/review")
//public class ReviewController {
//    @Autowired
//    ReviewRepository reviewRepository;
//    @Autowired
//    MovieRepository movieRepository;
//    @Autowired
//    UserRepository userRepository;
//
//    @GetMapping("movie/{id}")
//    public List<ReviewDto> getByMovie(@PathVariable long id){
//        System.out.println(id);
//        List<Review> reviewList=reviewRepository.findByMovie(movieRepository.findById(id).orElseThrow());
//        return reviewList.stream().map(ReviewDto::toDto).toList();
//    }
//    @PostMapping("add")
//    public void addMovie(@RequestBody ReviewDto reviewDto){
//        Review dataReview=new Review();
//        dataReview.setComment(reviewDto.getReview());
//        dataReview.setMovie(movieRepository.findById(reviewDto.getMovieId()).orElseThrow());
//        dataReview.setUser(userRepository.findByEmail(reviewDto.getUserDto().getEmail()).orElseThrow());
//        dataReview.setScore(reviewDto.getScore());
//
//        reviewRepository.save(dataReview);
//    }
//}
