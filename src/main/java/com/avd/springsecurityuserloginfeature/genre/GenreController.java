package com.avd.springsecurityuserloginfeature.genre;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("api/v1/genre")
public class GenreController {

    @Autowired
    GenreRepository genreRepository;

    @GetMapping("all")
    public List<Genre> genresList() {
        return genreRepository.findAll();
    }

}
