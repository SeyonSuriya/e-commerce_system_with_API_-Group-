package com.ecommercesystem.registeruser.service.AccountStatusService;

public interface AccountStatusService {
    void activateAccount(String email);
    void deactivateAccount(String email);
}
