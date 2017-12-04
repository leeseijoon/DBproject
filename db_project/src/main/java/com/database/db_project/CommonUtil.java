package com.database.db_project;

import java.util.Calendar;
import java.util.regex.Pattern;



import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;


/**
 * 자주 사용하는 유틸을 정의하는 클래스
 * 예: 날짜, 시간 등
 * @author todiest
 *
 */
@Component
public class CommonUtil {
	
	protected static final Logger logger = Logger.getLogger(CommonUtil.class);
	
	/**
	 * 현재의 년월일시분초를 구하는 메소드
	 * @return 14자리 숫자로만 이루어진 문자열
	 */
	public String getCurrentDtime() {
		Calendar cal = Calendar.getInstance();
        int year = cal.get(Calendar.YEAR);
        int month = cal.get(Calendar.MONTH) + 1;
        int day = cal.get(Calendar.DAY_OF_MONTH);
        int hour = cal.get(Calendar.HOUR_OF_DAY);
        int min = cal.get(Calendar.MINUTE);
        int sec = cal.get(Calendar.SECOND);
        
        String y = Integer.toString(year);
        String m = Integer.toString(month);
        String d = Integer.toString(day);
        String h = Integer.toString(hour);
        String mi = Integer.toString(min);
        String s = Integer.toString(sec);
        
        if (month < 10) m = "0" + m;
        if (day < 10) d = "0" + d;
        if (hour < 10) h = "0" + h;
        if (min < 10) mi = "0" + mi;
        if (sec < 10) s = "0" + s;

        String today = y + m + d + h + mi + s;

        return today;
	}
	public String getDividedTime(String time) {
		String y = time.substring(0, 4);
        String m = time.substring(4, 6);
        String d = time.substring(6, 8);
        String h = time.substring(8, 10);
        String mi = time.substring(10, 12);
        String s = time.substring(12, 14);
		
		
		return y + "-" + m + "-" + d + " " + h + ":" + mi + ":" + s;
		
	}
	
	/**
	 * 현재 년월일을 기준으로 년월일을 원하는 값 만큼 변경하는 메소드
	 * @param
	 * 		ymd 년월일 중 택 1 (1:년, 2:월, 3:일) 
	 * 		amount 증감할 만큼의 수(예: 1, -1)
	 * @return amount가 반영된 날짜
	 * 
	 * 2016-07-21에 만든 함수. 예외처리가 안되어 있음.
	 */
	public String getOtherDtime(int ymd, int amount){
		Calendar cal = Calendar.getInstance();
		switch (ymd) {
		case 1:
			cal.add(Calendar.YEAR, amount);
			break;
		case 2:
			cal.add(Calendar.MONTH, amount);
			break;
			
		case 3:
			cal.add(Calendar.DATE, amount);
			break;

		default:
			break;
		}
		int year = cal.get(Calendar.YEAR);
        int month = cal.get(Calendar.MONTH) + 1;
        int day = cal.get(Calendar.DAY_OF_MONTH);
        int hour = cal.get(Calendar.HOUR_OF_DAY);
        int min = cal.get(Calendar.MINUTE);
        int sec = cal.get(Calendar.SECOND);
        
        String y = Integer.toString(year);
        String m = Integer.toString(month);
        String d = Integer.toString(day);
        String h = Integer.toString(hour);
        String mi = Integer.toString(min);
        String s = Integer.toString(sec);
        
        if (month < 10) m = "0" + m;
        if (day < 10) d = "0" + d;
        if (hour < 10) h = "0" + h;
        if (min < 10) mi = "0" + mi;
        if (sec < 10) s = "0" + s;
        
		String otherday = y + m + d + h + mi + s;
		return otherday;
	}
	
	/**
	 * 현재의 년월일을 구하는 메소드
	 * @param delim	구분자(예:"-", "/", "")
	 * @return 구분자를 포함한 오늘의 날짜(20160102, 2016-01-02)
	 */
	public String getToday(String delim) {
		Calendar cal = Calendar.getInstance( );
        int year = cal.get(Calendar.YEAR);
        int month = cal.get(Calendar.MONTH) + 1;
        int day = cal.get(Calendar.DAY_OF_MONTH);
        
        String y = Integer.toString(year);
        String m = Integer.toString(month);
        String d = Integer.toString(day);
        if (month < 10) {
              m = "0" + m;
        }
        if (day < 10) {
              d = "0" + d;
        }
        
        String today = y + delim + m + delim + d;
        
        return today;
	}
	
	
	/**
	 * 문자열이 정수인지 판별
	 * @param str
	 * @return
	 */
	public Boolean isNumber (String str) {
		try {
			Integer.parseInt(str);
			return true;
		}
		catch (NumberFormatException e) {
			return false;
		}
	}
	
	/**
	 * 문자열이 실수인지 판별
	 * @param str
	 * @return
	 */
	public Boolean isDouble (String str) {
		try {
			Double.parseDouble(str);
			return true;
		}
		catch (NumberFormatException e) {
			return false;
		}
	}
	
	/**
	 * 정규식 확인
	 * @param str	검증할 문자열
	 * @param type	검증 타입(예: num, tel, mobile, email, etc...)
	 * @return
	 */
	public Boolean checkPattern (String str, String type) {
		if (str == null) {
			return false;
		}
		str = str.trim();
		String regex = null;
		if (type.equals("num")) {
			regex = "^[0-9]*$";
		}
		else if (type.equals("tel")){
			regex = "^\\d{2,3}-\\d{3,4}-\\d{4}$";
		}
		else if (type.equals("mobile")){
			regex = "^01(?:0|1[6-9])-(?:\\d{3}|\\d{4})-\\d{4}$";
		}
		else if (type.equals("email")){
			regex = "^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$";
		}
		else {
			return false;
		}
		
		Boolean bool = Pattern.matches(regex, str);
		return bool;
	}
	
	/**
	 * HttpServletRequest 객체를 구하는 메소드
	 * @return HttpServletRequest객체
	 */
	public HttpServletRequest getCurrentRequest() {      
		ServletRequestAttributes sra = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
		HttpServletRequest hsr = sra.getRequest();    
		return hsr;  
	}
}
