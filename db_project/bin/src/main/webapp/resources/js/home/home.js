$(document).ready (function (){
	
	getUsrBudget();
	getCoinInfo();
	document.getElementById("c1").style.color = "white";
	button_func();
	windowWidth=window.innerWidth;
	if(windowWidth>594){
    	$("#detailInfo_small").hide();
    	$("#detailInfo").show();
    }
    else{
    	$("#detailInfo_small").show();
    	$("#detailInfo").hide();
    }
	//차트
	google.charts.load('current', {packages: ['corechart', 'line']});
  	google.charts.setOnLoadCallback(inputChartData);
  	//search
  	
    (function() {
      var cx = '010031297991204060671:0vfpoixdtys';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();


});

$(window).resize(function(){
    windowWidth=window.innerWidth
    if(windowWidth>594){
    	$("#detailInfo_small").hide();
    	$("#detailInfo").show();
    }
    else{
    	$("#detailInfo_small").show();
    	$("#detailInfo").hide();
    }
});

windowWidth=window.innerWidth;
str_myWon=0;
str_myBTC=0;
str_myETH=0;
str_myXRP=0;
b_state=1;

btc_last = 0;
eth_last = 0;
xrp_last = 0;
btc_yest = 0;
eth_yest = 0;
xrp_yest = 0;
btc_vol = 0;
btc_first = 0;
btc_high = 0;
btc_low = 0;
btc_yhigh = 0;
btc_ylow = 0;

//chart data
var year_info=[];
var month_info=[];
var date_info=[];
BTC_close=[];
ETH_close=[];
XRP_close=[];



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




function getCoinInfo(){
	//처음 화면 띄워질때 시세값 가져옴
	$.ajax ({
		method	: "get",
		url		: "https://api.coinone.co.kr/ticker/?format=json&currency",
		cache : false,
		success	: function (list) {
			btc_last = setComma(list.btc["last"]);
			eth_last = setComma(list.eth["last"]);
			xrp_last = setComma(list.xrp["last"]);
			btc_yest = setComma(list.btc["yesterday_last"]);
			eth_yest = setComma(list.eth["yesterday_last"]);
			xrp_yest = setComma(list.xrp["yesterday_last"]);
			
			btc_vol = setComma(list.btc["volume"]);
			btc_first = setComma(list.btc["first"]);
			btc_high = setComma(list.btc["high"]);
			btc_low = setComma(list.btc["low"]);
			btc_yhigh = setComma(list.btc["yesterday_high"]);
			btc_ylow = setComma(list.btc["yesterday_low"]);
			
			eth_vol = setComma(list.eth["volume"]);
			eth_first = setComma(list.eth["first"]);
			eth_high = setComma(list.eth["high"]);
			eth_low = setComma(list.eth["low"]);
			eth_yhigh = setComma(list.eth["yesterday_high"]);
			eth_ylow = setComma(list.eth["yesterday_low"]);
			
			xrp_vol = setComma(list.xrp["volume"]);
			xrp_first = setComma(list.xrp["first"]);
			xrp_high = setComma(list.xrp["high"]);
			xrp_low = setComma(list.xrp["low"]);
			xrp_yhigh = setComma(list.xrp["yesterday_high"]);
			xrp_ylow = setComma(list.xrp["yesterday_low"]);
			
		},
		complete	: function () {
			$("#tlast_price").html (btc_last);
			$("#yesterday_price").html (btc_yest);
			
			$(".c_first").html (btc_vol);
			$(".c_vol").html (btc_first);
			$(".c_high").html (btc_high);
			$(".c_low").html (btc_low);
			$(".c_yhigh").html (btc_yhigh);
			$(".c_ylow").html (btc_ylow);
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
				btc_last = setComma(list.btc["last"]);
				eth_last = setComma(list.eth["last"]);
				xrp_last = setComma(list.xrp["last"]);
				btc_yest = setComma(list.btc["yesterday_last"]);
				eth_yest = setComma(list.eth["yesterday_last"]);
				xrp_yest = setComma(list.xrp["yesterday_last"]);
				
				btc_vol = setComma(list.btc["volume"]);
				btc_first = setComma(list.btc["first"]);
				btc_high = setComma(list.btc["high"]);
				btc_low = setComma(list.btc["low"]);
				btc_yhigh = setComma(list.btc["yesterday_high"]);
				btc_ylow = setComma(list.btc["yesterday_low"]);
				
				eth_vol = setComma(list.eth["volume"]);
				eth_first = setComma(list.eth["first"]);
				eth_high = setComma(list.eth["high"]);
				eth_low = setComma(list.eth["low"]);
				eth_yhigh = setComma(list.eth["yesterday_high"]);
				eth_ylow = setComma(list.eth["yesterday_low"]);
				
				xrp_vol = setComma(list.xrp["volume"]);
				xrp_first = setComma(list.xrp["first"]);
				xrp_high = setComma(list.xrp["high"]);
				xrp_low = setComma(list.xrp["low"]);
				xrp_yhigh = setComma(list.xrp["yesterday_high"]);
				xrp_ylow = setComma(list.xrp["yesterday_low"]);
				
				
			},
			complete	: function () {
				if(b_state==1){
					$("#tlast_price").html (btc_last);
					$("#yesterday_price").html (btc_yest);
					
					$(".c_first").html (btc_vol);
					$(".c_vol").html (btc_first);
					$(".c_high").html (btc_high);
					$(".c_low").html (btc_low);
					$(".c_yhigh").html (btc_yhigh);
					$(".c_ylow").html (btc_ylow);
				}
				else if(b_state==2){
					$("#tlast_price").html (eth_last);
					$("#yesterday_price").html (eth_yest);
					
					$(".c_first").html (eth_vol);
					$(".c_vol").html (eth_first);
					$(".c_high").html (eth_high);
					$(".c_low").html (eth_low);
					$(".c_yhigh").html (eth_yhigh);
					$(".c_ylow").html (eth_ylow);
				}
				else{
					$("#tlast_price").html (xrp_last);
					$("#yesterday_price").html (xrp_yest);
					
					$(".c_first").html (xrp_vol);
					$(".c_vol").html (xrp_first);
					$(".c_high").html (xrp_high);
					$(".c_low").html (xrp_low);
					$(".c_yhigh").html (xrp_yhigh);
					$(".c_ylow").html (xrp_ylow);
				}
			},
			error		: function (a) {
				console.log(a);
			}
		});
	}, 10000); // 10초에 한번씩 받아온다.

}

