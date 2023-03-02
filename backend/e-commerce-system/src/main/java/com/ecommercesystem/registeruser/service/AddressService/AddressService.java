package com.ecommercesystem.registeruser.service.AddressService;

import com.ecommercesystem.registeruser.dto.AddressDto;

import java.util.List;

public interface AddressService {
    List<AddressDto> getAddressBYId(Integer userid);
}
