$(document).ready (function (){
	getUsrBudget();
	
	
});

str_myWon=0;
str_myBTC=0;
str_myETH=0;
str_myXRP=0;

function getUsrBudget(){
	var user_id = document.getElementById("u_id").value;
	if(user_id=="null"){
		$("#myWonBalance").html (str_myWon);
		$("#dashCoin").html ("BTC");
		$("#myCoinBalance").html (str_myBTC);
	}
	else{
		//get searched list
		$.ajax ({
			method	: "post",
			url		: "/budget/GetUserBudget.json",
			data : {"u_id" : user_id},
			success	: function (list) {
				//list
				for(i=0;i<4;i++){
					if(list[i].c_idx==0){
						str_myWon=list[i].b_quantity;
					}
					else if(list[i].cidx==1){
						str_myBTC=list[i].b_quantity;
					}
					else if(list[i].cidx==2){
						str_myETH=list[i].b_quantity;
					}
					else{// if(list[i].cidx==3){}
						str_myXRP=list[i].b_quantity;
					}
				}
					
				$("#myWonBalance").html (str_myWon);
				$("#dashCoin").html ("BTC");
				$("#myCoinBalance").html (str_myBTC);
			},
			complete	: function () {
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
