package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Tables;

public interface DataRepo extends JpaRepository<Tables, Integer> {

}
