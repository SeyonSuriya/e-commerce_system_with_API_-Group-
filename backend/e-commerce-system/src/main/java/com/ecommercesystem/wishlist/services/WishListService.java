package com.ecommercesystem.wishlist.services;

import com.ecommercesystem.wishlist.entity.wishlist;
import com.ecommercesystem.wishlist.wishListDto.wishListDto;

import java.util.List;

public interface WishListService {

    List<wishlist> getWishedItems(Integer userid);
    String checkwishes(Integer item_id, Integer userid);


    String addToWishList(Integer item_id, Integer userid);

    String removeFromWishList(Integer item_id, Integer userid);
}
