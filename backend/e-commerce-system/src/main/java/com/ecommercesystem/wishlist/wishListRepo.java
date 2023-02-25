package com.ecommercesystem.wishlist;


import com.ecommercesystem.product.entity.product;
import com.ecommercesystem.product.entity.wishlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface wishListRepo extends JpaRepository<wishlist,Integer> {


    @Query(value="select * from wishlist where userid=:userid", nativeQuery=true)
    List<String> getWishedItems(Integer userid);


}
