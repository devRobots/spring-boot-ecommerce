package com.devrobot.springbootecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devrobot.springbootecommerce.model.Category;

/**
 * The Interface CategoryRepository.
 *
 * @author devrobot
 * @version 1.0
 */
public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
