package com.ecommercesystem.registeruser.UserController;
import com.ecommercesystem.registeruser.LoginUser.LoginUser;
import com.ecommercesystem.registeruser.dto.UserDto;
import com.ecommercesystem.registeruser.service.EmailService;
import com.ecommercesystem.registeruser.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationContext;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("ecommerce")
public class RegisterUserController
{
    @Autowired
    private UserService registeruser;
    @Autowired
    private EmailService emailService;



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

    @EventListener(ApplicationReadyEvent.class)
    @PostMapping(path = "/validateemail")
    public String emailSend(/* @RequestBody String email,String body,String subject */)
    {
        emailService.sendEmail("basnayakasanjeewa3@gmail.com","My first email","Registration");
        return "Email sent ";
    }


}
