package com.database.db_project.history;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.database.db_project.CommonUtil;
import com.database.db_project.board_free.Board_free;
import com.database.db_project.userInfo.UserInfo;

@Service
public class HistoryService {
	@Autowired
	private CommonUtil commonUtil;
	@Autowired
	private HistoryRepository historyRepository;
	

	public List<History> findAll(History entity) throws Exception {
		return historyRepository.findAll(entity);
	}
	
	public List<History> findCoin(Integer c_idx) throws Exception {
		return historyRepository.findCoin(c_idx);
	}
	public List<History> findmine(String u_id) throws Exception {
		return historyRepository.findmine(u_id);
	}
	
	
	
	public List<History> exchangeCount(String u_id) throws Exception {
		return historyRepository.exchangeCount(u_id);
	}
	
}