function getUsrBudget(){
	var u_id = document.getElementById("u_id").value;
	if(u_id=="null"){//비로그인 상태인경우
		$("#myWonBalance").html (str_myWon);
		$("#dashCoin").html ("BTC");
		$("#myCoinBalance").html (str_myBTC);
		button_func();
	}
	else{//로그인 상태인경우
		//get searched list
		$.ajax ({
			method	: "post",
			url		: "/budget/GetUserBudget.json",
			data : {"u_id" : u_id},
			success	: function (list) {
				for(i=0;i<4;i++){
					coin_idx=list[i].c_idx
					if(coin_idx==0){//원화
						str_myWon=setComma(list[i].b_quantity);
					}
					else if(coin_idx==1){//BTC
						str_myBTC=setComma(list[i].b_quantity);
					}
					else if(coin_idx==2){//ETH
						str_myETH=setComma(list[i].b_quantity);
					}
					else{// XRP
						str_myXRP=setComma(list[i].b_quantity);
					}
				}
					
				
			},
			complete	: function () {
				$("#myWonBalance").html (str_myWon);
				$("#dashCoin").html ("BTC");
				$("#myCoinBalance").html (str_myBTC);
				
				

			},
			error		: function (a) {
				console.log(a);
			}
		});
	}
}


function button_func(){
	$("#c1").click(function(){
		b_state=1;
		$("#dashCoin").html ("BTC");
		$("#myCoinBalance").html (str_myBTC);
		$("#tlast_price").html (btc_last);
		$("#yesterday_price").html (btc_yest);
		$(".c_first").html (btc_vol);
		$(".c_vol").html (btc_first);
		$(".c_high").html (btc_high);
		$(".c_low").html (btc_low);
		$(".c_yhigh").html (btc_yhigh);
		$(".c_ylow").html (btc_ylow);
		document.getElementById("c1").style.color = "white";
		document.getElementById("c2").style.color = "gray";
		document.getElementById("c3").style.color = "gray";
		google.charts.setOnLoadCallback(redrawChart);
    });
	$("#c2").click(function(){
		b_state=2;
		$("#dashCoin").html ("ETH");
		$("#myCoinBalance").html (str_myETH);
		$("#tlast_price").html (eth_last);
		$("#yesterday_price").html (eth_yest);
		$(".c_first").html (eth_vol);
		$(".c_vol").html (eth_first);
		$(".c_high").html (eth_high);
		$(".c_low").html (eth_low);
		$(".c_yhigh").html (eth_yhigh);
		$(".c_ylow").html (eth_ylow);
		document.getElementById("c1").style.color = "gray";
		document.getElementById("c2").style.color = "white";
		document.getElementById("c3").style.color = "gray";
		google.charts.setOnLoadCallback(redrawChart);
    });
	$("#c3").click(function(){
		b_state=3;
		$("#dashCoin").html ("XRP");
		$("#myCoinBalance").html (str_myXRP);
		$("#tlast_price").html (xrp_last);
		$("#yesterday_price").html (xrp_yest);
		$(".c_first").html (xrp_vol);
		$(".c_vol").html (xrp_first);
		$(".c_high").html (xrp_high);
		$(".c_low").html (xrp_low);
		$(".c_yhigh").html (xrp_yhigh);
		$(".c_ylow").html (xrp_ylow);
		document.getElementById("c1").style.color = "gray";
		document.getElementById("c2").style.color = "gray";
		document.getElementById("c3").style.color = "white";
		google.charts.setOnLoadCallback(redrawChart);
    });
}

