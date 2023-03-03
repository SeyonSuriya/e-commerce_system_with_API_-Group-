package com.ecommercesystem.checkout.CheckOutController;
import com.ecommercesystem.checkout.CheckoutDtos.AddressDto;
import com.ecommercesystem.checkout.CheckoutDtos.CheckOutProductsDto;
import com.ecommercesystem.checkout.entity.PurchaceDetails;
import com.ecommercesystem.checkout.CheckoutDtos.SelectedProductsDto;
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
    public List<User>  getAddress(@RequestBody AddressDto addressDto, @RequestParam Integer  userid){
        addressService.changeAddress(addressDto,userid);
        return addressService.getAddressBYId(userid);
    }

    @PostMapping(path = "/checkout")
    public List<User>  getUserAddress(@RequestParam Integer userid){
        return addressService.getAddressBYId(userid);
    }

    @PostMapping(path = "/checkoutproducts")
    public List<CheckOutProductsDto>  checkOutDetails(@RequestBody List<SelectedProductsDto> selectedProductsDto, @RequestParam Integer userid){
        return checkoutService.showCheckoutItems(selectedProductsDto,userid);
    }
    @PostMapping(path = "/placeorder")
    public String  placeorder(@RequestBody PurchaceDetails purchaceDetails){
        return checkoutService.placeorder(purchaceDetails);
    }

    }


