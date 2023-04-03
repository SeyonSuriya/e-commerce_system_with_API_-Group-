package com.ecommercesystem.wishlist.wishlistRepo;


import com.ecommercesystem.wishlist.entity.wishlist;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface wishListRepo extends JpaRepository<wishlist,Integer> {


    @Query(value="select * from wishlist where userid=:userid", nativeQuery=true)
    List<wishlist> getWishedItems(Integer userid);


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



}
