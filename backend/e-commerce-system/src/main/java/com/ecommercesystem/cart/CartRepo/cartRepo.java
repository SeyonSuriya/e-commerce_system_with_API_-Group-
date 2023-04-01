package com.ecommercesystem.cart.CartRepo;


import com.ecommercesystem.cart.entity.cart;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface cartRepo extends JpaRepository<cart,Integer> {

    //Get books in cart
    @Query(value="select * from cart where userid=:userid", nativeQuery=true)
    List<cart> showcart(Integer userid);

    // check if the item already in the cart
    @Query(value = "select quantity from cart where userid=?2 and item_id=?1", nativeQuery=true)
    Integer getExistingUnits(Integer item_id,Integer userid);

    // Add item to cart if the item not already in cart
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO cart (userid, item_id,quantity)\n" +
            "VALUES (?3,?1,?2);", nativeQuery=true)
    void addToCart(Integer item_id, Integer units, Integer userid);

    // Add item to cart if the item already exists
    @Transactional
    @Modifying
    @Query(value = "update cart set quantity=?2 where userid=?3 and item_id=?1 ")
    void updateCart(Integer item_id, Integer units, Integer userid);

    // Remove an item in the cart
    @Transactional
    @Modifying
    @Query(value = "delete from cart where userid=?2 and item_id=?1")
    void removeFromcart(Integer item_id,Integer userid);


}
