package com.ecommercesystem.checkout.CheckOutRepositories;

import com.ecommercesystem.product.entity.items;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


@EnableJpaRepositories
@Repository
public interface CheckoutRepo extends JpaRepository<items,Integer> {


    // Retriving items details that selected from cart
    @Query(value="select * from items a where a.item_id=:item_id", nativeQuery=true)
    items getProductDetails(Integer item_id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE items a SET a.num_of_units=:availableUnits WHERE a.item_id=:item_id")
    Integer updateAvailableUnits(Integer item_id, Integer availableUnits);



    // add order to orders
   // @Transactional
   // @Modifying
  //  @Query(value="Insert into orders  ", nativeQuery=true)
  //  void placeOrder(SelectedProductsDto selectedProductsDto, Integer userid);



}
