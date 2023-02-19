package com.ecommercesystem.registeruser.service;

import com.ecommercesystem.registeruser.Email.Email;

import com.ecommercesystem.registeruser.PasswordReset.PasswordReset;
import com.ecommercesystem.registeruser.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class ResetPasswordCentre implements ResetPassword{
    @Autowired
    private UserRepo userRepo;

    @Override
    public String addNewPassword(PasswordReset passwordReset) {
        BCryptPasswordEncoder bCrypt= new BCryptPasswordEncoder();
        String newpassword=bCrypt.encode(passwordReset.newpassword);

        Integer akk= userRepo.changePassword(passwordReset.email,newpassword);
        return "Passsword changed";

    }

}
