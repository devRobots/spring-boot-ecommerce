package com.devrobot.springbootecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devrobot.springbootecommerce.model.Product;

/**
 * The Interface ProductRepository.
 *
 * @author devrobot
 * @version 1.0
 */
public interface ProductRepository extends JpaRepository<Product, Integer> {
}
