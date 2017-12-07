<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
    String content = request.getParameter("CONTENT");
	String css = request.getParameter("CSS");
	String script = request.getParameter("SCRIPT");
%>
<html lang="ko">
	<head>
		<jsp:include page="../base/head.jsp" flush="false" />
		<jsp:include page="<%= css %>" flush="false" />
		<jsp:include page="sidebar.css" flush="false"/>
	</head>
	<body>
		<jsp:include page="../base/home_header.jsp" flush="false" />
		<jsp:include page="../base/menu.jsp" flush="false" />
<div class="container">
<nav class="navbar navbar-default sidebar col-md-2" role="navigation" >
    <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>      
    </div>
    <div class="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li ><a href="/trade/BTC">BTC<br>Bit Coin<span style="font-size:16px;" class="pull-right hidden-xs showopacity"></span></a></li>       
        <li ><a href="/trade/ETH">ETH<br>Ethereum<span style="font-size:16px;" class="pull-right hidden-xs showopacity "></span></a></li>        
        <li ><a href="/trade/XRP">XRP<br>Ripple Coin</a><span style="font-size:16px;" class="pull-right hidden-xs showopacity"></span></a></li>
      </ul>
    </div>
  </div>
</nav>
		<div class="main col-xs-12 col-md-10 clearfix">
		<jsp:include page="<%= content %>" flush="false" />
		</div>
</div>
		<jsp:include page="../base/footer.jsp" flush="false"/>
	</body>
	<jsp:include page="../base/script.jsp" flush="false" />
	<jsp:include page="<%= script %>" flush="false" />
</html>