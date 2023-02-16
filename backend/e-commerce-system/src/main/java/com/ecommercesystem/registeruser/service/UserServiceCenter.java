package com.ecommercesystem.registeruser.service;


import com.ecommercesystem.registeruser.dto.UserDto;
import com.ecommercesystem.registeruser.entity.User;
import com.ecommercesystem.registeruser.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserServiceCenter implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public String addUser(UserDto userdto) {

        User user = new User(

                UserDto.getUserId(),
                UserDto.getFirstname(),
                UserDto.getSecondname(),
                UserDto.getEmail(),
                UserDto.getMobile(),
                UserDto.getAddressline1(),
                UserDto.getAddressline2(),
                UserDto.getDistrict(),
                UserDto.getProvince(),
                UserDto.getPostalcode(),
                UserDto.getPassword()

               // UserDto.isActiveState()
        );

        List<User> Emailtaken = userRepo.findUserByEmail(UserDto.getEmail());
        System.out.println("Can t register email is already registered");
        List<User> Mobiletaken = userRepo.findUserByMobile(UserDto.getMobile());
        System.out.println("Can t register mobile number is already registered");

        if (Emailtaken .size()==0){
            if (Mobiletaken.size()==0){
                userRepo.save(user);
                return user.getFirstname();
            }else {
                return "Mobile number is already registered";
            }

        }
        else {
            return "email is already registered";
        }

    }

    public String validateUserDetails(String email,String password) {

        List<User> Authentification = userRepo.findUserByLoginCredentials(email,password);
        System.out.println(Authentification.size());

        if (Authentification.size()!=0){
            return "Login Granted";
        }else {
            return "login details not maching";
        }

    }
}
