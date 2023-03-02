package com.ecommercesystem.checkout.CheckoutService;

import com.ecommercesystem.product.entity.product;

public class CheckOutProductsDto {


    public CheckOutProductsDto() {
    }

    public Integer getUnits() {
        return units;
    }

    public void setUnits(Integer units) {
        this.units = units;
    }

    public com.ecommercesystem.product.entity.product getProduct() {
        return product;
    }

    public void setProduct(com.ecommercesystem.product.entity.product product) {
        this.product = product;
    }

    public CheckOutProductsDto(Integer units, com.ecommercesystem.product.entity.product product) {
        this.units = units;
        this.product = product;
    }

    private Integer units ;
    private product product;
}
