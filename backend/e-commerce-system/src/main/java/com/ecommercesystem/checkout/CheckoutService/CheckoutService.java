package com.ecommercesystem.checkout.CheckoutService;

import com.ecommercesystem.checkout.CheckOutProductsDto;
import com.ecommercesystem.checkout.SelectedProductsDto;

import java.util.List;

public interface CheckoutService {
    List<CheckOutProductsDto>  showCheckoutItems(List<SelectedProductsDto> selectedProductsDto, Integer userid);
}
