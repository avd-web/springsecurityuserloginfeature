package com.avd.springsecurityuserloginfeature.cast.movieCast;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CastRepository extends JpaRepository<Cast, Long> {
    List<Cast> findByMovieId (Long id);
    List<Cast> findByActorId (Long id);

}
