package com.ecommercesystem.cart.CartControllers;



import com.ecommercesystem.cart.CartServices.CartService;
import com.ecommercesystem.cart.entity.cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("ecommerce/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping(path="items")
    @ResponseBody
    public  List<cart> showCart(@RequestParam Integer userid)
    {
        return cartService.showCart(userid);
    }

    @PostMapping(path = "removeitem")
    public List<cart> RemoveItemfromCart(@RequestParam Integer userid,Integer item_id){
        return cartService.removeFromCart(item_id,userid);
    }




}
