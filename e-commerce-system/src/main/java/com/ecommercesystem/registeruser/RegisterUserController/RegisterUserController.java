package com.ecommercesystem.registeruser.RegisterUserController;

import com.ecommercesystem.registeruser.dto.UserDto;
import com.ecommercesystem.registeruser.service.RegisterUser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("ecommerce")
public class RegisterUserController
{
    @Autowired
    private RegisterUser registeruser;

    @PostMapping(path = "/register")
    public String saveUser(@RequestBody UserDto userDto)
    {
        String id = registeruser.addUser(userDto);
        return id;
    }
}
