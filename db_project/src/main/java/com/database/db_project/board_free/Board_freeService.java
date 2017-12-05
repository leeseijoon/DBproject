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
	
	public List<Board_free> create(Board_free entity) throws Exception {
		entity.setB_date(commonUtil.getCurrentDtime());
		entity.setB_hit(1);
		return board_freeRepository.create(entity);
	}
	

}
