<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
 
<jsp:forward page="../../base/home_base_template.jsp"> 
	<jsp:param name="CONTENT" value="../board/boardRead/boardRead.jsp" /> 
    <jsp:param name="CSS" value="../board/boardRead/cssList.jsp" />
    <jsp:param name="SCRIPT" value="../board/boardRead/scriptList.jsp" />
</jsp:forward>