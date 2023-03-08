package com.ecommercesystem.Admin;

import com.ecommercesystem.Admin.entities.LoginAdminDto;
import com.ecommercesystem.Admin.entities.RegisterAdminDto;

public interface AdminServices {
    String registerAdmin(RegisterAdminDto registerAdminDto);
    String adminLogin(LoginAdminDto loginAdminDto);
}
