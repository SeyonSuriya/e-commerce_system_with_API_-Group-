package com.ecommercesystem.Admin;

import com.ecommercesystem.Admin.entities.ChangeOrderDto;
import com.ecommercesystem.Admin.entities.LoginAdminDto;
import com.ecommercesystem.Admin.entities.RegisterAdminDto;
import com.ecommercesystem.checkout.entity.orders;
import com.ecommercesystem.orders.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "ecommerce")
public class AdminControllers {

    @Autowired
    AdminServices adminServices;

    @Autowired
    private  OrdersService  ordersService;

    @PostMapping(path = "/registeradmin")
    public String registerAdmin(@RequestBody RegisterAdminDto registerAdminDto){

        return adminServices.registerAdmin(registerAdminDto);
    }
    @PostMapping(path = "/loginadmin")
    public String loginAdmin(@RequestBody LoginAdminDto loginAdminDto){
        return adminServices.adminLogin(loginAdminDto);
    }
    @PostMapping(path = "/orders")
    public List<orders> loginAdmin(){
        return ordersService.getAllOrders();
    }
    @PostMapping(path = "/changeOrder")
    public List<orders> loginAdmin(@RequestBody ChangeOrderDto changeOrderDto){
        return ordersService.changeOrder(changeOrderDto);
    }
}
