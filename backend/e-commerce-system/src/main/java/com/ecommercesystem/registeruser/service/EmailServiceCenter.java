package com.ecommercesystem.registeruser.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceCenter implements EmailService{

    @Autowired
    private JavaMailSender mailSender;

    public String sendEmail(String toEmail,
                         String body,
                         String subject){
        SimpleMailMessage message=new SimpleMailMessage();
        message.setFrom("hiransanjeewaa@gmail.com");

        message.setTo(toEmail);
        message.setText(body);
        message.setSubject(subject);

        mailSender.send(message);

        System.out.println("Mail send Successfully");
        return "Mail send Successfully";

    }


}
