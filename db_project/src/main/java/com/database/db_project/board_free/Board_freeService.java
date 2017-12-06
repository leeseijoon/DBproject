package com.database.db_project.board_free;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.database.db_project.CommonUtil;

@Service
public class Board_freeService {
	@Autowired
	private CommonUtil commonUtil;
	@Autowired
	private Board_freeRepository board_freeRepository;
	
	public List<Board_free> findAll(Board_free entity) throws Exception {
		return board_freeRepository.findAll(entity);
	}
	
	public Board_free findOne(Board_free entity) throws Exception {
		return board_freeRepository.findOne(entity);
	}
	
	public Board_free GetBoardU_id(Board_free entity) throws Exception {
		return board_freeRepository.GetBoardU_id(entity);
	}
	
	public List<Board_free> create(Board_free entity) throws Exception {
		entity.setB_date(commonUtil.getCurrentDtime());
		entity.setB_hit(1);
		return board_freeRepository.create(entity);
	}
	
	public List<Board_free> searchBoardListByTitle(String searchKeyword) throws Exception {
		return board_freeRepository.searchBoardListByTitle(searchKeyword);
	}
	
	public List<Board_free> searchBoardListByTitleContent(String searchKeyword) throws Exception {
		return board_freeRepository.searchBoardListByTitleContent(searchKeyword);
	}
	
	public List<Board_free> searchBoardListByContent(String searchKeyword) throws Exception {
		return board_freeRepository.searchBoardListByContent(searchKeyword);
	}
	
	public List<Board_free> searchBoardListById(String searchKeyword) throws Exception {
		return board_freeRepository.searchBoardListById(searchKeyword);
	}
	
	
	
	public void updateHit(Board_free entity) throws Exception {
		board_freeRepository.updateHit(entity);
	}
	
	public void updateBoard(Board_free entity) throws Exception {
		board_freeRepository.updateBoard(entity);
	}
}
