package com.database.db_project.userInfo;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserInfoRepository {
	@Autowired
	private SqlSession sqlSession;
	//전체 유저리스트 select
	public List<UserInfo> findAll(UserInfo entity) throws Exception{
		List<UserInfo> list = sqlSession.selectList("com.database.db_project.user.findAll", entity);
		
		return list;
	}
	//유저 추가(회원가입)
	public List<UserInfo> create(UserInfo entity) throws Exception{
		List<UserInfo> list = sqlSession.selectList("com.database.db_project.user.create", entity);
		
		return list;
	}

	// 01_01. 회원 로그인체크
    public boolean loginCheck(UserInfo entity) {
        String name = sqlSession.selectOne("com.database.db_project.user.loginCheck", entity);
        if(name==null)
        	return false;
        else
        	return true;
    
    }
    // 01_02. 회원 로그인 정보
    public UserInfo viewMember(UserInfo entity) {
        return sqlSession.selectOne("com.database.db_project.user.viewMember", entity);
    }
    // 02. 회원 로그아웃
    public void logout(HttpSession sessin) {
    }
}
