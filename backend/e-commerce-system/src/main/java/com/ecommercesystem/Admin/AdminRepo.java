package com.ecommercesystem.Admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface AdminRepo extends JpaRepository<Admin,Integer> {



    @Query(value="SELECT count(*) from admin a WHERE a.email=?1 And a.mobile=?2", nativeQuery=true)
    Integer checkadmins(String email, String mobile);


    @Query(value="SELECT * from admin a WHERE a.email=?1", nativeQuery=true)
    Admin loginAdmin(String email);
}
