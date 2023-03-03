package com.ecommercesystem.checkout.CheckoutDtos;

import com.ecommercesystem.product.entity.items;

public class CheckOutProductsDto {


    public CheckOutProductsDto() {
    }



    public items getProduct() {
        return items;
    }

    public void setProduct(items items) {
        this.items = items;
    }

    public Integer getUnits() {
        return units;
    }

    public void setUnits(Integer units) {
        this.units = units;
    }

    public CheckOutProductsDto(items items, Integer units) {

        this.items = items;
        this.units = units;
    }


    private items items;
    private Integer units ;
}
