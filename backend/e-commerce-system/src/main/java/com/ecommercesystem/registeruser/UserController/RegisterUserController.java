package com.ecommercesystem.registeruser.UserController;
import com.ecommercesystem.registeruser.Email.Email;
import com.ecommercesystem.registeruser.Otp.Otp;
import com.ecommercesystem.registeruser.LoginUser.LoginUser;
import com.ecommercesystem.registeruser.PasswordReset.PasswordReset;
import com.ecommercesystem.registeruser.service.AccountStatusService.AccountStatusService;
import com.ecommercesystem.registeruser.service.ResetPassword.ResetPassword;
import com.ecommercesystem.registeruser.dto.UserDto;
import com.ecommercesystem.registeruser.service.EmailService.EmailService;
import com.ecommercesystem.registeruser.service.OtpGenerator.OtpGeneratorService;

import com.ecommercesystem.registeruser.service.UserServices.UserService;

import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.* ;


@RestController
@CrossOrigin()
@RequestMapping("ecommerce")
public class RegisterUserController
{
    @Autowired
    private UserService registeruser;
    @Autowired
    private EmailService emailService;
    @Autowired
    private OtpGeneratorService otpGeneratorService;
    @Autowired
    private ResetPassword resetPassword;
    @Autowired
    private AccountStatusService accountStatusService;

    @PostMapping(path = "/register")
    public String saveUser(@RequestBody UserDto userDto)
    {
        String id = registeruser.addUser(userDto);
        return id;
    }

    @PostMapping(path = "/login")
    public String authenticateUser(@RequestBody LoginUser loginUser)
    {
        String result = registeruser.validateUserDetails(loginUser.email,loginUser.password);
        return result;
    }

    Integer otp=0;
    String emailAddress="";
    @PostMapping(path = "/validateemail")
    public String validateWithOtp(@RequestBody Email email) throws MessagingException {
        otp = otpGeneratorService.generateOtp();
        emailAddress=email.emailAddress;
        emailService.sendEmail(email.emailAddress, otp.toString(), "Registration");
        return "Email sent";
    }

    @PostMapping(path = "/validateemailByOtp")
    public String validateemailByOtp(@RequestBody Otp otpCode)
    {
        if (otpCode.otpcode.equals(otp.toString())){

            accountStatusService.activateAccount(emailAddress);
            return "Email Verified";
        }else {
            return "Entered otp is not correct";
        }
    }

    @PostMapping(path = "/resetpassword")
    public String resetPassword(@RequestBody Email email) throws MessagingException {
        otp = otpGeneratorService.generateOtp();
        emailService.sendEmail(email.emailAddress, "Your otp for resetting your password for TechWorld"+otp.toString(), "Reset Your Password");
        return "An otp sent to your email to reset your password ";
    }

    @PostMapping(path = "/resetpasswordwithotp")
    public String resetpasswordwithotp(@RequestBody Otp otpCode)
    {
        if (otpCode.otpcode.equals(otp.toString())){
            return "Enter new Password";
        }else {
            return "Entered otp is not correct";
        }
    }

    @PostMapping(path = "/addnewpassword")
    public String addnewpassword(@RequestBody PasswordReset passwordReset)
    {
        resetPassword.addNewPassword(passwordReset);
        return "Password changed";
    }

    @PostMapping(path = "/deactivateAccount")
    public String deactivateAccount() {
        accountStatusService.deactivateAccount(emailAddress);
        return "Account is Deactivated ";
    }

}
