package com.ecommercesystem.registeruser.service.UserServices;


import com.ecommercesystem.registeruser.dto.UserDto;
import jakarta.mail.MessagingException;

import java.io.UnsupportedEncodingException;

public interface UserService {
    String addUser(UserDto userDto) throws MessagingException, UnsupportedEncodingException;
    String validateUserDetails(String email,String password);
}
