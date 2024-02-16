package com.example.demo.Entity;

import jakarta.persistence.*;


@Entity

@Table(name="cate")
public class Tables {
	public Tables() {
		super();
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
	@Column(name="image")
	private String image;
	public Tables(int id, String category, String image) {
		super();
		this.id = id;
		this.category = category;
		this.image = image;
	}

	@Override
	public String toString() {
		return "Tables [id=" + id + ", category=" + category + ", image=" + image + "]";
	}

	

	

}
