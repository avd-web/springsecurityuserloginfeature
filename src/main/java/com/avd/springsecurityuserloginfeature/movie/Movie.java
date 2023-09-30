package com.avd.springsecurityuserloginfeature.movie;

import com.avd.springsecurityuserloginfeature.genre.Genre;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Movie {
    @Id
    @GeneratedValue
    Long id;

    private String title;

    @ManyToMany
    @JsonManagedReference
    @JoinTable(
            name = "movie_genres",
            joinColumns = @JoinColumn(name = "movie_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    private Set<Genre> genres = new HashSet<>();

    @JsonIgnore
    private int dataId;


    public Movie(String title, Set<Genre> genres, int dataId) {
        this.genres = genres;
        this.title = title;
        this.dataId = dataId;
    }


    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", genres=" + genres +
                '}';
    }
}
