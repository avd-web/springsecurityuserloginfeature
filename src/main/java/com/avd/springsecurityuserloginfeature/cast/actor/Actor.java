package com.avd.springsecurityuserloginfeature.cast.actor;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Actor {
    @Id
    @GeneratedValue
    private Long id;
    private  String name;

    public Actor(String name) {
        this.name = name;
    }
}
