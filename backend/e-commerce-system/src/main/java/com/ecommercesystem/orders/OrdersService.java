package com.ecommercesystem.orders;

import com.ecommercesystem.Admin.entities.ChangeOrderDto;
import com.ecommercesystem.checkout.entity.orders;

import java.util.List;

public interface OrdersService {

    List<OrderDto> getOrders(Integer userid);

    List<OrderDto> canselOrder(CanselOrderDto canselOrderDto);

    List<OrderDto> canselItem(CanselItemDto canselItemDto);

    List<orders> getAllOrders();

    List<orders> changeOrder(ChangeOrderDto changeOrderDto);
}
