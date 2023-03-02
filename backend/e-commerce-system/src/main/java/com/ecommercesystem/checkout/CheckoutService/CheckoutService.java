package com.ecommercesystem.checkout.CheckoutService;

import com.ecommercesystem.checkout.CheckoutDto;
import com.ecommercesystem.product.entity.product;

import java.util.List;

public interface CheckoutService {
    List<CheckOutProductsDto>  showCheckoutItems(List<CheckoutDto> checkoutDto, Integer userid);
}
