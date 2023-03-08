package com.ecommercesystem.orders;

import com.ecommercesystem.checkout.entity.orders;
import com.ecommercesystem.product.entity.books;

public class OrderDto {
    private books books;
    private orders Orders;

    public books getItems() {
        return books;
    }

    public void setItems(books books) {
        this.books = books;
    }

    public orders getOrders() {
        return Orders;
    }

    public void setOrders(orders orders) {
        Orders = orders;
    }

    public OrderDto(books books, orders orders) {
        this.books = books;
        Orders = orders;
    }

    public OrderDto() {
    }
}
