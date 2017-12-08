package com.database.db_project.history;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.database.db_project.board_free.Board_free;

@Repository
public class HistoryRepository {
	@Autowired
	private SqlSession sqlSession;

	//전체 거래리스트 select
	public List<History> findAll(History entity) throws Exception{
		List<History> list = sqlSession.selectList("com.database.db_project.history.findAll", entity);
		
		return list;
	}

	//검색한 게시판리스트 title로 select
	public List<History> findCoin(Integer c_idx) throws Exception{
		List<History> list = sqlSession.selectList("com.database.db_project.history.findCoin", c_idx);
			
		return list;
	}
	
	public List<History> findmine(String u_id) throws Exception{
		List<History> list = sqlSession.selectList("com.database.db_project.history.findmine", u_id);
			
		return list;
	}

}
