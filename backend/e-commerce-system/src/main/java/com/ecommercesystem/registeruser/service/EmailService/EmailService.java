package com.ecommercesystem.registeruser.service.EmailService;

import jakarta.mail.MessagingException;

public interface EmailService {
    String sendEmail(String toEmail,String body, String subject) throws MessagingException;

}
