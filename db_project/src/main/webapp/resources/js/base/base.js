$(document).ready(function(){
	//로그인 중인지 확인(화면 우측상단, login, join/logout 표시 여부)
	isLogined();
	//가상화폐(비트코인, 이더리움, 리플) 시세 가져오기
	getExchangeRate();
	
		
		
});

function getExchangeRate(){
	//처음 화면 띄워질때 시세값 가져옴
	$.ajax ({
		method	: "get",
		url		: "https://api.coinone.co.kr/ticker/?format=json&currency",
		cache : false,
		success	: function (list) {
			btc_last = list.btc["last"];
			eth_last = list.eth["last"];
			xrp_last = list.xrp["last"];

			str_price="BCH "+btc_last+" | ETH "+eth_last+ " | XRP "+xrp_last;
			$("#last_price").html (str_price);
			
		},
		complete	: function () {
			
		},
		error		: function (a) {
			console.log(a);
		}
	});
	
	
	//이 후 10마다 갱신
	timer = setInterval( function () {
		$.ajax ({
			method	: "get",
			url		: "https://api.coinone.co.kr/ticker/?format=json&currency",
			cache : false,
			success	: function (list) {
				btc_last = list.btc["last"];
				eth_last = list.eth["last"];
				xrp_last = list.xrp["last"];

				str_price="BTC "+btc_last+" | ETH "+eth_last+ " | XRP "+xrp_last;
				$("#last_price").html (str_price);
				
			},
			complete	: function () {
				
			},
			error		: function (a) {
				console.log(a);
			}
		});
	}, 10000); // 10초에 한번씩 받아온다.

}
 
 function isLogined(){
	 var user_id = document.getElementById("u_id").value;
	 str_html="";
	 if(user_id=="null"){
		 str_html+="<a href=\"/user/userLogin\">Login </a> | ";
			 str_html+="<a href=\"/user/userJoin\">Join us</a>";
	 }
	 else{
		 str_html+="<h4>";
		 str_html+=user_id;
		 str_html+="님 환영합니다!</h4>";
	 }
	 $("#userlist").html (str_html);
 }