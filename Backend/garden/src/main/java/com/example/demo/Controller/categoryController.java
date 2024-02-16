package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Category;
import com.example.demo.Service.CategoryService;
import java.util.*;
@CrossOrigin("*")
@RestController
public class categoryController {
	@Autowired
	private CategoryService cser;
	
	@GetMapping("/getall")
	public List<Category> display(){
		return cser.displayAll();
	}
	@GetMapping("/getbyid/{id}")
	public Optional<Category> getbyid(@PathVariable int id)
	{
		return cser.getByid(id);
	}
	
	@PostMapping("/postall")
	public void post(@RequestBody Category c) {
		cser.postAll(c);
	}
	
	@PutMapping("/put/{id}")
	public void put(@PathVariable int id,@RequestBody Category c)
	{
		c.setId(id);
		cser.updateAll(c);
	}
	
	@DeleteMapping("/delete")
	public void delete() {
		cser.DeleteAll();
	}
	@DeleteMapping("/deletebyid/{id}")
	public void deletebyid(@PathVariable int id) {
		cser.DeleteById(id);
	}
	@GetMapping("/findbycat/{category}")
	public Collection<Category> getbycat(@PathVariable String category)
	{
		return cser.findbyCat(category);
	}
	@GetMapping("/wishlist")	
	public Collection<Category> getWishlist(){
		return cser.findbyWishlist();
	}
	@GetMapping("/cart")
	public Collection<Category> getCart(){
		return cser.findbyCart();
	}
	@GetMapping("/pagination/{pageNo}/{sortBy}/{sortOrder}")
	public Page<Category> getPage( 
			@PathVariable int pageNo,
            @PathVariable String sortBy,
            @PathVariable String sortOrder)
	{
		int pageSize=8;
		
		 return cser.pagination(pageNo, pageSize, sortBy, sortOrder);
    }
		


}
