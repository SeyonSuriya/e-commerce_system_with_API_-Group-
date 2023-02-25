package com.ecommercesystem.cart.CartRepo;


import com.ecommercesystem.cart.CartDto.cartDto;
import com.ecommercesystem.cart.entity.cart;
import com.ecommercesystem.product.entity.product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface cartRepo extends JpaRepository<product,Integer> {


    @Query(value="select * from cart where userid=:userid", nativeQuery=true)
    List<cart> showcart(Integer userid);
}
