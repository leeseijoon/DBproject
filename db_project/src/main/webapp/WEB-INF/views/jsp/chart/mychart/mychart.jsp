 <%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
 <div class="row">
<ul class="nav col-sm-2 sidenav">
    <li class="active"><a href="/chart/chartPrice"">코인 가격</a></li>
    <li class="active"><a href="/chart/mychart"">나의 투자 차트</a></li>
    <li class="active"><a href="/chart/chartInsite"">사이트 내 코인 거래현황</a></li>
	
</ul>

<div  class="col-sm-8">
	<div>
		<h2>BTC</h2>
		<div><h3>한달간 구매 이력</h3></div>
		<div id="chart_div_BTC_buy"></div>
		<div><h3>한달간 판매 이력</h3></div>
		<div id="chart_div_BTC_sell"></div>
	</div>
	<div>
		<h2>ETH</h2>
		<div><h3>한달간 구매 이력</h3></div>
		<div id="chart_div_ETH_buy"></div>
		<div><h3>한달간 판매 이력</h3></div>
		<div id="chart_div_ETH_sell"></div>
	</div>
	<div>
		<h2>XRP</h2>
		<div><h3>한달간 구매 이력</h3></div>
		<div id="chart_div_XRP_buy"></div>
		<div><h3>한달간 판매 이력</h3></div>
		<div id="chart_div_XRP_sell"></div>
	</div>
	
</div>
</div>