package com.ecommercesystem.registeruser.service;


import com.ecommercesystem.registeruser.dto.UserDto;

public interface UserService {
    String addUser(UserDto userDto);
    String validateUserDetails(String email,String password) ;
}
