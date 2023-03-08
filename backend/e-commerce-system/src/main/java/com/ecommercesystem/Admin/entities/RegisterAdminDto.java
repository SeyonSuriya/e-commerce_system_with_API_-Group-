package com.ecommercesystem.Admin.entities;


public class RegisterAdminDto {
    private int adminid;
    private String adminname;
    private String email;
    private String mobile;
    private String password;
    private boolean activeStatus;
    private String systemPassword;

    public RegisterAdminDto(int adminid, String adminname, String email, String mobile, String password, boolean activeStatus, String systemPassword) {
        this.adminid = adminid;
        this.adminname = adminname;
        this.email = email;
        this.mobile = mobile;
        this.password = password;
        this.activeStatus = activeStatus;
        this.systemPassword = systemPassword;
    }

    public int getAdminid() {
        return adminid;
    }

    public void setAdminid(int adminid) {
        this.adminid = adminid;
    }

    public String getAdminname() {
        return adminname;
    }

    public void setAdminname(String adminname) {
        this.adminname = adminname;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isActiveStatus() {
        return activeStatus;
    }

    public void setActiveStatus(boolean activeStatus) {
        this.activeStatus = activeStatus;
    }

    public String getSystemPassword() {
        return systemPassword;
    }

    public void setSystemPassword(String systemPassword) {
        this.systemPassword = systemPassword;
    }

    public RegisterAdminDto() {
    }

}
