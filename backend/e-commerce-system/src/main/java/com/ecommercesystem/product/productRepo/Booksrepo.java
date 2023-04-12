package com.ecommercesystem.product.productRepo;

import com.ecommercesystem.product.entity.books;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;


@EnableJpaRepositories
@Repository
public interface Booksrepo extends JpaRepository<books,Integer> {


    // Register User Queries

    @Query(value="select * from books a where a.book_id=:item_id", nativeQuery=true)
    List<books>  getProductDetails(Integer item_id);

    @Query(value="select * from books a where a.book_id=:item_id", nativeQuery=true)
    books getItemDetails(Integer item_id);

    @Query(value = "select * from books ORDER BY num_of_orders DESC;",nativeQuery = true)
    List<books> GetAllBooks();

    @Query(value = "select * from books where category=:category ORDER BY num_of_orders DESC;",nativeQuery = true)
    List<books> GetBooksByCategory(String category);


    @Query("select c from books c where c.isbn LIKE ?1||'%'")
    List<books> getSerchedProducts(String keyword);

    // @Query(value = "select num_of_units from books where item_id=:item_id")
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
