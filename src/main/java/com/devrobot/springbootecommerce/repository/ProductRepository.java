package com.devrobot.springbootecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devrobot.springbootecommerce.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
