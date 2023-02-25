package com.ecommercesystem.wishlist;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("wishlist")
public class WishListController {


    @Autowired
    private wishListService wishListService;


    @PostMapping(path="wishes")
    @ResponseBody
    public String showWishList(@RequestParam Integer userid)
    {
        return wishListService.showWishedItems(userid);
    }
}
