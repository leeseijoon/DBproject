package com.database.db_project.budget;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.database.db_project.board_free.Board_free;
import com.database.db_project.history.History;

@Repository
public class BudgetRepository {
	@Autowired
	private SqlSession sqlSession;

	
	public List<Budget> findOne(Budget entity) throws Exception{
		return sqlSession.selectList("com.database.db_project.budget.findOne", entity);
		
	}
	
	public List<Budget> findAll(Budget entity) throws Exception{
		return sqlSession.selectList("com.database.db_project.budget.findAll", entity);
		
	}
	
	public List<Budget> findmine_buy_month(Budget entity) throws Exception{
		List<Budget> list = sqlSession.selectList("com.database.db_project.budget.findmine_buy_month", entity);
			
		return list;
	}
	
	public List<Budget> findmine_sell_month(Budget entity) throws Exception{
		List<Budget> list = sqlSession.selectList("com.database.db_project.budget.findmine_sell_month", entity);
			
		return list;
	}
	
	public List<Budget> findall_buy_month(Budget entity) throws Exception{
		List<Budget> list = sqlSession.selectList("com.database.db_project.budget.findall_buy_month", entity);
			
		return list;
	}
	
	public List<Budget> findall_sell_month(Budget entity) throws Exception{
		List<Budget> list = sqlSession.selectList("com.database.db_project.budget.findall_sell_month", entity);
			
		return list;
	}
	
	public List<Budget> getvolume(String u_id) throws Exception{
		List<Budget> list = sqlSession.selectList("com.database.db_project.budget.getvolume", u_id);
			
		return list;
	}
}
