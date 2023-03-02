package com.ecommercesystem.checkout;

import com.ecommercesystem.product.entity.product;
import com.ecommercesystem.registeruser.entity.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;



@EnableJpaRepositories
@Repository
public interface CheckoutRepo extends JpaRepository<product,Integer> {

    @Query(value="select * from users where userid=:userid", nativeQuery=true)
    User getAddressBYId(Integer userid);

    // Change default address
    @Transactional
    @Modifying
    @Query(value="update users a set a.first_name=?1 and a.second_name=?2 and a.address_line1=?3 and a.address_line2=?4  and district=?5 and district=?6 and postal_code=?7 and province=?8  WHERE a.userid=?9", nativeQuery=true)
    void changeUserAddress(String firstname,String secondname,String address_line1,String address_line2,String district,String postal_code,String mobile,String province,Integer userid);


    @Query(value="select * from items a where a.item_id=:item_id", nativeQuery=true)
    product getProductDetails(Integer item_id);
}
