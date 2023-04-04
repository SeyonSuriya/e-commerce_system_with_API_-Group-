package com.ecommercesystem.store;

import com.ecommercesystem.product.entity.books;

import java.util.List;

public interface StoreService {
    List<books> GetBooks(String category);
}
