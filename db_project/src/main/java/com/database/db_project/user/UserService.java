package com.database.db_project.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<User> findAll(User entity) throws Exception {
		return userRepository.findAll(entity);
	}
	
}
