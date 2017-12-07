package com.database.db_project.budget;

import java.io.Serializable;

import org.springframework.stereotype.Repository;

@Repository("budget")
public class Budget implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String u_id;
	private Integer c_idx;
	private double b_quantity;
	
	

}
