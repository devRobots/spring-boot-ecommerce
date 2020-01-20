package com.devrobot.springbootecommerce.model;

public class Product {
	private long id;
	private String name;
	private String description;
	private double weight;
	private double price;
	private String[] pictures;
	private Category category;
	
	public Product() {
	}
	
	public Product(long id, String name, String description, double weight, double price, String[] pictures,
			Category category) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.weight = weight;
		this.price = price;
		this.pictures = pictures;
		this.category = category;
	}


	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String[] getPictures() {
		return pictures;
	}
	public void setPictures(String[] pictures) {
		this.pictures = pictures;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public double getWeight() {
		return weight;
	}
	public void setWeight(double weight) {
		this.weight = weight;
	}
}
