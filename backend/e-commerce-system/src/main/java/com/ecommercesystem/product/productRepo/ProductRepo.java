package com.ecommercesystem.product.productRepo;

import com.ecommercesystem.product.entity.items;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;


@EnableJpaRepositories
@Repository
public interface ProductRepo extends JpaRepository<items,Integer> {




    // Register User Queries


       @Query(value="select * from items a where a.item_id=:item_id", nativeQuery=true)
      List<items>  getProductDetails(Integer item_id);

      // @Query(value = "select num_of_units from items where item_id=:item_id")
    //  Integer getAvailableUnits(Integer item_id);




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
