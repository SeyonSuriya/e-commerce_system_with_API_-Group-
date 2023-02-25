package com.ecommercesystem.product.wishListDto;

public class wishListDto {

    public wishListDto() {
    }

    public wishListDto(Integer userid, Integer item_id) {
        this.userid = userid;
        this.item_id = item_id;
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

    private Integer userid;
    private Integer item_id;
}
