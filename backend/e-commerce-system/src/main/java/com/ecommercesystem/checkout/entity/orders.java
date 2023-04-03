package com.ecommercesystem.checkout.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class orders {

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

    public int getBook_id() {
        return book_id;
    }

    public void setBook_id(int book_id) {
        this.book_id = book_id;
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

    public int getBook_price() {
        return book_price;
    }

    public void setBook_price(int book_price) {
        this.book_price = book_price;
    }

    public String getOrder_status() {
        return order_status;
    }

    public void setOrder_status(String order_status) {
        this.order_status = order_status;
    }

    @Id
    @Column(name = "reference",length = 5)
   // @GeneratedValue(strategy = GenerationType.AUTO)
    private int reference;
    @Column(name = "orderid",length = 5)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int orderid;
    @Column(name = "userid",length = 5)
    private int userid;
    @Column(name = "book_id",length = 5)
    private int book_id;
    @Column(name = "address",length = 150,nullable = false)
    private String address;
    @Column(name = "item_units",length = 5)
    private int item_units;
    @Column(name = "book_price",length = 5)
    private int book_price;

    public orders() {
    }

    @Column(name = "order_status",length = 30)
    private String order_status;

    public orders(int reference, int orderid, int userid, int book_id, String address, int item_units, int book_price, String order_status) {
        this.reference = reference;
        this.orderid = orderid;
        this.userid = userid;
        this.book_id = book_id;
        this.address = address;
        this.item_units = item_units;
        this.book_price = book_price;
        this.order_status = order_status;
    }
}
