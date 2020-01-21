package com.devrobot.springbootecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * The Class User.
 *
 * @author devrobot
 * @version 1.0
 */
@Entity
public class User {

	/** The email. */
	@Id
	@Column(name = "email", unique = true, nullable = false)
	private String email;

	/** The password. */
	@Column(name = "password", nullable = false)
	private String password;

	/**
	 * Empty Constructor. Instantiates a new user.
	 */
	public User() {
	}

	/**
	 * Instantiates a new user.
	 *
	 * @param email    the email
	 * @param password the password
	 * @param name     the name
	 */
	public User(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	/**
	 * Gets the email.
	 *
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * Sets the email.
	 *
	 * @param email the new email
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * Gets the password.
	 *
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * Sets the password.
	 *
	 * @param password the new password
	 */
	public void setPassword(String password) {
		this.password = password;
	}
}
