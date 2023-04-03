package com.ecommercesystem.wishlist.services;

import com.ecommercesystem.wishlist.entity.wishlist;
import com.ecommercesystem.wishlist.wishlistRepo.wishListRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class wishListServiceImpl implements WishListService {


    @Autowired
    private wishListRepo wishListRepo;

    @Override
    public List<wishlist> getWishedItems(Integer userid) {
        List<wishlist> Wishes = wishListRepo.getWishedItems(userid);
        System.out.println(Wishes);
        return Wishes;
    }

    @Override
    public String checkwishes(Integer item_id, Integer userid) {
        if (wishListRepo.checkwishes(item_id, userid)==null){
            return "not wished";
        }else {
            return"wished";
        }
    }

    @Override
    public String removeFromWishList(Integer item_id, Integer userid) {
        wishListRepo.removeWish(item_id, userid);
        return "Item removed from wishlist";
    }

    @Override
    public String addToWishList(Integer item_id, Integer userid) {
        if ((wishListRepo.checkwishes(item_id, userid)) == null) {
            wishListRepo.addWish(item_id, userid);
        }
        ;
        return "Item added to wishlist";
    }
}
