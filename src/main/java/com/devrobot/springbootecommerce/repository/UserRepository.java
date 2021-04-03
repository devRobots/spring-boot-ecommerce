package com.devrobot.springbootecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devrobot.springbootecommerce.model.User;

public interface UserRepository extends JpaRepository<User, String> {

}
