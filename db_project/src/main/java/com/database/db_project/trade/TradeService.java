package com.database.db_project.trade;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.database.db_project.CommonUtil;
import com.database.db_project.userInfo.UserInfo;

@Service
public class TradeService {
	@Autowired
	private CommonUtil commonUtil;
	@Autowired
	private TradeRepository tradeRepository;
	

	// 구매/판매 요청 SQL문 추가
	public List<Trade> createOrder(Trade entity) throws Exception {
		
	
		entity.setE_date(commonUtil.getCurrentDtime());
		
		
		
		return tradeRepository.create(entity);
	}
	
	
}
