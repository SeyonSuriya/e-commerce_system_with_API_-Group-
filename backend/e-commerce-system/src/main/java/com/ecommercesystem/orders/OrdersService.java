package com.ecommercesystem.orders;

import com.ecommercesystem.checkout.entity.orders;

import java.util.List;

public interface OrdersService {

    List<OrderDto> getOrders(Integer userid);
}
