package com.avd.springsecurityuserloginfeature.security.user;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/user")
public class UserController {

    @GetMapping
    public Object getUser() {
        Object test = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        System.out.println(test);
        return test;
    }

}
