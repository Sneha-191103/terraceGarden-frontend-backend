package com.example.demo.Repository;

import java.util.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.demo.Entity.Category;


public interface CategoryRepo extends JpaRepository<Category, Integer> {
	@Query(value="SELECT * FROM items i WHERE i.category=?",nativeQuery=true)
    Collection<Category> findByCategory(String category);
	@Query(value="SELECT * FROM items i WHERE i.wishlist=1",nativeQuery=true)
	Collection<Category> findByWishlist();
	@Query(value="SELECT * FROM items i WHERE i.cart=1",nativeQuery=true)
	Collection<Category> findByCart();

}
