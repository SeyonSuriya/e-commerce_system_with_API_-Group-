package com.ecommercesystem.product.productDto;

public class productDto {

    private int item_id;

    public productDto(int item_id, String item_name, int item_price, String category, String brand, String img_name1, String img_name2, String img_name3, String img_name4, String long_description) {
        this.item_id = item_id;
        this.item_name = item_name;
        this.item_price = item_price;
        this.category = category;
        this.brand = brand;
        this.img_name1 = img_name1;
        this.img_name2 = img_name2;
        this.img_name3 = img_name3;
        this.img_name4 = img_name4;
        this.long_description = long_description;
    }

    private  String item_name;
    private  int item_price;
    private  String category;

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

    public int getItem_price() {
        return item_price;
    }

    public void setItem_price(int item_price) {
        this.item_price = item_price;
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

    private String brand;
    private String img_name1;
    private String img_name2;
    private String img_name3;
    private String img_name4;
    private String long_description;


    public productDto() {
    }





}
