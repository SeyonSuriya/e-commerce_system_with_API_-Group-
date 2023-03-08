package com.ecommercesystem.checkout.CheckoutDtos;

public class SelectedProductsDto {




    public SelectedProductsDto(Integer units, Integer book_id) {
        this.units = units;
        this.book_id = book_id;
    }

    public Integer getUnits() {
        return units;
    }

    public void setUnits(Integer units) {
        this.units = units;
    }

    public Integer getBook_id() {
        return book_id;
    }

    public void setBook_id(Integer book_id) {
        this.book_id = book_id;
    }

    private Integer units ;

    public SelectedProductsDto() {
    }

    private Integer book_id ;
}
