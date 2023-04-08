package com.ecommercesystem.store;

import com.ecommercesystem.product.entity.books;
import com.ecommercesystem.product.productRepo.Booksrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StoreServiceImpl implements StoreService{
    @Autowired
    private Booksrepo booksrepo;
    @Override
    public List<books> GetBooks(String category) {
        List<books> books=new ArrayList<books>();
        switch(category) {
            case "":
                books=booksrepo.GetAllBooks();
                break;
            default:
                books=booksrepo.GetBooksByCategory(category);
        }
        return books;
    }

    @Override
    public List<books> GetSerchBooks(String keyword) {
        if (keyword != null) {
            return booksrepo.getSerchedProducts(keyword);
        }
        return booksrepo.GetAllBooks();
    }
}
