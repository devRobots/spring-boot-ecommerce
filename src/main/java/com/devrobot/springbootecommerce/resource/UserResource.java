package com.devrobot.springbootecommerce.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devrobot.springbootecommerce.model.User;
import com.devrobot.springbootecommerce.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserResource {
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping(value = "/all")
	public List<User> getAll() {
		return userRepository.findAll();
	}
	
	@PostMapping(value = "/add")
	public List<User> persist(@RequestBody final User user) {
		userRepository.save(user);
		return userRepository.findAll(); 
	}
}
