package com.avd.springsecurityuserloginfeature.movie;

import com.avd.springsecurityuserloginfeature.genre.Genre;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findByGenres(Genre genre);
    Page<Movie> findMoviesByTitleStartingWithIgnoringCase(String letter, Pageable pageable);
    Page<Movie> findMoviesByTitleContainsIgnoringCase(String search, Pageable pageable);

    Optional<Movie> findByDataId(int dataId);
}
