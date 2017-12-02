package com.database.db_project.user;

import java.io.Serializable;

import org.springframework.stereotype.Repository;

@Repository("user")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String u_id;
	private String u_password;
	private String u_name;
	private String u_auth;
	private String u_phonenum;
	
	public String getU_id() {
		return u_id;
	}
	public void setU_id(String u_id) {
		this.u_id = u_id;
	}
	public String getU_password() {
		return u_password;
	}
	public void setU_password(String u_password) {
		this.u_password = u_password;
	}
	public String getU_name() {
		return u_name;
	}
	public void setU_name(String u_name) {
		this.u_name = u_name;
	}
	public String getU_auth() {
		return u_auth;
	}
	public void setU_auth(String u_auth) {
		this.u_auth = u_auth;
	}
	public String getU_phonenum() {
		return u_phonenum;
	}
	public void setU_phonenum(String u_phonenum) {
		this.u_phonenum = u_phonenum;
	}
	public String getU_date() {
		return u_date;
	}
	public void setU_date(String u_date) {
		this.u_date = u_date;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	private String u_date;
}
