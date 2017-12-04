package com.database.db_project.home;

import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HomeController {
	/**
	 *home url 맵핑입니다.
	 */
	@RequestMapping("/test")
	public String home() {
		return "chart/chartView";
	}
	
	@RequestMapping("/home")
	public String preHome() {
		return "home/homeView";
	}
	
	@RequestMapping("/dev")
	public String dev(Locale locale, Model model) {

		return "dev/pages/dashBoard/dashBoardView";
	}
}
