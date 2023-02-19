package com.ecommercesystem.registeruser.service;

import com.ecommercesystem.registeruser.dto.UserDto;
import org.springframework.stereotype.Service;

import java.util.Random;
import java.util.SplittableRandom;

@Service
public class OtpGeneratorCenter implements OtpGeneratorService{


    public Integer generateOtp() {
        Random rd = new Random();
        int rnum = rd.nextInt(10000);
        return rnum;
    }






}

