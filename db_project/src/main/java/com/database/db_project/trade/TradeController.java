package com.database.db_project.trade;

import java.util.Locale;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping(value="/trade")
public class TradeController {
	/**
	 *trade url 맵핑입니다.
	 */
	@RequestMapping("/test")
	public String trade() {
		return "chart/chartView";
	}
	
	@RequestMapping("/")
	public String empty() {
		return "trade/homeView";
	}
	
	@RequestMapping("/home")
	public String preHome() {
		return "trade/homeView";
	}
	
	@RequestMapping("/BTC")
	public String BTC() {
		return "trade/BTC/BTCView";
	}
	
	@RequestMapping("/dev")
	public String dev(Locale locale, Model model) {

		return "dev/pages/dashBoard/dashBoardView";
	}
}
