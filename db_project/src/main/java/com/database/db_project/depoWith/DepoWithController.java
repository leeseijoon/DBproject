package com.database.db_project.depoWith;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.database.db_project.userInfo.*;

@Controller
public class DepoWithController {
	@Autowired
	private DepoWithService depowithService;
	
	
	@RequestMapping("/depoWith")
	public String depowith() {
		return "depowith/DepoWithView";
	}
	
	// 입금
	@RequestMapping(value = "/depoWith/deposend", method = RequestMethod.POST)
	public String depo_it (HttpServletRequest request, @ModelAttribute("model_entity") 
		@Validated DepoWith entity, BindingResult errors) throws Exception {
		depowithService.Depo(entity);
		return "depowith/DepoWithView";
	}
	
	// 출금
	@RequestMapping(value = "/depoWith/withsend", method = RequestMethod.POST)
	public String with_it (HttpServletRequest request, @ModelAttribute("model_entity") 
		@Validated DepoWith entity, BindingResult errors) throws Exception {
		depowithService.With(entity);
		return "depowith/DepoWithView";
	}

}
