package com.ecommercesystem.product.services.wishlist;

import com.ecommercesystem.product.productRepo.ProductRepo;
import com.ecommercesystem.product.services.wishlist.WishListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class wishListServiceImpl implements WishListService {

    @Autowired
    private ProductRepo productRepo;

    @Override
    public String addToWishList(Integer item_id, Integer userid) {
        if ((productRepo.checkwishes(item_id, userid))==null){
            productRepo.addWish(item_id,userid);
        };

        return "Item added to wishlist";
    }


    /*
    @Override
    public List<product> showWishList(Integer userid) {
        List<product> wishes= productRepo.showWishList(userid);
        return wishes;
    }

     */

    @Override
    public String removeFromWishList(Integer item_id, Integer userid) {
        productRepo.removeWish(item_id,userid);
        return "Item removed from wishlist";
    }
}
