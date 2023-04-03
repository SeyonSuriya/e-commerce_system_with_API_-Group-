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

    @PostMapping(path="/books")
    @ResponseBody
    public  List<cart> showCart(@RequestParam Integer userid)
    {
        return cartService.showCart(userid);
    }

    @PostMapping(path = "remove")
    public List<cart> RemoveItemfromCart(@RequestParam Integer userid,Integer book_id){
        return cartService.removeFromCart(book_id,userid);
    }
    @PostMapping(path = "updateunits")
    public void UpdateItemUnitsfromCart(@RequestParam Integer item_id,Integer units,Integer userid){
         cartService.updateItemUnitsFromCart(item_id,units,userid);
    }


}
