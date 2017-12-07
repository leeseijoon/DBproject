package com.database.db_project.depoWith;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.database.db_project.CommonUtil;
import com.database.db_project.board_free.Board_free;
import com.database.db_project.board_free.Board_freeRepository;

@Service
public class DepoWithService {
	@Autowired
	private CommonUtil commonUtil;
	@Autowired
	private DepoWithRepository depowithRepository;

	
	public List<DepoWith> Depo(DepoWith entity) throws Exception {
		return depowithRepository.Depo(entity);
	}
	
	public List<DepoWith> With(DepoWith entity) throws Exception {
		return depowithRepository.With(entity);
	}
}
