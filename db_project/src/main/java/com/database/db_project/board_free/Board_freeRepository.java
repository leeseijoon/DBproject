package com.database.db_project.board_free;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class Board_freeRepository {
	@Autowired
	private SqlSession sqlSession;
	//전체 게시판리스트 select
	public List<Board_free> findAll(Board_free entity) throws Exception{
		List<Board_free> list = sqlSession.selectList("com.database.db_project.board_free.findAll", entity);
		
		return list;
	}
	//게시글 추가(글 작성)
	public List<Board_free> create(Board_free entity) throws Exception{
		List<Board_free> list = sqlSession.selectList("com.database.db_project.board_free.create", entity);
		
		return list;
	}
	
	//하나의 게시글 select
	public Board_free findOne(Board_free entity) throws Exception{
		return sqlSession.selectOne("com.database.db_project.board_free.findOne", entity);
		
	}
	
	//검색한 게시판리스트 select
	public List<Board_free>	searchBoardList(Board_free entity) throws Exception{
		List<Board_free> list = sqlSession.selectList("com.database.db_project.board_free.searchBoardList", entity);
			
		return list;
	}
	
	
	
	//하나의 게시글의 조회수(hit) 값을 +1 올려줌
	public void	updateHit(Board_free entity) throws Exception{
		sqlSession.update("com.database.db_project.board_free.updateHit", entity);
	}
}
