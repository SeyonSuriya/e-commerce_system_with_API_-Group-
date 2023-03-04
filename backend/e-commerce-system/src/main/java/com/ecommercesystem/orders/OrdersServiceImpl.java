package com.ecommercesystem.orders;


import com.ecommercesystem.checkout.CheckOutRepositories.OrdersRepo;

import com.ecommercesystem.checkout.entity.orders;
import com.ecommercesystem.product.productRepo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrdersServiceImpl implements OrdersService{

    @Autowired
    private ProductRepo productRepo;
    @Autowired
    private OrdersRepo ordersRepo;



    @Override
    public List<OrderDto> getOrders(Integer userid) {

        List<OrderDto> orderDto = new ArrayList<OrderDto>();
        List<orders> Orders=new ArrayList<orders>();

        OrderDto orderDto1=new OrderDto();
        Orders = ordersRepo.getorders(userid);

        for (int i=0;i<Orders.size();i++){
            orderDto1.setItems(productRepo.getItemDetails(Orders.get(i).getItem_id()));
            orderDto1.setOrders(Orders.get(i));
            orderDto.add(orderDto1);
        }
        return orderDto;
    }

    @Override
    public List<OrderDto> canselOrder(CanselOrderDto canselOrderDto) {
        ordersRepo.canselOrder(canselOrderDto.getUserid(),canselOrderDto.getOrderid());
        return getOrders(canselOrderDto.getUserid());
    }

    @Override
    public List<OrderDto> canselItem(CanselItemDto canselItemDto) {
        ordersRepo.canselItem(canselItemDto.getUserid(),canselItemDto.getReference());
        return getOrders(canselItemDto.getUserid());
    }
}
