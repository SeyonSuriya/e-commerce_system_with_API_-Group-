package com.ecommercesystem.registeruser.service.AccountStatusService;

import com.ecommercesystem.registeruser.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class AccountStatusCentre implements AccountStatusService{

    @Autowired
    private UserRepo userRepo;

    public void activateAccount(String email){
            userRepo.changeActiveStatus(1,email);
    }
    public void deactivateAccount(String email){
        userRepo.changeActiveStatus(0,email);
    }
}
