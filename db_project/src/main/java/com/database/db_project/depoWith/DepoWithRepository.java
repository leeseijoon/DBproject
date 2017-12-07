package com.database.db_project.depoWith;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.database.db_project.board_free.Board_free;

@Repository
public class DepoWithRepository {
	@Autowired
	private SqlSession sqlSession;

	
	public List<DepoWith> Depo(DepoWith entity) throws Exception{
		return sqlSession.selectList("com.database.db_project.depowith.Depo", entity);
		
	}
	
	public List<DepoWith> With(DepoWith entity) throws Exception{
		return sqlSession.selectList("com.database.db_project.depowith.With", entity);
		
	}
}
