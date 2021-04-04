package com.fiap5dvp.springbootecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fiap5dvp.springbootecommerce.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
