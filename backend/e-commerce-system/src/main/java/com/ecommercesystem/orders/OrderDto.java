package com.ecommercesystem.orders;

import com.ecommercesystem.checkout.entity.orders;
import com.ecommercesystem.product.entity.items;

public class OrderDto {
    private items Items;
    private orders Orders;

    public items getItems() {
        return Items;
    }

    public void setItems(items items) {
        Items = items;
    }

    public orders getOrders() {
        return Orders;
    }

    public void setOrders(orders orders) {
        Orders = orders;
    }

    public OrderDto(items items, orders orders) {
        Items = items;
        Orders = orders;
    }

    public OrderDto() {
    }
}
