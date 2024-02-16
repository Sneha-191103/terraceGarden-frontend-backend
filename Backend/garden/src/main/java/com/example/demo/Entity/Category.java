package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="items")
public class Category {
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	@Column(name="category")
	private String category;
	@Column(name="description")
	private String description;
	@Column(name="rate")
	private float rate;
	@Column(name="image")
	private String image;
	public Category() {
		super();
	}
	
	
	@Override
	public String toString() {
		return "Category [id=" + id + ", category=" + category + ", description=" + description + ", rate=" + rate
				+ ", image=" + image + ", wishlist=" + wishlist + ", cart=" + cart + ", quantity=" + quantity + "]";
	}
	public Category(int id, String category, String description, float rate, String image, boolean wishlist,
			boolean cart, int quantity) {
		super();
		this.id = id;
		this.category = category;
		this.description = description;
		this.rate = rate;
		this.image = image;
		this.wishlist = wishlist;
		this.cart = cart;
		this.quantity = quantity;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public float getRate() {
		return rate;
	}
	public void setRate(float rate) {
		this.rate = rate;
	}
	public boolean isWishlist() {
		return wishlist;
	}
	public void setWishlist(boolean wishlist) {
		this.wishlist = wishlist;
	}
	public boolean isCart() {
		return cart;
	}
	public void setCart(boolean cart) {
		this.cart = cart;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	@Column(name="wishlist")
	private boolean wishlist;
	@Column(name="cart")
	private boolean cart;
	@Column(name="quantity")
	private int quantity;

}
