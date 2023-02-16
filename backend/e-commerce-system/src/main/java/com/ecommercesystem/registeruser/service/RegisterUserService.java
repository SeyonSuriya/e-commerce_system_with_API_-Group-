package com.ecommercesystem.registeruser.service;


import com.ecommercesystem.registeruser.dto.UserDto;
import com.ecommercesystem.registeruser.entity.User;
import com.ecommercesystem.registeruser.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


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
                UserDto.getAddressline1(),
                UserDto.getAddressline2(),
                UserDto.getMobile(),
                UserDto.getEmail(),
                UserDto.getProvince(),
                UserDto.getDistrict(),
                UserDto.getPostalcode()

               // UserDto.isActiveState()
        );


        userRepo.save(user);
        return user.getFirstname();

    }
}
