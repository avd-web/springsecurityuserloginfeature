package com.avd.springsecurityuserloginfeature.cast.actor;


import com.avd.springsecurityuserloginfeature.cast.movieCast.Cast;
import com.avd.springsecurityuserloginfeature.cast.movieCast.CastRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/actor")
public class ActorController {
    @Autowired
    ActorRepository actorRepository;

    @Autowired
    CastRepository castRepository;

    @RequestMapping("name/{name}")
    public Actor findByName(@PathVariable("name") String name) {
        return actorRepository.findByName(name).get(0);
    }

    @RequestMapping("cast/{id}")
    public List<Cast> findById(@PathVariable("id") Long id) {
        return castRepository.findByActorId(id);
    }

}
