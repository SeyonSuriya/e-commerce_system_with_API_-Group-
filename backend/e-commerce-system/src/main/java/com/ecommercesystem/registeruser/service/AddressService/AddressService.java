package com.ecommercesystem.registeruser.service.AddressService;

import com.ecommercesystem.checkout.AddressDto;
import com.ecommercesystem.registeruser.entity.User;

import java.util.List;

public interface AddressService {
     List<AddressDto> getAddressBYId(Integer userid);

     void changeAddress(AddressDto addressDto,Integer userid);
}
