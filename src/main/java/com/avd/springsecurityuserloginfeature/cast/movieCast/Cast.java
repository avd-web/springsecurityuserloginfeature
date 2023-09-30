package com.avd.springsecurityuserloginfeature.cast.movieCast;

import com.avd.springsecurityuserloginfeature.cast.actor.Actor;
import com.avd.springsecurityuserloginfeature.movie.Movie;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "\"cast\"")
public class Cast {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "actor_id")
    private Actor actor;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;

    @Column(length = 1500)
    private String character;

    public Cast(Actor actor, Movie movie, String character) {
        this.actor = actor;
        this.movie = movie;
        this.character = character;
    }
}
