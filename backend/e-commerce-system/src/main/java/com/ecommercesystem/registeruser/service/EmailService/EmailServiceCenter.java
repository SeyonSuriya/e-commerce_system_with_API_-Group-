package com.ecommercesystem.registeruser.service.EmailService;


import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;

import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceCenter implements EmailService{


    @Autowired
    private JavaMailSender mailSender;

    public String sendEmail(String toEmail,
                         String body,
                         String subject) throws MessagingException {


        MimeMessage message=mailSender.createMimeMessage();
        MimeMessageHelper helper=new MimeMessageHelper(message,true);
        helper.setTo(toEmail);
        helper.setSubject(subject);


        // to do add html codes here

        helper.setText(body+" <html><h1>Hello<h2><</html>",true);

       // String attachment="/Users/hiran/Downloads";
        //FileSystemResource file = new FileSystemResource(attachment);
//        helper.addInline(attachment, file);

        mailSender.send(message);

        System.out.println("Mail send Successfully");
        return "Mail send Successfully";

    }


}
