package com.ecommercesystem.Admin;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AdminServicesImpl implements AdminServices{

    @Autowired
    private AdminRepo adminRepo;
    private String systemPasword="@12345";

    @Override
    public String registerAdmin(RegisterAdminDto registerAdminDto) {
        BCryptPasswordEncoder bCrypt= new BCryptPasswordEncoder();
        String encPassword=bCrypt.encode(registerAdminDto.getPassword());


        Admin admin1=new Admin(
                registerAdminDto.getAdminid(),
                registerAdminDto.getAdminname(),
                registerAdminDto.getEmail(),
                registerAdminDto.getMobile(),
                registerAdminDto.getPassword(),
                registerAdminDto.isActiveStatus()
        );
        admin1.setPassword(encPassword);
        System.out.println(systemPasword);
        System.out.println(registerAdminDto.getSystemPassword());
        if (registerAdminDto.getSystemPassword().equals(systemPasword)){
            if (adminRepo.checkadmins(admin1.getEmail(),admin1.getMobile())==0){
                adminRepo.save(admin1);
                return admin1.getEmail();
            }else {
                return "Email or Mobile number is already registered as a admin";
            }
        }else {
            return "Invalid System Password";
        }

    }

    @Override
    public String adminLogin(LoginAdminDto loginAdminDto) {
        BCryptPasswordEncoder bCrypt= new BCryptPasswordEncoder();
        Admin admin=adminRepo.loginAdmin(loginAdminDto.getEmail());
        if (admin!=null){
            if (bCrypt.matches(loginAdminDto.getPassword(),admin.getPassword())){
                return admin.getEmail();
            }else {
               return  "Password wrong";
            }
        }else {
            return "Invalid Credentials";
        }
    }
}
