package com.ecommercesystem.checkout.CheckoutDtos;

public class SelectedProductsDto {

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
    public SelectedProductsDto(Integer units, Integer item_id) {
        this.units = units;
        this.item_id = item_id;
    }
    public SelectedProductsDto() {
    }

    private Integer units ;
    private Integer item_id ;
}
