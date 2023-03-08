package com.ecommercesystem.product.entity;

import jakarta.persistence.*;



@Entity
@Table(name = "books")
public class books {

    public books(int book_id, String book_title, String author, String category, String publisher, Integer book_price, Integer num_of_units, String img_name1, String img_name2, String img_name3, String img_name4, String long_description) {
        this.book_id = book_id;
        this.book_title = book_title;
        this.author = author;
        this.category = category;
        this.publisher = publisher;
        this.book_price = book_price;
        this.num_of_units = num_of_units;
        this.img_name1 = img_name1;
        this.img_name2 = img_name2;
        this.img_name3 = img_name3;
        this.img_name4 = img_name4;
        this.long_description = long_description;
    }

    @Id

    @Column(name = "book_id",length = 5)
    // @GeneratedValue(strategy = GenerationType.AUTO)
    private int book_id;

    @Column(name = "book_title",length = 30,nullable = false)
    private String book_title;

    @Column(name = "author",length = 30,nullable = false)
    private String author;

    @Column(name = "category",length = 50,nullable = false)
    private String category;

    @Column(name = "publisher",length = 30,nullable = false)
    private String publisher;

    @Column(name = "book_price",length = 15,nullable = false)
    private Integer book_price;

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

    public int getBook_id() {
        return book_id;
    }

    public void setBook_id(int book_id) {
        this.book_id = book_id;
    }

    public String getBook_title() {
        return book_title;
    }

    public void setBook_title(String book_title) {
        this.book_title = book_title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public Integer getBook_price() {
        return book_price;
    }

    public void setBook_price(Integer book_price) {
        this.book_price = book_price;
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

    public books() {
    }
}