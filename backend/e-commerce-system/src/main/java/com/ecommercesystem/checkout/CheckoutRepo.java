package com.ecommercesystem.checkout;

import com.ecommercesystem.product.entity.product;
import com.ecommercesystem.registeruser.entity.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;


@EnableJpaRepositories
@Repository
public interface CheckoutRepo extends JpaRepository<product,Integer> {





    @Query(value="select * from items a where a.item_id=:item_id", nativeQuery=true)
    product getProductDetails(Integer item_id);
}