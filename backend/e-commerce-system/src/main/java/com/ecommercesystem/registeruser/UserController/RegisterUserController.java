package com.ecommercesystem.registeruser.UserController;
import com.ecommercesystem.registeruser.LoginUser.LoginUser;
import com.ecommercesystem.registeruser.dto.UserDto;
import com.ecommercesystem.registeruser.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("ecommerce")
public class RegisterUserController
{
    @Autowired
    private UserService registeruser;


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
}
