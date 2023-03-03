package com.ecommercesystem.product.entity;

import jakarta.persistence.*;



@Entity
@Table(name = "items")
public class items {

    public items(int item_id, String item_name, String category, String brand, Integer item_price, Integer num_of_units, String img_name1, String img_name2, String img_name3, String img_name4, String long_description) {
        this.item_id = item_id;
        this.item_name = item_name;
        this.category = category;
        this.brand = brand;
        this.item_price = item_price;
        this.num_of_units = num_of_units;
        this.img_name1 = img_name1;
        this.img_name2 = img_name2;
        this.img_name3 = img_name3;
        this.img_name4 = img_name4;
        this.long_description = long_description;
    }

    @Id

    @Column(name = "item_id",length = 5)
    // @GeneratedValue(strategy = GenerationType.AUTO)
    private int item_id;

    @Column(name = "item_name",length = 30,nullable = false)
    private String item_name;

    @Column(name = "category",length = 50,nullable = false)
    private String category;

    @Column(name = "brand",length = 30,nullable = false)
    private String brand;

    @Column(name = "item_price",length = 15,nullable = false)
    private Integer item_price;
    @Column(name = "num_of_units",length = 5,nullable = false)
    private Integer num_of_units;

    @Column(name = "img_name1",length = 50,nullable = false)
    private String img_name1;

    @Column(name = "img_name2",length = 50,nullable = false)
    private String img_name2;

    @Column(name = "img_name3",length = 50,nullable = false)
    private String img_name3;

    @Column(name = "img_name4",length = 50,nullable = false)
    private String img_name4;

    @Column(name = "long_description",length = 200,nullable = false)
    private String long_description;

    public int getItem_id() {
        return item_id;
    }

    public void setItem_id(int item_id) {
        this.item_id = item_id;
    }

    public String getItem_name() {
        return item_name;
    }

    public void setItem_name(String item_name) {
        this.item_name = item_name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Integer getItem_price() {
        return item_price;
    }

    public void setItem_price(Integer item_price) {
        this.item_price = item_price;
    }

    public Integer getNum_of_units() {
        return num_of_units;
    }

    public void setNum_of_units(Integer num_of_units) {
        this.num_of_units = num_of_units;
    }

    public String getImg_name1() {
        return img_name1;
    }

    public void setImg_name1(String img_name1) {
        this.img_name1 = img_name1;
    }

    public String getImg_name2() {
        return img_name2;
    }

    public void setImg_name2(String img_name2) {
        this.img_name2 = img_name2;
    }

    public String getImg_name3() {
        return img_name3;
    }

    public void setImg_name3(String img_name3) {
        this.img_name3 = img_name3;
    }

    public String getImg_name4() {
        return img_name4;
    }

    public void setImg_name4(String img_name4) {
        this.img_name4 = img_name4;
    }

    public String getLong_description() {
        return long_description;
    }

    public void setLong_description(String long_description) {
        this.long_description = long_description;
    }

    public items() {
    }
}