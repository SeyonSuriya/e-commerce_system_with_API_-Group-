package com.ecommercesystem.checkout.AddressService;

import com.ecommercesystem.checkout.AddressDto;
import com.ecommercesystem.registeruser.entity.User;

import java.util.List;

public interface AddressService {
     User getAddressBYId(Integer userid);

     void changeAddress(AddressDto addressDto,Integer userid);
}
