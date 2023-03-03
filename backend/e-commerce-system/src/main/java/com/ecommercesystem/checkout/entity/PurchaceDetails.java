package com.ecommercesystem.checkout.entity;

import com.ecommercesystem.checkout.CheckoutDtos.SelectedProductsDto;

import java.util.List;

public class PurchaceDetails {
    private String address;
    private Integer userid;
    private List<SelectedProductsDto> purchaceitems;

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public Integer getUserid() {
        return userid;
    }
    public void setUserid(Integer userid) {
        this.userid = userid;
    }
    public List<SelectedProductsDto> getPurchaceitems() {
        return purchaceitems;
    }
    public void setPurchaceitems(List<SelectedProductsDto> purchaceitems) {
        this.purchaceitems = purchaceitems;
    }
    public PurchaceDetails(String address, Integer userid, List<SelectedProductsDto> purchaceitems) {
        this.address = address;
        this.userid = userid;
        this.purchaceitems = purchaceitems;
    }
    public PurchaceDetails() {
    }
}
