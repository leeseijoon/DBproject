<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html> 
<head>
<title>JSP forward example with parameters</title>
</head>
<body> 
<jsp:forward page="base/home_base_template.jsp"> 
	<jsp:param name="name" value="차이차이1" /> 
	<jsp:param name="site" value="BeginnersBook.com" /> 
	<jsp:param name="tutorialname" value="jsp forward action" /> 
	<jsp:param name="CONTENT" value="../chart/chart.jsp" /> 
    <jsp:param name="CSS" value="" />
    <jsp:param name="SCRIPT" value="" />
</body> 
</html>