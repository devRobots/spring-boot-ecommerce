package com.devrobot.springbootecommerce.model;

import java.util.List;

public class Category {
	private long id;
	private String name;
	private String picture;
	private Category parent;
	private List<Category> children;
	
	public Category() {
	}
	public Category(long id, String name, String picture, Category parent, List<Category> children) {
		this.id = id;
		this.name = name;
		this.picture = picture;
		this.parent = parent;
		this.children = children;
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
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	public Category getParent() {
		return parent;
	}
	public void setParent(Category parent) {
		this.parent = parent;
	}
	public List<Category> getChildren() {
		return children;
	}
	public void setChildren(List<Category> children) {
		this.children = children;
	}
	
	
}
