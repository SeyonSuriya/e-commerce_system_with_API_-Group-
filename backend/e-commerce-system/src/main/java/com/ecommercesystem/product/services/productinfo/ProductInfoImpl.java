package com.ecommercesystem.product.services.productinfo;

import com.ecommercesystem.product.productRepo.ProductRepo;
import com.ecommercesystem.product.entity.product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductInfoImpl implements ProductInfoService {


        @Autowired
        private ProductRepo productRepo;



    @Override
    public List<product> getItemPrice(Integer item_id) {

        List<product> Product =productRepo.getProductDetails(item_id);


          // productDto Product= new productDto();
         //  Product.setItem_price(Item[0][5]);

        return Product;
    }
}


