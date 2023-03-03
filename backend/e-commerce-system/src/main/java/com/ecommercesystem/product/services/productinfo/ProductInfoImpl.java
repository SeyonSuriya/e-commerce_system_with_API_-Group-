package com.ecommercesystem.product.services.productinfo;

import com.ecommercesystem.product.entity.items;
import com.ecommercesystem.product.productRepo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductInfoImpl implements ProductInfoService {


        @Autowired
        private ProductRepo productRepo;



    @Override
    public List<items> getItemPrice(Integer item_id) {

        List<items> items =productRepo.getProductDetails(item_id);


          // productDto Product= new productDto();
         //  Product.setItem_price(Item[0][5]);

        return items;
    }
}


