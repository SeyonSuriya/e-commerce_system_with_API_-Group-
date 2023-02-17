package com.ecommercesystem.registeruser.service;

public interface EmailService {
    String sendEmail(String toEmail,String body, String subject);

}
