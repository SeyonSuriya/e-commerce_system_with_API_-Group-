package com.ecommercesystem.cart.CartDto;

public class cartDto {


    public cartDto() {
    }

    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getItem_id() {
        return item_id;
    }

    public void setItem_id(Integer item_id) {
        this.item_id = item_id;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    private Integer userid;
    private Integer item_id;
    private Integer quantity;

    public cartDto(Integer id, Integer userid, Integer item_id, Integer quantity) {
        this.id = id;
        this.userid = userid;
        this.item_id = item_id;
        this.quantity = quantity;
    }


}
