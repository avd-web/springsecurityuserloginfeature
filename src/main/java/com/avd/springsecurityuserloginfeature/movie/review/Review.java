//package com.avd.springsecurityuserloginfeature.movie.review;
//
//import com.ateam.motionpickr.domain.movie.Movie;
//import com.ateam.motionpickr.security.user.User;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//
//@Entity
//@NoArgsConstructor
//@AllArgsConstructor
//@Getter
//@Setter
//public class Review {
//    @Id
//    @GeneratedValue(strategy = GenerationType.SEQUENCE)
//    @Column(name = "id", nullable = false)
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name = "movie_id")
//    Movie movie;
//
//    double score;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    User user;
//    String comment;
//}
