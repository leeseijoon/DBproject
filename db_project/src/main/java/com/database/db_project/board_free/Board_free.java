package com.database.db_project.board_free;

import java.io.Serializable;

import org.springframework.stereotype.Repository;

@Repository("board_free")
public class Board_free implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Integer b_no;
	private String b_title;
	private String b_content;
	private String b_date;
	private Integer b_hit;
	private String u_id;
	
	
	
	public Integer getB_no() {
		return b_no;
	}
	public void setB_no(Integer b_no) {
		this.b_no = b_no;
	}
	public String getB_title() {
		return b_title;
	}
	public void setB_title(String b_title) {
		this.b_title = b_title;
	}
	public String getB_content() {
		return b_content;
	}
	public void setB_content(String b_content) {
		this.b_content = b_content;
	}
	public String getB_date() {
		return b_date;
	}
	public void setB_date(String b_date) {
		this.b_date = b_date;
	}
	public Integer getB_hit() {
		return b_hit;
	}
	public void setB_hit(Integer b_hit) {
		this.b_hit = b_hit;
	}
	public String getU_id() {
		return u_id;
	}
	public void setU_id(String u_id) {
		this.u_id = u_id;
	}

}
