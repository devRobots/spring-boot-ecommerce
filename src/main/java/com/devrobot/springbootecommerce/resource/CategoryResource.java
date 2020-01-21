package com.devrobot.springbootecommerce.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devrobot.springbootecommerce.model.Category;
import com.devrobot.springbootecommerce.repository.CategoryRepository;

/**
 * The Class CategoryResource.
 *
 * @author devrobot
 * @version 1.0
 */
@RestController
@RequestMapping("/api/categories")
@CrossOrigin("*")
public class CategoryResource {

	/** The category repository. */
	@Autowired
	private CategoryRepository categoryRepository;

	/**
	 * Gets all categories.
	 *
	 * @return all categories
	 */
	@GetMapping(value = "/all")
	public List<Category> getAll() {
		return categoryRepository.findAll();
	}

	/**
	 * Persist category.
	 *
	 * @param category the category
	 * @return the list
	 */
	@PostMapping(value = "/add")
	public List<Category> persist(@RequestBody final Category category) {
		categoryRepository.save(category);
		return categoryRepository.findAll();
	}

}
