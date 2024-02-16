package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Tables;
import com.example.demo.Service.DataService;

@RestController
@CrossOrigin("*")
public class DataController {
	@Autowired
	private DataService ser;
	@GetMapping("/show")
	public  List<Tables> shoe(){
		return ser.dispcat();
	}

}
