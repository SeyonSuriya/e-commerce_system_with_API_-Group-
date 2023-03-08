package com.ecommercesystem.Admin.entities;

public class ChangeOrderDto {
    private int reference;
    private int orderid;
    private String newStatus;

    public ChangeOrderDto(int reference, int orderid, String newStatus) {
        this.reference = reference;
        this.orderid = orderid;
        this.newStatus = newStatus;
    }

    public ChangeOrderDto() {
    }

    public int getReference() {
        return reference;
    }

    public void setReference(int reference) {
        this.reference = reference;
    }

    public int getOrderid() {
        return orderid;
    }

    public void setOrderid(int orderid) {
        this.orderid = orderid;
    }

    public String getNewStatus() {
        return newStatus;
    }

    public void setNewStatus(String newStatus) {
        this.newStatus = newStatus;
    }
}
