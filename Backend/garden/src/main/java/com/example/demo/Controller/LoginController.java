package com.example.demo.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.AuthModel.Auth;
import com.example.demo.Service.LoginService;
@CrossOrigin("*")
@RestController
public class LoginController {
	@Autowired
	private LoginService lg;
	@PostMapping("/signin")
	private String Login(@RequestBody Map<String, String> Loginx) {
	    String username = Loginx.get("username");
	    String password = Loginx.get("password");
	    String result = lg.Loginx(username, password);
	    return result;
	}
	@GetMapping("/users")
	private List<Auth> Users() {
		return lg.Users();
	}
	
    @PostMapping("/auth/signup")
    public String Signup(@RequestBody Auth userx) {
        return lg.SignUpx(userx);
    }
	

}
