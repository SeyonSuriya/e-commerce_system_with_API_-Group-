package com.ecommercesystem.checkout.CheckoutService;
import com.ecommercesystem.checkout.CheckOutProductsDto;
import com.ecommercesystem.checkout.SelectedProductsDto;
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
    public List<CheckOutProductsDto> showCheckoutItems(List<SelectedProductsDto> selectedProductsDto, Integer userid) {

        List<CheckOutProductsDto> products=new ArrayList<CheckOutProductsDto>();
        for (int i = 0; i< selectedProductsDto.size(); i++){
            checkOutProductDto.setProduct(checkoutRepo.getProductDetails(selectedProductsDto.get(i).getItem_id()));
            checkOutProductDto.setUnits(selectedProductsDto.get(i).getUnits());
            products.add(checkOutProductDto);
        }
        return products;
    }
}
