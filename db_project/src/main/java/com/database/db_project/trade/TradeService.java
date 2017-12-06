package com.database.db_project.trade;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.database.db_project.CommonUtil;

@Service
public class TradeService {
	@Autowired
	private CommonUtil commonUtil;
	@Autowired
	private TradeRepository userRepository;
	/*
	public List<OrderInfo> findAll(OrderInfo entity) throws Exception {
		return userRepository.findAll(entity);
	}
	
	public List<OrderInfo> create(OrderInfo entity) throws Exception {
		entity.setU_date(commonUtil.getCurrentDtime());
		entity.setU_auth(0);
		return userRepository.create(entity);
	}
	
	// 01_01. 회원 로그인 체크
    public boolean loginCheck(OrderInfo entity, HttpSession session) {
    	boolean result = userRepository.loginCheck(entity);
    	 if (result==true) { // true일 경우 세션에 등록
         	OrderInfo entity2 = viewMember(entity);
             // 세션 변수 등록
             session.setAttribute("u_id", entity2.getU_id());
             session.setAttribute("u_name", entity2.getU_name());
         } 
        return result;
    	
    }
    // 01_02. 회원 로그인 정보
    public OrderInfo viewMember(OrderInfo entity){
    	 return  userRepository.viewMember(entity);
    }
    // 02. 회원 로그아웃
    public void logout(HttpSession session) {
    	// 세션 변수 개별 삭제
        // session.removeAttribute("userId");
        // 세션 정보를 초기화 시킴
        session.invalidate();
    }
	*/
}
