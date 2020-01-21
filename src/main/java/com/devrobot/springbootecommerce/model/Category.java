package com.devrobot.springbootecommerce.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

/**
 * The Class Category.
 * 
 * @author devrobot
 * @version 1.0
 */
@Entity
public class Category {

	/** The id. */
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;

	/** The name. */
	@Column(name = "name", unique = true, nullable = false)
	private String name;

	/** The picture. */
	@Column(name = "picture")
	private String picture;

	/** The products. */
	@OneToMany(mappedBy = "category")
	private List<Product> products;

	/**
	 * Empty Constructor. Instantiates a new category.
	 */
	public Category() {
	}

	/**
	 * Instantiates a new category.
	 *
	 * @param id       the id
	 * @param name     the name
	 * @param picture  the picture
	 * @param children the children
	 */
	public Category(Integer id, String name, String picture, List<Category> children) {
		this.id = id;
		this.name = name;
		this.picture = picture;
	}

	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	public Integer getId() {
		return id;
	}

	/**
	 * Sets the id.
	 *
	 * @param id the new id
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * Gets the name.
	 *
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * Sets the name.
	 *
	 * @param name the new name
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * Gets the picture.
	 *
	 * @return the picture
	 */
	public String getPicture() {
		return picture;
	}

	/**
	 * Sets the picture.
	 *
	 * @param picture the new picture
	 */
	public void setPicture(String picture) {
		this.picture = picture;
	}
}
