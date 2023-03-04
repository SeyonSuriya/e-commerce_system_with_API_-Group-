package com.ecommercesystem.checkout.CheckOutRepositories;

import com.ecommercesystem.checkout.entity.orders;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface OrdersRepo extends JpaRepository<orders,Integer> {

    @Transactional
    @Modifying
    @Query(value=" Insert into orders (address,item_id,item_price,item_units,order_status,orderid,userid) Values(?1,?2,?3,?4,'Placed',?5,?6)", nativeQuery=true)
    Integer purchaceItem(String address,Integer item_id,Integer Product_price,Integer Units,Integer orderid,Integer userid);
    @Query(value = "Select orderid from orders ORDER BY orderid DESC Limit 1")
    Integer getNextOrderId();

    @Query(value="select * from orders a where a.userid=:userid", nativeQuery=true)
    List<orders> getorders(Integer userid);

    @Transactional
    @Modifying
    @Query(value="delete from orders where userid=?1 and orderid=?2", nativeQuery=true)
    Integer canselOrder(Integer userid,Integer orderid);

    @Transactional
    @Modifying
    @Query(value="delete from orders where userid=?1 and reference=?2", nativeQuery=true)
    Integer canselItem(Integer userid,Integer reference);


}
