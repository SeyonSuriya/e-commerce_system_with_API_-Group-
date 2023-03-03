package com.ecommercesystem.checkout.CheckOutRepositories;

import com.ecommercesystem.checkout.entity.orders;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface OrdersRepo extends JpaRepository<orders,Integer> {

    @Transactional
    @Modifying
    @Query(value=" Insert into orders (address,item_id,item_price,item_units,order_status,userid) Values(?1,?2,?3,?4,'Placed',?5)", nativeQuery=true)
    Integer purchaceItem(String address,Integer item_id,Integer Product_price,Integer Units,Integer userid);


}
