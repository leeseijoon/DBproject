<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
 
<jsp:forward page="../../base/home_base_template.jsp"> 
	<jsp:param name="CONTENT" value="../../../user/userlist/userlist.jsp" /> 
    <jsp:param name="CSS" value="../../../user/userlist/cssList.jsp" />
    <jsp:param name="SCRIPT" value="../../../user/userlist/scriptList.jsp" />
</jsp:forward>