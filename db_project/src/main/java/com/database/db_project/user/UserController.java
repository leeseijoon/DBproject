package com.database.db_project.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value="/user")
public class UserController {
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/GetUserlist.json", method = RequestMethod.POST)
	@ResponseBody
	public List<User> GetUserList (@ModelAttribute User entity) throws Exception{
		List<User> list= userService.findAll(entity);
		
		return list;
	}
	
	@RequestMapping("/GetUserlist")
	public String userlist() {
		return "user/userlist/userlistView";
	}
	
	@RequestMapping("/myInfo")
	public String myInfo() {
		return "user/myInfo/myInfoView";
	}
	


	public String preHome() {
		return "user/userlist/userlistView";
	}
}
