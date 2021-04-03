package com.devrobot.springbootecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devrobot.springbootecommerce.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
