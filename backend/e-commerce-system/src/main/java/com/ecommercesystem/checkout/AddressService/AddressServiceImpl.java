package com.ecommercesystem.checkout.AddressService;

import com.ecommercesystem.checkout.AddressDto;
import com.ecommercesystem.checkout.CheckoutRepo;
import com.ecommercesystem.registeruser.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AddressServiceImpl implements AddressService{
    @Autowired
    private CheckoutRepo checkoutRepo;

    @Override
    public User getAddressBYId(Integer userid) {
        User user=checkoutRepo.getAddressBYId(userid);
        return user;
    }

    @Override
    public void changeAddress(AddressDto addressDto,Integer userid) {
        checkoutRepo.changeUserAddress(addressDto.getFirstname(),addressDto.getSecondname(),addressDto.getAddressline1(), addressDto.getAddressline2(),
                 addressDto.getDistrict(), addressDto.getPostalcode(), addressDto.getMobile(), addressDto.getProvince(),userid);
    }
}
