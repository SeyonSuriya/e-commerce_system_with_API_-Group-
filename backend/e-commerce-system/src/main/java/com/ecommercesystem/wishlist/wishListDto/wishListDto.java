package com.ecommercesystem.wishlist.wishListDto;

public class wishListDto {




    public wishListDto(Integer wishno, Integer userid, Integer item_id) {
        this.wishno = wishno;
        this.userid = userid;
        this.item_id = item_id;
    }



    public wishListDto() {
    }

    private Integer wishno;
    private Integer userid;

    public Integer getWishno() {
        return wishno;
    }

    public void setWishno(Integer wishno) {
        this.wishno = wishno;
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

    private Integer item_id;

}