//Unix timestamp => time
function timeConverter_year(UNIX_timestamp){
	  var a = new Date(UNIX_timestamp * 1000);
	  var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
	  var year = a.getFullYear();
	  var month = months[a.getMonth()];
	  var date = a.getDate();
	  var hour = a.getHours();
	  var min = a.getMinutes();
	  var sec = a.getSeconds();
	  var time = month+date
	  return year;
}
//Unix timestamp => time, 날짜까지만 표시
function timeConverter_month(UNIX_timestamp){
	  var a = new Date(UNIX_timestamp * 1000);
	  var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
	  var year = a.getFullYear();
	  var month = months[a.getMonth()];
	  var date = a.getDate();
	  return month;
}

//Unix timestamp => time, 날짜까지만 표시
function timeConverter_date(UNIX_timestamp){
	  var a = new Date(UNIX_timestamp * 1000);
	  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  var year = a.getFullYear();
	  var month = months[a.getMonth()];
	  var date = a.getDate();
	  return date;
}
////////////
//차트
///////////

function redrawChart(){
	var chartdata = new google.visualization.DataTable();
	chartdata.addColumn('date', 'Date');
	chartdata.addColumn('number', 'Price');
	if(b_state==1){
		for(i=0;i<num;i++){
			chartdata.addRows([
		        [new Date(year_info[i], month_info[i], date_info[i]), BTC_close[i]]
			      ]);
		}
	}
	else if(b_state==2){
		for(i=0;i<num;i++){
			chartdata.addRows([
		        [new Date(year_info[i], month_info[i], date_info[i]), ETH_close[i]]
			      ]);
		}
	}
	else if(b_state==3){
		for(i=0;i<num;i++){
			chartdata.addRows([
		        [new Date(year_info[i], month_info[i], date_info[i]), XRP_close[i]]
			      ]);
		}
	}
	
	var options = {
	        hAxis: {
	          title: 'Time',
	          textStyle: {
	            color: '#01579b',
	            fontSize: 20,
	            fontName: 'Arial',
	            bold: true,
	            italic: true
	          },
	          titleTextStyle: {
	            color: '#01579b',
	            fontSize: 16,
	            fontName: 'Arial',
	            bold: false,
	            italic: true
	          }
	        },
	        vAxis: {
	          title: 'Price',
	          textStyle: {
	            color: '#1a237e',
	            fontSize: 24,
	            bold: true
	          },
	          titleTextStyle: {
	            color: '#1a237e',
	            fontSize: 24,
	            bold: true
	          }
	        },
	        colors: ['#a52714', '#097138']
	      };
	      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	      chart.draw(chartdata, options);
}

