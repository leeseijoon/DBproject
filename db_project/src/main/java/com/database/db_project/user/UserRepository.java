package com.database.db_project.user;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {
	@Autowired
	private SqlSession sqlSession;
	
	public List<User> findAll(User entity) throws Exception{
		List<User> list = sqlSession.selectList("com.database.db_project.user.findAll", entity);
		
		return list;
	}


}
