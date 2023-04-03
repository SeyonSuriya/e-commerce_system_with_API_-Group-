package com.ecommercesystem.cart.CartServices;


import com.ecommercesystem.cart.entity.cart;

import java.util.List;

public interface CartService {
    List<cart> showCart (Integer userid);
    String addToCart(Integer item_id,Integer units,Integer userid);
    List<cart> removeFromCart(Integer item_id, Integer userid);
    void updateItemUnitsFromCart(Integer item_id, Integer units, Integer userid);
}
