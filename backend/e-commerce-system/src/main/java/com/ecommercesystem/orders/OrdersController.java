package com.ecommercesystem.orders;

import com.ecommercesystem.checkout.entity.orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("ecommerce")
public class OrdersController {

    @Autowired
    private OrdersService ordersService;

    @PostMapping(value = "/myorders")
    public List<OrderDto> getOrders(@RequestParam Integer userid){
        return ordersService.getOrders(userid);
    }
    @PostMapping(value = "/orders/canselorder")
    public List<OrderDto> getOrders(@RequestBody CanselOrderDto canselOrderDto){
        return ordersService.canselOrder(canselOrderDto);
    }
    @PostMapping(value = "/orders/canselitem")
    public List<OrderDto> getOrders(@RequestBody CanselItemDto canselItemDto){
        return ordersService.canselItem(canselItemDto);
    }


}
