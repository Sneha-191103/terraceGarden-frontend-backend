package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Category;
import com.example.demo.Repository.CategoryRepo;
import java.util.*;

@Service
public class CategoryService {
	@Autowired
	private CategoryRepo cRepo;
	public List<Category> displayAll(){
		return cRepo.findAll();
	}
	public Optional<Category> getByid(int id)
	{
		return cRepo.findById(id);
	}
	public void postAll(Category c)
	{
		cRepo.save(c);
	}
	
	public void updateAll(Category c)
	{
		cRepo.save(c);
	}
	
	public void DeleteAll()
	{
		cRepo.deleteAll();
	}
	public void DeleteById(int id)
	{
		cRepo.deleteById(id);
	}
	public Collection<Category> findbyCat(String category){
		return cRepo.findByCategory(category);
	}
	public Collection<Category> findbyWishlist(){
		return cRepo.findByWishlist();
	}
	public Collection<Category> findbyCart(){
		return cRepo.findByCart();
	}
	public Page<Category> pagination(int pageNo,int pageSize,String sortBy, String sortOrder)
	{
		Sort.Direction direction = Sort.Direction.ASC;
        if (sortOrder.equalsIgnoreCase("desc")) {
            direction = Sort.Direction.DESC;
        }
        Sort sort = Sort.by(direction, sortBy);
        PageRequest pageRequest = PageRequest.of(pageNo-1, pageSize, sort);
        return cRepo.findAll(pageRequest);
    }
	

}
