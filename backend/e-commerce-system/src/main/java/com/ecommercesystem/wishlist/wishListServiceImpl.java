package com.ecommercesystem.wishlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class wishListServiceImpl implements wishListService {

    @Autowired
    private wishListRepo wishListRepo;
    @Override
    public String showWishedItems(Integer userid) {
        List<String> Wishes=wishListRepo.getWishedItems(userid);
        System.out.println(Wishes);

        return "WISHES";
    }
}
