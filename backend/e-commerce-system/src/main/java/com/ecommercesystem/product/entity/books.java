package com.ecommercesystem.product.entity;

import jakarta.persistence.*;



@Entity
@Table(name = "books")
public class books {


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
    @Column(name = "num_of_orders",length = 5,nullable = false)
    private Integer num_of_orders;

    @Column(name = "isbn",length = 25,nullable = false)
    private String isbn;

    @Column(name = "weight",length = 12,nullable = false)
    private Integer weight;

    @Column(name = "long_description",length = 500,nullable = false)
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

    public Integer getNum_of_orders() {
        return num_of_orders;
    }

    public void setNum_of_orders(Integer num_of_orders) {
        this.num_of_orders = num_of_orders;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public String getLong_description() {
        return long_description;
    }

    public void setLong_description(String long_description) {
        this.long_description = long_description;
    }

    public books() {
    }

    public books(int book_id, String book_title, String author, String category, String publisher, Integer book_price, Integer num_of_units, Integer num_of_orders, String isbn, Integer weight, String long_description) {
        this.book_id = book_id;
        this.book_title = book_title;
        this.author = author;
        this.category = category;
        this.publisher = publisher;
        this.book_price = book_price;
        this.num_of_units = num_of_units;
        this.num_of_orders = num_of_orders;
        this.isbn = isbn;
        this.weight = weight;
        this.long_description = long_description;
    }
}