//차트에 사용할 데이터
//input: num 차트에 사용할 데이터 값의 수   data 차트에 사용할 데이터
//output: chartdata
function inputChartData(){
	
	num=30;
	var chartdata = new google.visualization.DataTable();
	chartdata.addColumn('date', 'Date');
	chartdata.addColumn('number', 'Price');
	
	
	$.ajax ({
		method	: "post",
		url		: "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=KRW&limit=30&e=CCCAGG",
		success	: function (list) {
			for(i=0;i<num;i++){
				year_info.push(timeConverter_year(list.Data[i]["time"]));
				month_info.push(timeConverter_month(list.Data[i]["time"]));
				date_info.push(timeConverter_date(list.Data[i]["time"]));
				BTC_close.push(list.Data[i]["close"]);
			}
		},
		complete	: function () {
			$.ajax ({
				method	: "post",
				url		: "https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=KRW&limit=30&e=CCCAGG",
				success	: function (list) {
					for(i=0;i<num;i++){
						ETH_close.push(list.Data[i]["close"]);
					}
				},
				complete	: function () {
					$.ajax ({
						method	: "post",
						url		: "https://min-api.cryptocompare.com/data/histoday?fsym=XRP&tsym=KRW&limit=30&e=CCCAGG",
						success	: function (list) {
							
							for(i=0;i<num;i++){
								XRP_close.push(list.Data[i]["close"]);
							}
						},
						complete	: function () {
							if(b_state==1){
								for(i=0;i<num;i++){
									chartdata.addRows([
								        [new Date(year_info[i], month_info[i], date_info[i]), BTC_close[i]]
									      ]);
								}
							}
							else if(b_state==2){
								for(i=0;i<num;i++){
									chartdata.addRows([
								        [new Date(year_info[i], month_info[i], date_info[i]), ETH_close[i]]
									      ]);
								}
							}
							else if(b_state==3){
								for(i=0;i<num;i++){
									chartdata.addRows([
								        [new Date(year_info[i], month_info[i], date_info[i]), XRP_close[i]]
									      ]);
								}
							}

							var options = {
							        hAxis: {
							          title: 'Time',
							          textStyle: {
							            color: '#01579b',
							            fontSize: 20,
							            fontName: 'Arial',
							            bold: true,
							            italic: true
							          },
							          titleTextStyle: {
							            color: '#01579b',
							            fontSize: 16,
							            fontName: 'Arial',
							            bold: false,
							            italic: true
							          }
							        },
							        vAxis: {
							          title: 'Price',
							          textStyle: {
							            color: '#1a237e',
							            fontSize: 24,
							            bold: true
							          },
							          titleTextStyle: {
							            color: '#1a237e',
							            fontSize: 24,
							            bold: true
							          }
							        },
							        colors: ['#a52714', '#097138']
							      };
							      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
							      chart.draw(chartdata, options);
							      
							
							return chartdata;
						},
						error		: function (a) {
							console.log(a);
						}
					});
				},
				error		: function (a) {
					console.log(a);
				}
			});
		},
		error		: function (a) {
			console.log(a);
		}
	});
	
	
	
	
	
	

}






