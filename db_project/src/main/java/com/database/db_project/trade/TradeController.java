package com.database.db_project.trade;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.database.db_project.userInfo.UserInfo;
import com.database.db_project.userInfo.UserInfoService;


@Controller
@RequestMapping(value="/trade")
public class TradeController {
	
	private TradeService tradeService;
	
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
	
	//BTC 구매 오더 등록
	@RequestMapping(value = "/BTC", method = RequestMethod.POST)
	public String createBuyOrder (HttpServletRequest request, @ModelAttribute("model_entity") 
		@Validated OrderInfo entity, BindingResult errors) throws Exception {
		//tradeService.create(entity);
		return "/home/homeView";
	}
	
	@RequestMapping("/dev")
	public String dev(Locale locale, Model model) {

		return "dev/pages/dashBoard/dashBoardView";
	}
}
