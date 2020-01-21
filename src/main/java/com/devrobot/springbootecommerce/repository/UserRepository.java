package com.devrobot.springbootecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devrobot.springbootecommerce.model.User;

/**
 * The Interface UserRepository.
 *
 * @author devrobot
 * @version 1.0
 */
public interface UserRepository extends JpaRepository<User, String> {

}
