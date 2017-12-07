package com.database.db_project.trade;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TradeRepository {
	@Autowired
	private SqlSession sqlSession;


	
	//거래 추가
	public List<Trade> create(Trade entity) throws Exception{
		List<Trade> list = sqlSession.selectList("com.database.db_project.trade.create", entity);
		
		return list;
	}


}
