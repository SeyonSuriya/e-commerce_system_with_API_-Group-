package com.ecommercesystem.Admin;

import jakarta.persistence.*;

@Entity
@Table(name = "admin")
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "adminid",length = 5)
    private int adminid;

    @Column(name = "adminname",length = 30)
    private String adminname;

    @Column(name = "email",length = 30)
    private String email;

    @Column(name = "mobile",length = 10)
    private String mobile;

    @Column(name = "password",length = 200)
    private String password;

    @Column(name = "active_status",columnDefinition = "TINYINT default 0")
    private boolean activeStatus;

    public  int getAdminid() {
        return adminid;
    }

    public void setAdminid(int adminid) {
        this.adminid = adminid;
    }

    public  String getAdminname() {
        return adminname;
    }

    public void setAdminname(String adminname) {
        this.adminname = adminname;
    }

    public  String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public  String getMobile() {
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

    public Admin(int adminid, String adminname, String email, String mobile, String password, boolean activeStatus) {
        this.adminid = adminid;
        this.adminname = adminname;
        this.email = email;
        this.mobile = mobile;
        this.password = password;
        this.activeStatus = activeStatus;
    }

    public Admin() {
    }
}
