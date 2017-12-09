package com.database.db_project.chart;

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
import com.database.db_project.budget.Budget;
import com.database.db_project.budget.BudgetService;
import com.database.db_project.history.History;
import com.database.db_project.history.HistoryService;
import com.database.db_project.userInfo.UserInfo;

@Controller
public class ChartController {
	@Autowired
	private ChartService chartService;
	@Autowired
	private HistoryService historyService;
	@Autowired
	private BudgetService budgetService;
	

	//게시판 목록 화면
	@RequestMapping("/chart/chartPrice")
	public String chartView() {
		return "chart/chartPrice/chartPriceView";
	}
	
	@RequestMapping("chart/mychart")
	public String mychartView() {
		return "chart/mychart/mychartView";
	}
	
	@RequestMapping("chart/chartInsite")
	public String chartInsiteView() {
		return "chart/chartInsite/chartInsiteView";
	}

	
	
	//회원들 코인 보유량 가져오기
	@RequestMapping(value = "/chart/volumeRate.json", method = RequestMethod.POST)
	@ResponseBody
	public List<Budget> volumeRate (String u_id) throws Exception{
		
		List<Budget> list= budgetService.getvolume(u_id);
		return list;
	}
	
	//회원들 코인 거래량 가져오기
		@RequestMapping(value = "/chart/exchangeCount.json", method = RequestMethod.POST)
		@ResponseBody
		public List<History> exchangeCount (String u_id) throws Exception{
			
			List<History> list= historyService.exchangeCount(u_id);
			return list;
		}


}


