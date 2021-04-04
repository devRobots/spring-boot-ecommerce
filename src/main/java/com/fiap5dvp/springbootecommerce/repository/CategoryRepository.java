package com.fiap5dvp.springbootecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fiap5dvp.springbootecommerce.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
