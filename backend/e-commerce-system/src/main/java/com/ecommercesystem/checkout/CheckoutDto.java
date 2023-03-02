package com.ecommercesystem.checkout;

public class CheckoutDto {


    public Integer getItem_id() {
        return item_id;
    }

    public void setItem_id(Integer item_id) {
        this.item_id = item_id;
    }

    public Integer getUnits() {
        return units;
    }

    public void setUnits(Integer units) {
        this.units = units;
    }

    public CheckoutDto(Integer units, Integer item_id) {
        this.units = units;
        this.item_id = item_id;
    }

    public CheckoutDto() {
    }

    private Integer units ;
    private Integer item_id ;
}
