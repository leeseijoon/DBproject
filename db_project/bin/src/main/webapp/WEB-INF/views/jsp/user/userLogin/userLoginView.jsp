<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
 
<jsp:forward page="../../base/home_base_template.jsp"> 
	<jsp:param name="CONTENT" value="../user/userLogin/userLogin.jsp" /> 
    <jsp:param name="CSS" value="../user/userLogin/cssList.jsp" />
    <jsp:param name="SCRIPT" value="../user/userLogin/scriptList.jsp" />
</jsp:forward>