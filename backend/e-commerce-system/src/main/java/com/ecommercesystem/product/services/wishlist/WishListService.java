package com.ecommercesystem.product.services.wishlist;

import com.ecommercesystem.product.entity.product;

import java.util.List;

public interface WishListService {

    String addToWishList(Integer item_id,Integer userid);

    String removeFromWishList(Integer item_id,Integer userid);
}
