package com.ecommercesystem.product.productControllers;

import com.ecommercesystem.cart.CartServices.CartService;
import com.ecommercesystem.product.entity.books;
import com.ecommercesystem.product.services.Booksinfo.ProductInfoService;

import com.ecommercesystem.wishlist.services.WishListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("ecommerce/books")
public class ProductController {
    @Autowired
    private ProductInfoService productInfoService;
    @Autowired
    private WishListService wishListService;
    @Autowired
    private CartService cartService;
    @GetMapping(path = "/details")
    @ResponseBody
    public List<books> ShowProduct(@RequestParam Integer book_id) {
        return productInfoService.getItemPrice(book_id);
    }

    @PostMapping(path = "/checkwishes")
    @ResponseBody
    public String checkwishes(@RequestParam Integer book_id, Integer userid) {
        return wishListService.checkwishes(book_id, userid);
    }

    @PostMapping(path = "/addtowishlist")
    @ResponseBody
    public String addtowishlist(@RequestParam Integer book_id, Integer userid) {
        return wishListService.addToWishList(book_id, userid);
    }

    @PostMapping(path = "/removefromwishlist")
    @ResponseBody
    public String removeWish(@RequestParam Integer book_id, Integer userid) {
        return wishListService.removeFromWishList(book_id, userid);
    }

    @PostMapping(path = "/addtocart")
    @ResponseBody
    public String Addtocart(@RequestParam Integer book_id,Integer units, Integer userid) {
        return cartService.addToCart(book_id,units,userid);
    }
}
