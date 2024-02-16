package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

import com.example.demo.Entity.Tables;
import com.example.demo.Repository.DataRepo;

@Service
public class DataService {
	@Autowired
	private DataRepo drep;
	public List<Tables> dispcat(){
		return drep.findAll();
	}

}
