package com.ecommercesystem.checkout.CheckoutDtos;

import com.ecommercesystem.product.entity.books;

public class CheckOutProductsDto {


    public CheckOutProductsDto() {
    }



    public books getProduct() {
        return books;
    }

    public void setProduct(books books) {
        this.books = books;
    }

    public Integer getUnits() {
        return units;
    }

    public void setUnits(Integer units) {
        this.units = units;
    }

    public CheckOutProductsDto(books books, Integer units) {

        this.books = books;
        this.units = units;
    }


    private books books;
    private Integer units ;
}
