package com.ecommercesystem.product.productRepo;

import com.ecommercesystem.product.entity.product;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;


@EnableJpaRepositories
@Repository
public interface ProductRepo extends JpaRepository<product,Integer> {




    // Register User Queries


       @Query(value="select * from items a where a.item_id=:item_id", nativeQuery=true)
      List<product>  getProductDetails(Integer item_id);



    @Query(value="select * from wishlist a where a.item_id=?1 And userid=?2", nativeQuery=true)
    String  checkwishes(Integer item_id, Integer userid);
    @Transactional
    @Modifying
    @Query(value="INSERT INTO wishlist (userid, item_id)\n" +
            "VALUES (?2,?1);", nativeQuery=true)
    void addWish(Integer item_id, Integer userid);



    @Transactional
    @Modifying
    @Query(value="delete  from wishlist where item_id=?1 and userid=?2", nativeQuery=true)
    void removeWish(Integer item_id, Integer userid);




    // @Query(value="select * from users a where a.mobile=:Mobile", nativeQuery=true)
    // List<User> findUserByMobile(String Mobile);

    // Login user Queries

    //     @Query(value="SELECT password from users a WHERE a.email=:Email", nativeQuery=true)
    //      String findUserByLoginCredentials(String Email);

    //      @Transactional
    //      @Modifying
    //      @Query(value="update users a set a.password=?2 WHERE a.email=?1", nativeQuery=true)
    //      Integer changePassword(String Email,String password);

    //     @Transactional
    //     @Modifying
    //     @Query(value="update users a set a.active_status=?1 WHERE a.email=?2", nativeQuery=true)
    //     void changeActiveStatus(int i,String email);
    //  }
}
