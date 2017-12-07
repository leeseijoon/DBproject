$(document).ready (function (){
	getUsrBudget();

});

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
				$("#myWonBalance").html (str_myWon);
				$("#dashCoin").html ("BTC");
				$("#myCoinBalance").html (str_myBTC);
				$("#b_BTC").click(function(){
					$("#dashCoin").html ("BTC");
					$("#myCoinBalance").html (str_myBTC);
			    });
				$("#b_ETH").click(function(){
					$("#dashCoin").html ("ETH");
					$("#myCoinBalance").html (str_myETH);
			    });
				$("#b_XRP").click(function(){
					$("#dashCoin").html ("XRP");
					$("#myCoinBalance").html (str_myXRP);
			    });

			},
			error		: function (a) {
				console.log(a);
			}
		});
	}
}
