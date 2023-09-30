package com.avd.springsecurityuserloginfeature.cast.actor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActorRepository extends JpaRepository<Actor,Long> {
//    Optional<Actor> findByName(String name);
    List<Actor> findByName(String name);
}
