package com.ecommercesystem.registeruser.service.AddressService;

import com.ecommercesystem.registeruser.dto.AddressDto;
import com.ecommercesystem.registeruser.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class AddressServiceImpl implements AddressService{
    @Autowired
    private UserRepo userRepo;

    @Override
    public List<AddressDto> getAddressBYId(Integer userid) {
        return userRepo.getAddressBYId(userid);
    }
}
