package com.fiap5dvp.springbootecommerce.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fiap5dvp.springbootecommerce.model.User;
import com.fiap5dvp.springbootecommerce.repository.UserRepository;

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

	@GetMapping(value = "/{username}")
	public User get(@PathVariable("username") String username) {
		return userRepository.findById(username).get();
	}

	@PostMapping(value = "/add")
	public User persist(@RequestBody final User user) {
		userRepository.save(user);
		return userRepository.findById(user.getUsername()).get();
	}

	@DeleteMapping(value = "/delete")
	public List<User> delete(@PathVariable String username) {
		userRepository.deleteById(username);
		return userRepository.findAll();
	}

	@PutMapping(value = "/{username}/put")
	public List<User> put(@PathVariable String username, @RequestBody User user) {
		if (userRepository.existsById(username)) {
			userRepository.deleteById(username);
			userRepository.save(user);
		}

		return userRepository.findAll();
	}
}
