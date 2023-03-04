package com.ecommercesystem.orders;

public class CanselOrderDto {
    private Integer userid;
    private Integer orderid;

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public CanselOrderDto(Integer userid, Integer orderid) {
        this.userid = userid;
        this.orderid = orderid;
    }

    public CanselOrderDto() {
    }
}
