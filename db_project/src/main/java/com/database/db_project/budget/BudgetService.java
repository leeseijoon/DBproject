package com.database.db_project.budget;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.database.db_project.CommonUtil;
import com.database.db_project.board_free.Board_free;
import com.database.db_project.board_free.Board_freeRepository;

@Service
public class BudgetService {
	@Autowired
	private CommonUtil commonUtil;
	@Autowired
	private BudgetRepository budgetRepository;

	
	public List<Budget> findOne(Budget entity) throws Exception {
		return budgetRepository.findOne(entity);
	}
}
