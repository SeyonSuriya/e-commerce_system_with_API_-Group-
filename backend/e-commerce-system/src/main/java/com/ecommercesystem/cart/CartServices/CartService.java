package com.ecommercesystem.cart.CartServices;

import com.ecommercesystem.cart.CartDto.cartDto;
import com.ecommercesystem.cart.entity.cart;

import java.util.List;

public interface CartService {
    List<cart> showCart (Integer userid);
}
