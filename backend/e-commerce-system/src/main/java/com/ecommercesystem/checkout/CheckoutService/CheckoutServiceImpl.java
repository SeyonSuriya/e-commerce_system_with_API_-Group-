package com.ecommercesystem.checkout.CheckoutService;

import com.ecommercesystem.checkout.CheckOutRepositories.CheckoutRepo;
import com.ecommercesystem.checkout.CheckOutRepositories.OrdersRepo;
import com.ecommercesystem.checkout.CheckoutDtos.CheckOutProductsDto;
import com.ecommercesystem.checkout.CheckoutDtos.SelectedProductsDto;
import com.ecommercesystem.checkout.entity.PurchaceDetails;
import com.ecommercesystem.product.productRepo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class CheckoutServiceImpl implements CheckoutService{
    @Autowired
    private CheckoutRepo checkoutRepo;
    @Autowired
    private OrdersRepo ordersRepo;


    List<CheckOutProductsDto> purchasingProducts=new ArrayList<CheckOutProductsDto>();
    @Override
    public List<CheckOutProductsDto> showCheckoutItems(List<SelectedProductsDto> selectedProductsDto, Integer userid) {

        List<CheckOutProductsDto> products=new ArrayList<CheckOutProductsDto>();
        for (int i = 0; i< selectedProductsDto.size(); i++){
            CheckOutProductsDto checkOutProductDto= new CheckOutProductsDto();
            checkOutProductDto.setProduct(checkoutRepo.getProductDetails(selectedProductsDto.get(i).getItem_id()));
            checkOutProductDto.setUnits(selectedProductsDto.get(i).getUnits());
            products.add(checkOutProductDto);
        }
        purchasingProducts=products;
        return products;
    }
    @Override
    public String placeorder(PurchaceDetails purchaceDetails) {
        Integer orderid=ordersRepo.getNextOrderId()+1;
        Integer availableUnits=0;
        for (int i = 0; i< purchaceDetails.getPurchaceitems().size(); i++){
            availableUnits=purchasingProducts.get(i).getProduct().getNum_of_units();
            System.out.println(purchasingProducts.get(i).getProduct().getNum_of_units());
           ordersRepo.purchaceItem(purchaceDetails.getAddress(),purchaceDetails.getPurchaceitems().get(i).getItem_id(),purchasingProducts.get(i).getProduct().getItem_price()*purchaceDetails.getPurchaceitems().get(i).getUnits(),purchaceDetails.getPurchaceitems().get(i).getUnits(),orderid,purchaceDetails.getUserid());
           availableUnits-=purchaceDetails.getPurchaceitems().get(i).getUnits();
            System.out.println(availableUnits);
            checkoutRepo.updateAvailableUnits(purchaceDetails.getPurchaceitems().get(i).getItem_id(),availableUnits);
        }
        return "Your order id is "+orderid;
    }
}
