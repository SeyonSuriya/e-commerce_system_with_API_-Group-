package com.ecommercesystem.Admin;

public interface AdminServices {
    String registerAdmin(RegisterAdminDto registerAdminDto);
    String adminLogin(LoginAdminDto loginAdminDto);
}
