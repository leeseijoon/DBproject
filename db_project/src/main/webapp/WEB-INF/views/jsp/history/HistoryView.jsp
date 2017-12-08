<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
 
<jsp:forward page="../base/home_base_template.jsp"> 
	<jsp:param name="CONTENT" value="../history/History.jsp" /> 
    <jsp:param name="CSS" value="../history/cssList.jsp" />
    <jsp:param name="SCRIPT" value="../history/scriptList.jsp" />
</jsp:forward>