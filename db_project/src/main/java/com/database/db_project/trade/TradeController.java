package com.database.db_project.trade;

import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.database.db_project.board_free.Board_free;
import com.database.db_project.budget.Budget;
import com.database.db_project.userInfo.UserInfo;
import com.database.db_project.userInfo.UserInfoService;


@Controller
public class TradeController {
	@Autowired
	private TradeService tradeService;
	
	/**
	 *trade url 맵핑입니다.
	 */
	@RequestMapping("/trade/")
	public String empty() {
		return "trade/BTC/BTCView";
	}
	
	
	
	@RequestMapping("/trade/home")
	public String preHome() {
		return "trade/BTC/BTCView";
	}
	
	@RequestMapping("/trade/BTC")
	public String BTC() {
		return "trade/BTC/BTCView";
	}
	
	@RequestMapping("/trade/ETH")
	public String ETH() {
		return "trade/ETH/ETHView";
	}
	@RequestMapping("/trade/XRP")
	public String XRP() {
		return "trade/XRP/XRPView";
	}
	
	//BTC 구매,판매 오더 등록
	@RequestMapping(value = "/trade/BTC/buy", method = RequestMethod.POST)
	public String createbtcBuyOrder (HttpServletRequest request, @ModelAttribute("model_entity") 
		@Validated Trade entity, BindingResult errors) throws Exception {
		
		entity.setSell_buy(0);
		tradeService.createOrder(entity);

		return "trade/BTC/BTCView";
	}
	
	//BTC 구매,판매 오더 등록
	@RequestMapping(value = "/trade/BTC/sell", method = RequestMethod.POST)
	public String createbtcSellOrder (HttpServletRequest request, @ModelAttribute("model_entity") 
		@Validated Trade entity, BindingResult errors) throws Exception {
		
		entity.setSell_buy(1);
		tradeService.createOrder(entity);

		return "trade/BTC/BTCView";
	}
	
	//ETH 구매,판매 오더 등록
			@RequestMapping(value = "/trade/ETH/buy", method = RequestMethod.POST)
			public String createethBuyOrder (HttpServletRequest request, @ModelAttribute("model_entity") 
				@Validated Trade entity, BindingResult errors) throws Exception {
				
				entity.setSell_buy(0);
				tradeService.createOrder(entity);

				return "trade/ETH/ETHView";
			}
	
		@RequestMapping(value = "/trade/ETH/sell", method = RequestMethod.POST)
		public String createethSellOrder (HttpServletRequest request, @ModelAttribute("model_entity") 
			@Validated Trade entity, BindingResult errors) throws Exception {
			
			entity.setSell_buy(1);
			tradeService.createOrder(entity);

			return "trade/ETH/ETHView";
		}
		//ETH 구매,판매 오더 등록
		@RequestMapping(value = "/trade/XRP/buy", method = RequestMethod.POST)
		public String createxrpBuyOrder (HttpServletRequest request, @ModelAttribute("model_entity") 
			@Validated Trade entity, BindingResult errors) throws Exception {
			
			entity.setSell_buy(0);
			tradeService.createOrder(entity);

			return "trade/XRP/XRPView";
		}

	@RequestMapping(value = "/trade/XRP/sell", method = RequestMethod.POST)
	public String createxrpSellOrder (HttpServletRequest request, @ModelAttribute("model_entity") 
		@Validated Trade entity, BindingResult errors) throws Exception {
		
		entity.setSell_buy(1);
		tradeService.createOrder(entity);

		return "trade/XRP/XRPView";
	}
	
	
	@RequestMapping("/trade/dev")
	public String dev(Locale locale, Model model) {

		return "dev/pages/dashBoard/dashBoardView";
	}
}
