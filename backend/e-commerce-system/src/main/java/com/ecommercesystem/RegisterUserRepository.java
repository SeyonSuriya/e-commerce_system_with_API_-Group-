package com.ecommercesystem;

import org.springframework.stereotype.Component;


@Component
public class RegisterUserRepository implements RegisterUser{


    @Override
    public String registerUsername(String name) {
        return name;
    }
}
