package com.ecommercesystem;

import org.springframework.stereotype.Component;


@Component
public class RegisterUserRepository implements RegisterUser{


    @Override
    public User registerUsername(User user) {

        return user;
    }
}
