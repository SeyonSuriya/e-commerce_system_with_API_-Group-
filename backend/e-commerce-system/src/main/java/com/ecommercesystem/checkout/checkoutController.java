package com.ecommercesystem.checkout;


import com.ecommercesystem.registeruser.dto.AddressDto;
import com.ecommercesystem.registeruser.repository.UserRepo;
import com.ecommercesystem.registeruser.service.AddressService.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("ecommerce")
public class checkoutController {


    private AddressService addressService;

    @PostMapping(path = "/checkout")
    public List<AddressDto> getAddress(Integer userid){
        return addressService.getAddressBYId(userid);
    }




    @PostMapping(path = "/checkout/changeaddress")
    public String ChangeAddress (@ResponseBody ){

    }

}
