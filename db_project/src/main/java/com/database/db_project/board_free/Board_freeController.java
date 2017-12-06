package com.database.db_project.board_free;

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

import com.database.db_project.userInfo.UserInfo;

@Controller
public class Board_freeController {
	@Autowired
	private Board_freeService board_freeService;

	//게시판 목록 화면
	@RequestMapping("/board/boardList")
	public String boardList() {
		return "board/boardList/boardListView";
	}
	
	//게시판 쓰기 화면
	@RequestMapping("/board/boardWrite")
	public String boardWrite() {
		return "board/boardWrite/boardWriteView";
	}
	
	//게시판 글 보기 화면
	@RequestMapping("/board/boardRead")
	public String boardRead() {
		return "board/boardRead/boardReadView";
	}
	
	//게시판 검색 화면
	@RequestMapping("/board/boardSearch")
	public String boardSearch() {
		return "board/boardSearch/boardSearchView";
	}
	//게시판 검색 화면
	@RequestMapping("/board/boardEdit")
	public String boardEdit() {
		return "board/boardSearch/boardSearchView";
	}
	
		
	//게시판리스트 정보 가져오기
	@RequestMapping(value = "/board/GetBoardList.json", method = RequestMethod.POST)
	@ResponseBody
	public List<Board_free> GetBoardList (@ModelAttribute Board_free entity) throws Exception{
		List<Board_free> list= board_freeService.findAll(entity);
		
		return list;
	}
	
	//특정 게시판 정보 가져오기 & 조회수 1 추가
	@RequestMapping(value = "/board/GetBoardInfo.json", method = RequestMethod.POST)
	@ResponseBody
	public Board_free GetBoardInfo (@ModelAttribute Board_free entity) throws Exception{
		//조회수 1추가
		board_freeService.updateHit(entity);
		//특정게시판 정보 가져오기
		Board_free list = board_freeService.findOne(entity);
		
		return list;
	}
	
	//게시판 쓰기
	@RequestMapping(value = "/board/boardWrite/send", method = RequestMethod.POST)
	public String createBoard (HttpServletRequest request, @ModelAttribute("model_entity") 
		@Validated Board_free entity, BindingResult errors) throws Exception {
		board_freeService.create(entity);
		return "redirect:/board/boardList";
	}
	
	
	//검색한 게시판리스트 정보 가져오기
	@RequestMapping(value = "/board/GetSearchBoardList.json", method = RequestMethod.POST)
	@ResponseBody
	public List<Board_free> GetSearchBoardList (@ModelAttribute Board_free entity) throws Exception{
		List<Board_free> list= board_freeService.searchBoardList(entity);
		
		return list;
	}
	
	


}
