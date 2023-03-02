package com.ecommercesystem.checkout;

public class AddressDto {

    public AddressDto(String firstname, String secondname, String addressline1, String addressline2, String mobile, String district, String province, String postalcode) {
        this.firstname = firstname;
        this.secondname = secondname;
        this.addressline1 = addressline1;
        this.addressline2 = addressline2;
        this.mobile = mobile;
        this.district = district;
        this.province = province;
        this.postalcode = postalcode;
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

    public String getAddressline1() {
        return addressline1;
    }

    public void setAddressline1(String addressline1) {
        this.addressline1 = addressline1;
    }

    public String getAddressline2() {
        return addressline2;
    }

    public void setAddressline2(String addressline2) {
        this.addressline2 = addressline2;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }


    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getPostalcode() {
        return postalcode;
    }

    public void setPostalcode(String postalcode) {
        this.postalcode = postalcode;
    }

    private  String firstname;
    private  String secondname;
    private  String addressline1;
    private  String addressline2;
    private  String mobile;

    private  String district;
    private  String province;
    private  String postalcode;

    public AddressDto() {
    }
}
