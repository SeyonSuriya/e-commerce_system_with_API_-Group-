package com.ecommercesystem.checkout;


import com.ecommercesystem.checkout.AddressService.AddressService;
import com.ecommercesystem.checkout.CheckoutService.CheckOutProductsDto;
import com.ecommercesystem.checkout.CheckoutService.CheckoutService;
import com.ecommercesystem.product.entity.product;
import com.ecommercesystem.registeruser.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("ecommerce")
public class checkoutController {

    @Autowired
    private AddressService addressService;
    @Autowired
    private CheckoutService checkoutService;

    @PostMapping(path = "/checkout/changeaddress")
    public User getAddress(@RequestBody AddressDto addressDto,@RequestParam Integer  userid){
        addressService.changeAddress(addressDto,userid);
        return addressService.getAddressBYId(userid);
    }

    @PostMapping(path = "/checkout")
    public List<CheckOutProductsDto>  checkOutDetails(@RequestBody List<CheckoutDto> checkoutDto, @RequestParam Integer userid){
        return checkoutService.showCheckoutItems(checkoutDto,userid);
    }





   // @PostMapping(path = "/checkout/changeaddress")
    //public String ChangeAddress (@ResponseBody ){

    }


