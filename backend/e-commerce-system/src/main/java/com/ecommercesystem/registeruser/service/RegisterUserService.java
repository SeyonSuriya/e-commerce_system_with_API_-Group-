package com.ecommercesystem.registeruser.service;


import com.ecommercesystem.registeruser.dto.UserDto;
import com.ecommercesystem.registeruser.entity.User;
import com.ecommercesystem.registeruser.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class RegisterUserService implements RegisterUser{

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
        System.out.println(Emailtaken.size());
        List<User> Mobiletaken = userRepo.findUserByMobile(UserDto.getMobile());
        System.out.println(Mobiletaken.size());

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
}
