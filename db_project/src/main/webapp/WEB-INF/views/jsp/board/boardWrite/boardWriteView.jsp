<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
 
<jsp:forward page="../../base/home_base_template.jsp"> 
	<jsp:param name="CONTENT" value="../board/boardWrite/boardWrite.jsp" /> 
    <jsp:param name="CSS" value="../board/boardWrite/cssList.jsp" />
    <jsp:param name="SCRIPT" value="../board/boardWrite/scriptList.jsp" />
</jsp:forward>