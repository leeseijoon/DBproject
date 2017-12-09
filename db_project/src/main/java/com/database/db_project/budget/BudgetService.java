package com.database.db_project.budget;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.database.db_project.CommonUtil;
import com.database.db_project.board_free.Board_free;
import com.database.db_project.board_free.Board_freeRepository;
import com.database.db_project.history.History;

@Service
public class BudgetService {
	@Autowired
	private CommonUtil commonUtil;
	@Autowired
	private BudgetRepository budgetRepository;

	
	public List<Budget> findOne(Budget entity) throws Exception {
		return budgetRepository.findOne(entity);
	}
	
	public List<Budget> findAll(Budget entity) throws Exception {
		return budgetRepository.findAll(entity);
	}
	public List<Budget> findmine_buy_month(Budget entity) throws Exception {
		return budgetRepository.findmine_buy_month(entity);
	}
	
	public List<Budget> findmine_sell_month(Budget entity) throws Exception {
		return budgetRepository.findmine_sell_month(entity);
	}
	
	public List<Budget> findall_buy_month(Budget entity) throws Exception {
		return budgetRepository.findall_buy_month(entity);
	}
	
	public List<Budget> findall_sell_month(Budget entity) throws Exception {
		return budgetRepository.findall_sell_month(entity);
	}
	
	public List<Budget> getvolume(String u_id) throws Exception {
		return budgetRepository.getvolume(u_id);
	}
}
