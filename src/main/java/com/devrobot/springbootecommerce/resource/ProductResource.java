package com.devrobot.springbootecommerce.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devrobot.springbootecommerce.repository.ProductRepository;

import com.devrobot.springbootecommerce.model.Product;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("*")
public class ProductResource {
	
	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping(value = "/all")
	public List<Product> getAll() {
		return productRepository.findAll();
	}
	
	@PostMapping(value = "/add")
	public List<Product> persist(@RequestBody final Product product) {
		productRepository.save(product);
		return productRepository.findAll(); 
	}
}
