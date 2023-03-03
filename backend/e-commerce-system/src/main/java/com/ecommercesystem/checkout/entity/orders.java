package com.ecommercesystem.checkout.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class orders {

    @Id
    @Column(name = "reference",length = 5)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int reference;
    @Column(name = "orderid",length = 5)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int orderid;
    @Column(name = "userid",length = 5)
    private int userid;
    @Column(name = "item_id",length = 5)
    private int item_id;
    @Column(name = "address",length = 150,nullable = false)
    private String address;
    @Column(name = "item_units",length = 5)
    private int item_units;
    @Column(name = "item_price",length = 5)
    private int item_price;
    @Column(name = "order_status",length = 15)
    private String order_status;







    public orders(int reference, int orderid, int userid, int item_id, String address, int item_units, int item_price, String order_status) {
        this.reference = reference;
        this.orderid = orderid;
        this.userid = userid;
        this.item_id = item_id;
        this.address = address;
        this.item_units = item_units;
        this.item_price = item_price;
        this.order_status = order_status;
    }


    public orders() {
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

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public int getItem_id() {
        return item_id;
    }

    public void setItem_id(int item_id) {
        this.item_id = item_id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getItem_units() {
        return item_units;
    }

    public void setItem_units(int item_units) {
        this.item_units = item_units;
    }

    public int getItem_price() {
        return item_price;
    }

    public void setItem_price(int item_price) {
        this.item_price = item_price;
    }

    public String getOrder_status() {
        return order_status;
    }

    public void setOrder_status(String order_status) {
        this.order_status = order_status;
    }






}
