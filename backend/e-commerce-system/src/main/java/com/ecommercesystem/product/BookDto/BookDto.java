package com.ecommercesystem.product.BookDto;

public class BookDto {
    public BookDto(int book_id, String book_title, int book_price, String category, String publisher, String author, int num_of_units, String img_name1, String img_name2, String img_name3, String img_name4, String long_description) {
        this.book_id = book_id;
        this.book_title = book_title;
        this.book_price = book_price;
        this.category = category;
        this.publisher = publisher;
        this.author = author;
        this.num_of_units = num_of_units;
        this.img_name1 = img_name1;
        this.img_name2 = img_name2;
        this.img_name3 = img_name3;
        this.img_name4 = img_name4;
        this.long_description = long_description;
    }

    private int book_id;

    private  String book_title;
    private  int book_price;
    private  String category;
    private String publisher;
    private String author;
    private int num_of_units;
    private String img_name1;
    private String img_name2;
    private String img_name3;
    private String img_name4;
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

    public int getBook_price() {
        return book_price;
    }

    public void setBook_price(int book_price) {
        this.book_price = book_price;
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getNum_of_units() {
        return num_of_units;
    }

    public void setNum_of_units(int num_of_units) {
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

    public BookDto() {
    }


}


