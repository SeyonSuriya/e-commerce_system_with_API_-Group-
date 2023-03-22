package com.ecommercesystem.checkout.CheckOutRepositories;

import com.ecommercesystem.product.entity.books;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


@EnableJpaRepositories
@Repository
public interface CheckoutRepo extends JpaRepository<books,Integer> {
    
    // Retriving books details that selected from cart
    @Query(value="select * from books a where a.book_id=:Book_id", nativeQuery=true)
    books getProductDetails(Integer Book_id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE books a SET a.num_of_units=:availableUnits WHERE a.book_id=:Book_id")
    Integer updateAvailableUnits(Integer Book_id, Integer availableUnits);



    // add order to orders
   // @Transactional
   // @Modifying
  //  @Query(value="Insert into orders  ", nativeQuery=true)
  //  void placeOrder(SelectedProductsDto selectedProductsDto, Integer userid);



}
