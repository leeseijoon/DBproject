package com.database.db_project.chart;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.database.db_project.CommonUtil;
import com.database.db_project.board_free.Board_free;
import com.database.db_project.board_free.Board_freeRepository;
import com.database.db_project.budget.Budget;
import com.database.db_project.history.History;

@Service
public class ChartService {
	@Autowired
	private CommonUtil commonUtil;
	@Autowired
	private ChartRepository chartRepository;

}
