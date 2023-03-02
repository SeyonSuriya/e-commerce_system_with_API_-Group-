package com.ecommercesystem.checkout.CheckoutService;
import com.ecommercesystem.checkout.CheckoutDto;
import com.ecommercesystem.checkout.CheckoutRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class CheckoutServiceImpl implements CheckoutService{
    @Autowired
    private CheckoutRepo checkoutRepo;
    private CheckOutProductsDto checkOutProductDto= new CheckOutProductsDto();
    @Override
    public List<CheckOutProductsDto> showCheckoutItems(List<CheckoutDto> checkoutDto, Integer userid) {

        List<CheckOutProductsDto> products=new ArrayList<CheckOutProductsDto>();
        for (int i = 0; i<checkoutDto.size(); i++){
            checkOutProductDto.setProduct(checkoutRepo.getProductDetails(checkoutDto.get(i).getItem_id()));
            checkOutProductDto.setUnits(checkoutDto.get(i).getUnits());
            products.add(checkOutProductDto);
        }
        return products;
    }
}
