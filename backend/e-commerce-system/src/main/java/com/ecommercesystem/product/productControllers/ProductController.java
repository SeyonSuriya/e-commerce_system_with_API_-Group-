package com.ecommercesystem.product.productControllers;

import com.ecommercesystem.product.services.productinfo.ProductInfoService;
import com.ecommercesystem.product.entity.product;
import com.ecommercesystem.product.services.wishlist.WishListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("ecommerce")
public class ProductController {

       @Autowired
        private ProductInfoService productInfoService;
       @Autowired
       private WishListService wishListService;


            @PostMapping(path = "/product")
            @ResponseBody
            public List<product> ShowProduct(@RequestParam Integer item_id  ){
                return productInfoService.getItemPrice(item_id);
        }

    @PostMapping(path = "/addtowishlist")
    @ResponseBody
    public String addtowishlist(@RequestParam Integer item_id,Integer userid  ){
        return wishListService.addToWishList(item_id,userid);
    }

    @PostMapping(path = "/removefromwishlist")
    @ResponseBody
    public String removeWish(@RequestParam Integer item_id,Integer userid  ){
        return wishListService.removeFromWishList(item_id,userid);
    }




    }
