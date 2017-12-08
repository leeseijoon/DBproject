package com.database.db_project.history;

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
public class HistoryController {
	@Autowired
	private HistoryService historyService;
	
	/**
	 *trade url 맵핑입니다.
	 */
	@RequestMapping("/history")
	public String empty() {
		return "history/HistoryView";
	}
	
	@RequestMapping("/history/home")
	public String preHome() {
		return "history/HistoryView";
	}
	
	// select sql문 정보 가져오기
	@RequestMapping(value = "/history/GetHistoryList0.json", method = RequestMethod.POST)
	@ResponseBody
	public List<History> GetHistoryList (@ModelAttribute History entity) throws Exception{
		List<History> list= historyService.findAll(entity);
		
		return list;
	}
	
	//검색한 select sql문 정보 가져오기
		@RequestMapping(value = "/history/GetHistoryList1.json", method = RequestMethod.POST)
		@ResponseBody
		public List<History> GetHistoryList1 (Integer c_idx) throws Exception{
			
			if(c_idx == null) {
				History entity = null;
				List<History> list= historyService.findAll(entity);
				return list;
			}
			
			List<History> list= historyService.findCoin(c_idx);
			// 1 btc, 2 eth, 3 xrp
			return list;
		}
		//검색한 select sql문 정보 가져오기
				@RequestMapping(value = "/history/GetHistoryList2.json", method = RequestMethod.POST)
				@ResponseBody
				public List<History> GetHistoryList2 (String u_id) throws Exception{
					
					List<History> list= historyService.findmine(u_id);
					return list;
				}
}
