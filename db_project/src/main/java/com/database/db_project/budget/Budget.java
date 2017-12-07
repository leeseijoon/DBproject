package com.database.db_project.budget;

import java.io.Serializable;

import org.springframework.stereotype.Repository;

@Repository("budget")
public class Budget implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String u_id;
	private Integer c_idx;
	private double b_quantity;
	public String getU_id() {
		return u_id;
	}
	public void setU_id(String u_id) {
		this.u_id = u_id;
	}
	public Integer getC_idx() {
		return c_idx;
	}
	public void setC_idx(Integer c_idx) {
		this.c_idx = c_idx;
	}
	public double getB_quantity() {
		return b_quantity;
	}
	public void setB_quantity(double b_quantity) {
		this.b_quantity = b_quantity;
	}
	
	
	

}
