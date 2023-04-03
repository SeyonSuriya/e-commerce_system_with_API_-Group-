package com.ecommercesystem.orders;


import com.ecommercesystem.Admin.entities.ChangeOrderDto;
import com.ecommercesystem.checkout.CheckOutRepositories.OrdersRepo;

import com.ecommercesystem.checkout.entity.orders;
import com.ecommercesystem.product.productRepo.Booksrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrdersServiceImpl implements OrdersService{

    @Autowired
    private Booksrepo booksrepo;
    @Autowired
    private OrdersRepo ordersRepo;

    @Override
    public List<OrderDto> getOrders(Integer userid) {

        List<OrderDto> orderDto = new ArrayList<OrderDto>();
        List<orders> Orders=new ArrayList<orders>();

        OrderDto orderDto1=new OrderDto();
        Orders = ordersRepo.getorders(userid);

        for (int i=0;i<Orders.size();i++){
            orderDto1.setItems(booksrepo.getItemDetails(Orders.get(i).getBook_id()));
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
    @Override
    public List<orders> getAllOrders() {
        return ordersRepo.getAllOrders();
    }

    @Override
    public List<orders> changeOrder(ChangeOrderDto changeOrderDto) {
        if (changeOrderDto.getOrderid()!=0){
            ordersRepo.changeOrderStatus(changeOrderDto.getOrderid(),changeOrderDto.getNewStatus());
            return ordersRepo.getAllOrders();
        }else if (changeOrderDto.getReference()!=0){
            ordersRepo.changeReferenceStatus(changeOrderDto.getReference(),changeOrderDto.getNewStatus());
            return ordersRepo.getAllOrders();
        }
        return ordersRepo.getAllOrders();
    }
}
