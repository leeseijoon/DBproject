package com.database.db_project.budget;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.database.db_project.board_free.Board_free;

@Repository
public class BudgetRepository {
	@Autowired
	private SqlSession sqlSession;

	
	public List<Budget> findOne(Budget entity) throws Exception{
		return sqlSession.selectList("com.database.db_project.budget.findOne", entity);
		
	}
}
