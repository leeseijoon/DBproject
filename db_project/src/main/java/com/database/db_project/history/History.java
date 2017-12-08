package com.database.db_project.history;

import java.io.Serializable;

import org.springframework.stereotype.Repository;

@Repository("history")
public class History implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Integer e_idx;
	private String u_id;
	private Integer c_idx;
	private Integer sell_buy;
	private Integer e_price;
	private double e_quantity;
	private String e_date;
	
	public Integer getE_idx() {
		return e_idx;
	}
	public void setE_idx(Integer e_idx) {
		this.e_idx = e_idx;
	}
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
	public Integer getSell_buy() {
		return sell_buy;
	}
	public void setSell_buy(Integer sell_buy) {
		this.sell_buy = sell_buy;
	}
	public Integer getE_price() {
		return e_price;
	}
	public void setE_price(Integer e_price) {
		this.e_price = e_price;
	}
	public double getE_quantity() {
		return e_quantity;
	}
	public void setE_quantity(double e_quantity) {
		this.e_quantity = e_quantity;
	}
	public String getE_date() {
		return e_date;
	}
	public void setE_date(String e_date) {
		this.e_date = e_date;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}
