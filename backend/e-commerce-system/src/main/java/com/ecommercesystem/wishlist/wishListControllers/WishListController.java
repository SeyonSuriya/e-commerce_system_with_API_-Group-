package com.ecommercesystem.wishlist.wishListControllers;



import com.ecommercesystem.wishlist.entity.wishlist;
import com.ecommercesystem.wishlist.services.WishListService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("ecommerce")
public class WishListController {



    @Autowired
    private WishListService wishListService;

    @PostMapping(path="wishes")
    @ResponseBody
    public List<wishlist> showWishList(@RequestParam Integer userid)
    {
        return wishListService.getWishedItems(userid);
    }
}
