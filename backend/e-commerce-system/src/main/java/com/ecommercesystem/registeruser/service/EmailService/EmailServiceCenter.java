package com.ecommercesystem.registeruser.service.EmailService;


import com.ecommercesystem.registeruser.entity.User;
import com.ecommercesystem.registeruser.repository.OtpRepo;
import com.ecommercesystem.registeruser.repository.UserRepo;
import com.ecommercesystem.registeruser.service.OtpGenerator.OtpGeneratorService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.mail.javamail.JavaMailSender;

import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.List;

@Service
public class EmailServiceCenter implements EmailService{
    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private OtpRepo otpRepo;
    @Autowired
    private OtpGeneratorService otpGeneratorService;
    @Autowired
    private UserRepo userRepo;

    Integer otp=0;
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
//       helper.addInline(attachment, file);
        mailSender.send(message);
        System.out.println("Mail send Successfully");
        return "Mail send Successfully";
    }
    @Override
    public String sendEmailVerification(String email) throws MessagingException, UnsupportedEncodingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        otp = otpGeneratorService.generateOtp();
        List<User> user = userRepo.findUserByEmail(email);

        String toAddress = email;
        String fromAddress = "basnayakasanjeewa3@gmail.com";
        String senderName = "Book World";
        String subject = "Please verify your registration";
        String content = "Dear [[name]],<br>"
                + "Please click the link below to verify your registration:<br>"
                + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
                + "Thank you,<br>"
                + "Your company name.";
        helper.setFrom(fromAddress, senderName);
        helper.setTo(toAddress);
        helper.setSubject(subject);

        content = content.replace("[[name]]", user.get(0).getFirstname()+user.get(0).getSecondname());
        String verifyURL = "http://localhost:8080/ecommerce/validateemail/verify?email="+email+"&otp="+otp;
        otpRepo.saveOtp(user.get(0).getEmail(),otp);

        content = content.replace("[[URL]]",verifyURL);

        helper.setText(content, true);

        mailSender.send(message);

        return "Email Sent";
    }

    @Override
    public String verifyEmail(String email, Integer otp) {
        Integer otp1=otpRepo.validateEmail(email).getOtp();
        if (otp1.equals(otp)){
            userRepo.changeActiveStatus(email);
            return "Email Verified";
        }
        return "System error";

    }

}
