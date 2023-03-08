package com.ecommercesystem.Admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "ecommerce")
public class AdminControllers {

    @Autowired
    AdminServices adminServices;

    @PostMapping(path = "/registeradmin")
    public String registerAdmin(@RequestBody RegisterAdminDto registerAdminDto){

        return adminServices.registerAdmin(registerAdminDto);
    }
    @PostMapping(path = "/loginadmin")
    public String loginAdmin(@RequestBody LoginAdminDto loginAdminDto){
        return adminServices.adminLogin(loginAdminDto);
    }
}
