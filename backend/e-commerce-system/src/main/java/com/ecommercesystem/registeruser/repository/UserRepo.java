package com.ecommercesystem.registeruser.repository;

import com.ecommercesystem.registeruser.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface UserRepo extends JpaRepository<User,Integer> {


    // Register User Queries
    @Query(value="select * from users a where a.email=:Email", nativeQuery=true)
    List<User> findUserByEmail(String Email);
    @Query(value="select * from users a where a.mobile=:Mobile", nativeQuery=true)
    List<User> findUserByMobile(String Mobile);


    // Login user Queries


    @Query(value="select a.password from users a where a.email=Email", nativeQuery=true)
    String findUserByLoginCredentials(String Email);


}