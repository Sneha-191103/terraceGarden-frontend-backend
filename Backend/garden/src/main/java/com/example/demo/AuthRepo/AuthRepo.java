package com.example.demo.AuthRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.AuthModel.Auth;


	public interface AuthRepo extends JpaRepository<Auth, Integer> {
		Auth findByusername(String username);
	}

