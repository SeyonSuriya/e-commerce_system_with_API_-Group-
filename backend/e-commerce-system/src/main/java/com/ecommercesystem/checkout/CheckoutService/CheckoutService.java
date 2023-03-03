package com.ecommercesystem.checkout.CheckoutService;

import com.ecommercesystem.checkout.CheckoutDtos.CheckOutProductsDto;
import com.ecommercesystem.checkout.entity.PurchaceDetails;
import com.ecommercesystem.checkout.CheckoutDtos.SelectedProductsDto;

import java.util.List;

public interface CheckoutService {
    List<CheckOutProductsDto>  showCheckoutItems(List<SelectedProductsDto> selectedProductsDto, Integer userid);

    String placeorder(PurchaceDetails purchaceDetails);
}
