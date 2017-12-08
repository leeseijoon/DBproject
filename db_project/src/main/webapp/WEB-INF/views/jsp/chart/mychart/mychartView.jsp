<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
 
<jsp:forward page="../../base/home_base_template.jsp"> 
	<jsp:param name="CONTENT" value="../chart/mychart/mychart.jsp" /> 
    <jsp:param name="CSS" value="../chart/mychart/cssList.jsp" />
    <jsp:param name="SCRIPT" value="../chart/mychart/scriptList.jsp" />
</jsp:forward>