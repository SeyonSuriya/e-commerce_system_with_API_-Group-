package com.ecommercesystem.product.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "wishlist")
public class wishlist {


    public wishlist(int wishno, int userid, int item_id) {
        this.wishno = wishno;
        this.userid = userid;
        this.item_id = item_id;
    }

    public int getWishno() {
        return wishno;
    }

    public void setWishno(int wishno) {
        this.wishno = wishno;
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

    @Id
    @Column(name = "wishno",length = 5)
    // @GeneratedValue(strategy = GenerationType.AUTO)
    private int wishno;

    @Column(name = "userid",length = 5)
    // @GeneratedValue(strategy = GenerationType.AUTO)
    private int userid;

    @Column(name = "item_id",length = 5)
    // @GeneratedValue(strategy = GenerationType.AUTO)
    private int item_id;


    public wishlist() {
    }



}
