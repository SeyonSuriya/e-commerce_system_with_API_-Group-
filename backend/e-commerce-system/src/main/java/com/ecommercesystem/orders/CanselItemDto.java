package com.ecommercesystem.orders;

public class CanselItemDto {
    private Integer userid;
    private Integer reference;

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getReference() {
        return reference;
    }

    public void setReference(Integer reference) {
        this.reference = reference;
    }

    public CanselItemDto(Integer userid, Integer reference) {
        this.userid = userid;
        this.reference = reference;
    }

    public CanselItemDto() {
    }
}
