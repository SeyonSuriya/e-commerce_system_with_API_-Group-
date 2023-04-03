package com.ecommercesystem.cart.CartServices;



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


    @Override
    public String addToCart(Integer item_id,Integer units, Integer userid) {
        if (cartRepo.getExistingUnits(item_id,userid)==null){
            cartRepo.addToCart(item_id,units,userid);
        }else {
            Integer Units=cartRepo.getExistingUnits(item_id,userid);
            cartRepo.updateCart(item_id,units+Units,userid);
        }
        return "Item added to cart";
    }
    @Override
    public List<cart> removeFromCart(Integer item_id, Integer userid){
        cartRepo.removeFromcart(item_id,userid);
        return cartRepo.showcart(userid);
    }

    //@Override
    public void updateItemUnitsFromCart(Integer item_id, Integer units, Integer userid) {
       // Units=cartRepo.getExistingUnits(item_id,userid);
        cartRepo.updateCart(item_id,units,userid);

    }
}
