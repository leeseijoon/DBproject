$(document).ready (function (){
	
	$.getJSON("https://api.coinone.co.kr/ticker/?format=json&currency", function(data) {
	    //data is the JSON string
		
		$("#coin_high").text(setComma(Math.floor(data.eth.high)));
		$("#coin_low").text(setComma(Math.floor(data.eth.low)));
		$("#coin_last").text(setComma(Math.floor(data.eth.last)));
	});
	
	getUsrBudget();
	

	$("#btnbuy").click(function(){
	    // 태크.val() : 태그에 입력된 값
	    // 태크.val("값") : 태그의 값을 변경 

	    if( str_myWon < $("#TotalKW1").val()){ // 내가 현재 갖고있는돈이 필요한 토탈 원보다 적음
	        alert("out of range (KRW)");	// 구매가능한 KRW 양을 소지하고있지 않음 알라트
	        return; // 함수 종료
	    }

	    var f=document.buysell;
	    f.action="/trade/ETH/buy"
	    // 제출
	    f.submit();
	});


	$("#btnsell").click(function(){
	    // 태크.val() : 태그에 입력된 값
	    // 태크.val("값") : 태그의 값을 변경 
	    if( str_myBTC < $("#AmountBTC1").val()){ // 내가 현재 갖고있는돈이 필요한  BTC보다 적음
	        alert("out of range (ETH)");	// 구매가능한 BTC 양을 소지하고있지 않음 알라트
	        return; // 함수 종료
	    }

	    var f=document.buysell;
	    f.action="/trade/ETH/sell"
	    // 조건에 충족되면 제출
	    f.submit();
	});
});


document.getElementById("AmountBTC1").onchange = function() {caltotal1()};
document.getElementById("AmountKW1").onchange = function() {caltotal1()};

function caltotal1() {
	
	document.getElementById("TotalKW1").value = document.getElementById("AmountBTC1").value * document.getElementById("AmountKW1").value;
}






str_myWon=0;
str_myBTC=0;
str_myETH=0;
str_myXRP=0;

function getUsrBudget(){
	var u_id = document.getElementById("u_id").value;
	if(u_id=="null"){
		$("#myWonBalance").html (str_myWon);
		$("#dashCoin").html ("BTC");
		$("#myCoinBalance").html (str_myBTC);
	}
	else{
		//get searched list
		$.ajax ({
			method	: "post",
			url		: "/budget/GetUserBudget.json",
			data : {"u_id" : u_id},
			success	: function (list) {
				alert(JSON.stringify(list));
				//list
				for(i=0;i<4;i++){
					coin_idx=list[i].c_idx
					if(coin_idx==0){//원화
						str_myWon=list[i].b_quantity;
					}
					else if(coin_idx==1){//BTC
						str_myBTC=list[i].b_quantity;
					}
					else if(coin_idx==2){//ETH
						str_myETH=list[i].b_quantity;
					}
					else{// XRP
						str_myXRP=list[i].b_quantity;
					}
				}
					
				
			},
			complete	: function () {
				$("#myeth").text(str_myETH);
				$("#mykrw").text(str_myWon);

			},
			error		: function (a) {
				console.log(a);
			}
		});
	}
}


function setComma(num){
	   var len, point, str; 
	    
	    num = num + ""; 
	    point = num.length % 3 ;
	    len = num.length; 
	   
	    str = num.substring(0, point); 
	    while (point < len) { 
	        if (str != "") str += ","; 
	        str += num.substring(point, point + 3); 
	        point += 3; 
	    } 
	     
	    return str;
	}