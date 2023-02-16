

package com.ecommercesystem.registeruser.entity;

import jakarta.persistence.*;


@Entity
@Table(name = "Users")

public class User {

    @Id

    @Column(name = "userId",length = 5)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;
    @Column(name = "firstname",length = 50,nullable = false)
    private String firstname;
    @Column(name = "secondname",length = 50,nullable = false)
    private String secondname;
    @Column(name = "email",length = 30,nullable = false)
    private String email;
    @Column(name = "mobile",length = 29,nullable = false)
    private String mobile;
    @Column(name = "addressLine1",length = 70)
    private String addressLine1;
    @Column(name = "addressLine2",length = 70)
    private String addressLine2;
    @Column(name = "district",length = 30,nullable = false)
    private String district;
    @Column(name = "province",length = 20,nullable = false)
    private String province;
    @Column(name = "postalCode",length = 10,nullable = false)
    private String postalCode;




    //@Column(name = "active_state",columnDefinition = "TINYINT default 1")
   // private boolean activeState;

    public User() {

    }

    public User(int userId, String firstname, String secondname, String email, String mobile, String addressLine1, String addressLine2, String city, String province, String postalCode) {
        this.userId = userId;
        this.firstname = firstname;
        this.secondname = secondname;
        this.email = email;
        this.mobile = mobile;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.district = city;
        this.province = province;
        this.postalCode = postalCode;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getSecondname() {
        return secondname;
    }

    public void setSecondname(String secondname) {
        this.secondname = secondname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String city) {
        this.district = city;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }
}
