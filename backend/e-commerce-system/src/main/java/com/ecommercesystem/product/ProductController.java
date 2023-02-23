package com.ecommercesystem.product;

import com.ecommercesystem.registeruser.dto.UserDto;
import com.ecommercesystem.registeruser.service.AccountStatusService.AccountStatusService;
import com.ecommercesystem.registeruser.service.EmailService.EmailService;
import com.ecommercesystem.registeruser.service.OtpGenerator.OtpGeneratorService;
import com.ecommercesystem.registeruser.service.ResetPassword.ResetPassword;
import com.ecommercesystem.registeruser.service.UserServices.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("ecommerce")
public class ProductController {

       @Autowired
        private ProductInfoService productInfoService;
       @Autowired
       private ProductRepo productRepo;

            @PostMapping(path = "/product")
            @ResponseBody
            public List<product> ShowProduct(@RequestParam Integer item_id  ){
                return productInfoService.getItemPrice(item_id);
        }
    }
