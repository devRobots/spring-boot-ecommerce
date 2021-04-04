package com.fiap5dvp.springbootecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fiap5dvp.springbootecommerce.model.User;

public interface UserRepository extends JpaRepository<User, String> {

}
