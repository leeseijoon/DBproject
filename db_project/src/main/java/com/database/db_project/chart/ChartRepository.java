package com.database.db_project.chart;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.database.db_project.board_free.Board_free;
import com.database.db_project.budget.Budget;
import com.database.db_project.history.History;

@Repository
public class ChartRepository {
	@Autowired
	private SqlSession sqlSession;



}
