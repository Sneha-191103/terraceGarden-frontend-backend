package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.AuthModel.Auth;
import com.example.demo.AuthRepo.AuthRepo;

@Service
public class LoginService {
	@Autowired
	private AuthRepo authRepo;
	
	public String Loginx(String username, String password) {
		
		Auth userx = authRepo.findByusername(username);
		if (userx == null) {
			return "Invalid User !";
		} else {
			if (userx.getPassword().equals(password)) {
				return "Login Successful !";
			} else {
				return "Invalid Password";
			}
		}
	}
	public String SignUpx(Auth userx) {
		String username = userx.getUsername();
		Auth userxAuth = authRepo.findByusername(username);
		if (userxAuth == null) {
			authRepo.save(userx);
			return "Signup Successfull!";
		} else {
			if (userxAuth.getUsername().equals(username)) {
				return "Username Already Exists";
			}
			else {
				return"Invalid Username";
			}
		}
	}
	public List<Auth> Users() {
		return authRepo.findAll();
	}

}
