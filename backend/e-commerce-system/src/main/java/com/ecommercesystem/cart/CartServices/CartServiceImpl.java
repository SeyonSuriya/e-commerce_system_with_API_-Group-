package com.ecommercesystem.cart.CartServices;



import com.ecommercesystem.cart.CartDto.cartDto;
import com.ecommercesystem.cart.entity.cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService{

    @Autowired
    private com.ecommercesystem.cart.CartRepo.cartRepo cartRepo;


    @Override
    public List<cart> showCart (Integer userid) {
        return cartRepo.showcart(userid);
    }

}
