//package com.avd.springsecurityuserloginfeature.movie.review;
//
//
//import com.ateam.motionpickr.security.user.UserDto;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@NoArgsConstructor
//@AllArgsConstructor
//@Getter
//@Setter
//public class ReviewDto {
//    long movieId;
//
//    UserDto userDto;
//    String review;
//
//    double score;
//
//
//
//    public static ReviewDto toDto(Review review){
//        long movId=review.getMovie().getId();
//        UserDto userDto1=UserDto.toDto(review.getUser());
//        return new ReviewDto(movId,userDto1,review.getComment(),review.getScore());
//    }
//
//    @Override
//    public String toString() {
//        return "ReviewDto{" +
//                "movieId=" + movieId +
//                ", userDto=" + userDto +
//                ", review='" + review + '\'' +
//                '}';
//    }
//}
