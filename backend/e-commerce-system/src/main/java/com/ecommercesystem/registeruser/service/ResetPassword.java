package com.ecommercesystem.registeruser.service;

import com.ecommercesystem.registeruser.Email.Email;
import com.ecommercesystem.registeruser.PasswordReset.PasswordReset;

public interface ResetPassword {
    String addNewPassword(PasswordReset passwordReset);
}
