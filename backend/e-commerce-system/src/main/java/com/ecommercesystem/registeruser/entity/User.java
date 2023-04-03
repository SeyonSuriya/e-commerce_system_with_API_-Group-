
package com.ecommercesystem.registeruser.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Users")

public class User {

    @Id
    @Column(name = "userid",length = 5)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userId;

    @Column(name = "firstName",length = 20,nullable = false)
    private String firstName;
    @Column(name = "secondName",length = 30,nullable = false)
    private String secondName;
    @Column(name = "email",length = 30,nullable = false)
    private String email;
    @Column(name = "mobile",length = 10,nullable = false)
    private String mobile;
    @Column(name = "addressLine1",length = 70)
    private String addressLine1;
    @Column(name = "addressLine2",length = 70)
    private String addressLine2;
    @Column(name = "district",length = 20,nullable = false)
    private String district;
    @Column(name = "province",length = 20,nullable = false)
    private String province;
    @Column(name = "postalCode",length = 10,nullable = false)
    private String postalCode;
    @Column(name = "password",length = 100,nullable = false)
    private String password;

    @Column(name = "active_status",columnDefinition = "TINYINT default 0")
    private boolean activeStatus;

    public User() {

    }

    public User(int userid, String firstName, String secondName, String email, String mobile, String addressLine1, String addressLine2, String district, String province, String postalCode,String password) {
        this.userId = userid;
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
        this.mobile = mobile;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.district = district;
        this.province = province;
        this.postalCode = postalCode;
        this.password = password;
    }



    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getFirstname() {
        return firstName;
    }

    public void setFirstname(String firstname) {
        this.firstName = firstname;
    }


    public String getSecondname() {
        return secondName;
    }

    public void setSecondname(String secondname) {
        this.secondName = secondname;
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

    public String getAddressline1() {
        return addressLine1;
    }

    public void setAddressline1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressline2() {
        return addressLine2;
    }

    public void setAddressline2(String addressLine2) {
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
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
