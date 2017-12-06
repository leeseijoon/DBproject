package com.database.db_project.userInfo;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller

public class UserInfoController {
	@Autowired
	private UserInfoService userService;
	
	
	
	
	
	@RequestMapping("/user/GetUserlist")
	public String userlist() {
		return "user/userlist/userlistView";
	}
	
	@RequestMapping("/user/myInfo")
	public String myInfo() {
		return "user/myInfo/myInfoView";
	}
	
	//로그인 페이지
	@RequestMapping("/user/userLogin")
	public String userLogin() {
		return "user/userLogin/userLoginView";
	}
	
	//회원가입 페이지
	@RequestMapping("/user/userJoin")
	public String userJoin() {
		return "user/userJoin/userJoinView";
	}
	
	//회원가입
	@RequestMapping(value = "/user/userJoin/send", method = RequestMethod.POST)
	public String createUsrInfo (HttpServletRequest request, @ModelAttribute("model_entity") 
		@Validated UserInfo entity, BindingResult errors) throws Exception {
		userService.create(entity);
		return "/home/homeView";
	}
	
	//유저리스트 정보 가져오기
	@RequestMapping(value = "/user/GetUserlist.json", method = RequestMethod.POST)
	@ResponseBody
	public List<UserInfo> GetUserList (@ModelAttribute UserInfo entity) throws Exception{
		List<UserInfo> list= userService.findAll(entity);
		
		return list;
	}
	
	//로그인
	@RequestMapping(value="/user/login.do")
	public String userLogin(ModelMap model) {
		return "/user/userLogin/userLoginView";
	}
	
	@RequestMapping("/user/loginCheck.do")
    public ModelAndView loginCheck(@ModelAttribute UserInfo entity, HttpSession session){
        boolean result = userService.loginCheck(entity, session);
        ModelAndView mav = new ModelAndView();
        if (result == true) { // 로그인 성공
            // main.jsp로 이동
            mav.setViewName("/home/homeView");
            mav.addObject("msg", "success");
        } else {    // 로그인 실패
            // login.jsp로 이동
            mav.setViewName("/user/userLogin/userLoginView");
            mav.addObject("msg", "failure");
        }
        return mav;
    }
	
	
	//로그아웃
	@RequestMapping(value="/user/logout.do")
	public ModelAndView logout(HttpSession session){
		userService.logout(session);
        ModelAndView mav = new ModelAndView();
        mav.setViewName("/user/userLogin/userLoginView");
        mav.addObject("msg", "logout");
        return mav;
    }

}
