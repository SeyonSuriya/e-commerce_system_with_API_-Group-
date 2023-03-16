package com.ecommercesystem.registeruser.service.EmailService;

import com.ecommercesystem.registeruser.entity.User;
import jakarta.mail.MessagingException;

import java.io.UnsupportedEncodingException;

public interface EmailService {
    String sendEmail(String toEmail,String body, String subject) throws MessagingException;
    String sendEmailVerification(String email) throws MessagingException, UnsupportedEncodingException;

    String verifyEmail(String email, Integer otp);
}
