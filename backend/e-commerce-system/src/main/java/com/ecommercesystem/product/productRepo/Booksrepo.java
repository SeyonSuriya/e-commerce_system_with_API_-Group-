package com.ecommercesystem.product.productRepo;

import com.ecommercesystem.product.entity.books;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Collection;
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


    //Search by author
    @Query("select c from books c where c.author LIKE ?1||'%'")
    List<books> getSerchedProductsByAuthor(String keyword);

    //Search by book_title
    @Query("select c from books c where c.book_title LIKE ?1||'%'")
    List<books> getSerchedProductsByBookTitle(String keyword);

    //Search by isbn
    @Query("select c from books c where c.isbn LIKE ?1||'%'")
    List<books> getSerchedProductsByIsbn(String keyword);

    //Search by Category
    @Query("select c from books c where c.isbn LIKE ?1||'%'")
    List<books> getSerchedProductsByCategory(String keyword);

