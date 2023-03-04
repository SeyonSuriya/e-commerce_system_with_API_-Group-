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

    @PostMapping(value = "/orders")
    public List<OrderDto> getOrders(@RequestParam Integer userid){
        return ordersService.getOrders(userid);
    }


}
