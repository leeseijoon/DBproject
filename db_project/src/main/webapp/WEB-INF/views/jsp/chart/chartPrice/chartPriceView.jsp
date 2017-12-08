<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
 
<jsp:forward page="../../base/home_base_template.jsp"> 
	<jsp:param name="CONTENT" value="../chart/chartPrice/chartPrice.jsp" /> 
    <jsp:param name="CSS" value="../chart/chartPrice/cssList.jsp" />
    <jsp:param name="SCRIPT" value="../chart/chartPrice/scriptList.jsp" />
</jsp:forward>