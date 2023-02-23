package com.ecommercesystem.product;

import jakarta.persistence.*;



@Entity
@Table(name = "items")
public class product {


    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
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

    public Integer getProduct_price() {
        return product_price;
    }

    public void setProduct_price(Integer product_price) {
        this.product_price = product_price;
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

    @Id

        @Column(name = "item_id",length = 5)
       // @GeneratedValue(strategy = GenerationType.AUTO)
        private int productId;

        @Column(name = "item_name",length = 20,nullable = false)
        private String productName;

    @Column(name = "category",length = 20,nullable = false)
    private String category;

    @Column(name = "brand",length = 20,nullable = false)
    private String brand;

    @Column(name = "item_price",length = 8,nullable = false)
    private Integer product_price;

    @Column(name = "img_name1",length = 20,nullable = false)
    private String img_name1;

    @Column(name = "img_name2",length = 20,nullable = false)
    private String img_name2;

    @Column(name = "img_name3",length = 20,nullable = false)
    private String img_name3;

    @Column(name = "img_name4",length = 20,nullable = false)
    private String img_name4;

    @Column(name = "long_description",length = 20,nullable = false)
    private String long_description;



    public product(int productId, String productName, String category, String brand, Integer product_price, String img_name1, String img_name2, String img_name3, String img_name4, String long_description) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
        this.brand = brand;
        this.product_price = product_price;
        this.img_name1 = img_name1;
        this.img_name2 = img_name2;
        this.img_name3 = img_name3;
        this.img_name4 = img_name4;
        this.long_description = long_description;
    }


    public product() {
    }






}
