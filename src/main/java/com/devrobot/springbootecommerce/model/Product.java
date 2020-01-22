package com.devrobot.springbootecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * The Class Product.
 *
 * @author devrobot
 * @version 1.0
 */
@Entity
public class Product {

	/** The id. */
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", unique = true, nullable = false)
	private Integer id;

	/** The name. */
	@Column(name = "name", nullable = false)
	private String name;

	/** The description. */
	@Column(name = "description")
	private String description;

	/** The weight. */
	@Column(name = "weight")
	private double weight;

	/** The price. */
	@Column(name = "price", nullable = false)
	private double price;

	/** The pictures. */
	@Column(name = "picture1")
	private String picture1;

	/** The pictures. */
	@Column(name = "picture2")
	private String picture2;

	/** The pictures. */
	@Column(name = "picture3")
	private String picture3;

	/** The category. */
	@ManyToOne
	private Category category;

	/**
	 * Empty Constructor. Instantiates a new product.
	 */
	public Product() {
	}

	/**
	 * Instantiates a new product.
	 *
	 * @param id          the id
	 * @param name        the name
	 * @param description the description
	 * @param weight      the weight
	 * @param price       the price
	 * @param picture1    the picture 1
	 * @param picture2    the picture 2
	 * @param picture3    the picture 3
	 * @param category    the category
	 */
	public Product(Integer id, String name, String description, double weight, double price, String picture1,
			String picture2, String picture3, Category category) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.weight = weight;
		this.price = price;
		this.picture1 = picture1;
		this.picture2 = picture2;
		this.picture3 = picture3;
		this.category = category;
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
	 * Gets the description.
	 *
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * Sets the description.
	 *
	 * @param description the new description
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * Gets the picture 1.
	 *
	 * @return the picture 1
	 */
	public String getPicture1() {
		return picture1;
	}

	/**
	 * Sets the picture 1.
	 *
	 * @param picture1 the new picture 1
	 */
	public void setPicture1(String picture1) {
		this.picture1 = picture1;
	}

	/**
	 * Gets the picture 2.
	 *
	 * @return the picture 2
	 */
	public String getPicture2() {
		return picture2;
	}

	/**
	 * Sets the picture 2.
	 *
	 * @param picture2 the new picture 2
	 */
	public void setPicture2(String picture2) {
		this.picture2 = picture2;
	}

	/**
	 * Gets the picture 3.
	 *
	 * @return the picture 3
	 */
	public String getPicture3() {
		return picture3;
	}

	/**
	 * Sets the picture 3.
	 *
	 * @param picture3 the new picture 3
	 */
	public void setPicture3(String picture3) {
		this.picture3 = picture3;
	}

	/**
	 * Gets the price.
	 *
	 * @return the price
	 */
	public double getPrice() {
		return price;
	}

	/**
	 * Sets the price.
	 *
	 * @param price the new price
	 */
	public void setPrice(double price) {
		this.price = price;
	}

	/**
	 * Gets the category.
	 *
	 * @return the category
	 */
	public Category getCategory() {
		return category;
	}

	/**
	 * Sets the category.
	 *
	 * @param category the new category
	 */
	public void setCategory(Category category) {
		this.category = category;
	}

	/**
	 * Gets the weight.
	 *
	 * @return the weight
	 */
	public double getWeight() {
		return weight;
	}

	/**
	 * Sets the weight.
	 *
	 * @param weight the new weight
	 */
	public void setWeight(double weight) {
		this.weight = weight;
	}
}
