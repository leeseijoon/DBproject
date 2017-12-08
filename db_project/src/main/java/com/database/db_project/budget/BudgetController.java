package com.database.db_project.budget;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.database.db_project.board_free.Board_free;
import com.database.db_project.board_free.Board_freeService;
import com.database.db_project.userInfo.UserInfo;

@Controller
public class BudgetController {
	@Autowired
	private BudgetService budgetService;
	
	//모든 budget 정보 가져오기
		@RequestMapping(value = "/budget/GetBudget.json", method = RequestMethod.POST)
		@ResponseBody
		public List<Budget> GetBudget (@ModelAttribute Budget entity) throws Exception{
			List<Budget> list = budgetService.findAll(entity);
				
			return list;
		}
	
	//특정 user의 budget 정보 가져오기
	@RequestMapping(value = "/budget/GetUserBudget.json", method = RequestMethod.POST)
	@ResponseBody
	public List<Budget> GetUserBudget (@ModelAttribute Budget entity) throws Exception{
		List<Budget> list = budgetService.findOne(entity);
			
		return list;
	}
	
	//특정 user의 한달간 buy 값 가져오기(sum)
	@RequestMapping(value = "/budget/GetUserBudget_buy_month.json", method = RequestMethod.POST)
	@ResponseBody
	public List<Budget> GetUserBudget_buy_month (@ModelAttribute Budget entity) throws Exception{
		List<Budget> list = budgetService.findmine_buy_month(entity);
			
		return list;
	}
	
	//특정 user의 한달간 sell 값 가져오기(sum)
	@RequestMapping(value = "/budget/GetUserBudget_sell_month.json", method = RequestMethod.POST)
	@ResponseBody
	public List<Budget> GetUserBudget_sell_month (@ModelAttribute Budget entity) throws Exception{
		List<Budget> list = budgetService.findmine_sell_month(entity);
			
		return list;
	}
	
	//한달간 buy 값 가져오기(sum)
		@RequestMapping(value = "/budget/GetBudget_buy_month.json", method = RequestMethod.POST)
		@ResponseBody
		public List<Budget> GetBudget_buy_month (@ModelAttribute Budget entity) throws Exception{
			List<Budget> list = budgetService.findall_buy_month(entity);
				
			return list;
		}
		
		// 한달간 sell 값 가져오기(sum)
		@RequestMapping(value = "/budget/GetBudget_sell_month.json", method = RequestMethod.POST)
		@ResponseBody
		public List<Budget> GetBudget_sell_month (@ModelAttribute Budget entity) throws Exception{
			List<Budget> list = budgetService.findall_sell_month(entity);
				
			return list;
		}

	
}
