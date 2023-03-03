package com.ecommercesystem.checkout.CheckoutDtos;

import com.ecommercesystem.product.entity.product;

public class CheckOutProductsDto {


    public CheckOutProductsDto() {
    }



    public com.ecommercesystem.product.entity.product getProduct() {
        return product;
    }

    public void setProduct(com.ecommercesystem.product.entity.product product) {
        this.product = product;
    }

    public Integer getUnits() {
        return units;
    }

    public void setUnits(Integer units) {
        this.units = units;
    }

    public CheckOutProductsDto( com.ecommercesystem.product.entity.product product,Integer units) {

        this.product = product;
        this.units = units;
    }


    private product product;
    private Integer units ;
}
