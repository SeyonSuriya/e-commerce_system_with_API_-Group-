package com.ecommercesystem.checkout;
import com.ecommercesystem.registeruser.service.AddressService.AddressService;
import com.ecommercesystem.checkout.CheckoutService.CheckoutService;

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
    public List<AddressDto>  getAddress(@RequestBody AddressDto addressDto, @RequestParam Integer  userid){
        addressService.changeAddress(addressDto,userid);
        return addressService.getAddressBYId(userid);
    }

    @PostMapping(path = "/checkout")
    public List<AddressDto>   getUserAddress(@RequestParam Integer userid){
        return addressService.getAddressBYId(userid);
    }

    @PostMapping(path = "/checkoutproducts")
    public List<CheckOutProductsDto>  checkOutDetails(@RequestBody List<SelectedProductsDto> selectedProductsDto, @RequestParam Integer userid){
        return checkoutService.showCheckoutItems(selectedProductsDto,userid);
    }





   // @PostMapping(path = "/checkout/changeaddress")
    //public String ChangeAddress (@ResponseBody ){

    }


