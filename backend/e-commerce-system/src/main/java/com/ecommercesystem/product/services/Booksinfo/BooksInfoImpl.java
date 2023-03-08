package com.ecommercesystem.product.services.Booksinfo;

import com.ecommercesystem.product.entity.books;
import com.ecommercesystem.product.productRepo.Booksrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BooksInfoImpl implements ProductInfoService {


        @Autowired
        private Booksrepo booksrepo;



    @Override
    public List<books> getItemPrice(Integer item_id) {

        List<books> books = booksrepo.getProductDetails(item_id);


          // productDto Product= new productDto();
         //  Product.setItem_price(Item[0][5]);

        return books;
    }
}


