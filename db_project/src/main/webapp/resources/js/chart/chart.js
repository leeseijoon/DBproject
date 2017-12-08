//chart data
var year_info=[];
var month_info=[];
var date_info=[];
BTC_close=[];
ETH_close=[];
XRP_close=[];

myBTC_buy=[];
myBTC_sell=[];
myETH_buy=[];
myETH_sell=[];
myXRP_buy=[];
myXRP_sell=[];
myBTC_yol=[];
myETH_vol=[];
myXRP_vol=[];

b_state=1;


$(document).ready (function (){

//차트
	google.charts.load('current', {packages: ['corechart', 'line']});
  	google.charts.setOnLoadCallback(inputChartData);

});

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

function mychart(){
	//buy
	var chartdatab1 = new google.visualization.DataTable();
	chartdatab1.addColumn('date', 'Date');
	chartdatab1.addColumn('number', 'Volume');
	
	var chartdatab2 = new google.visualization.DataTable();
	chartdatab2.addColumn('date', 'Date');
	chartdatab2.addColumn('number', 'Volume');
	
	var chartdatab3 = new google.visualization.DataTable();
	chartdatab3.addColumn('date', 'Date');
	chartdatab3.addColumn('number', 'Volume');
	
	//sell
	var chartdatas1 = new google.visualization.DataTable();
	chartdatas1.addColumn('date', 'Date');
	chartdatas1.addColumn('number', 'Volume');
	
	var chartdatas2 = new google.visualization.DataTable();
	chartdatas2.addColumn('date', 'Date');
	chartdatas2.addColumn('number', 'Volume');
	
	var chartdatas3 = new google.visualization.DataTable();
	chartdatas3.addColumn('date', 'Date');
	chartdatas3.addColumn('number', 'Volume');
	
	

	$.ajax ({
		method	: "post",
		url		: "/history/GetHistoryList2.json",
		success	: function (list) {
			//list board
			str_html = "<table class=\"table table-inbox table-hover\"><tbody><tr>";
			str_html += "<th>Types</th><th>transaction</th><th>price</th><th>quantity</th><th>date</th></tr>";
			
			var i=0;
			for(i=0; i<list.length; i++){
				str_html += "<tr><td>";
				
				if(list[i].c_idx == 1){
					temp = list[i].e_date.split("-");
					if(list[i].sell_buy == 0){
						chartdatab1.addRows([
					        [new Date(temp[0], temp[1], temp[2]), list[i].e_quantity]
						      ]);
					}
					else{
						chartdatas1.addRows([
					        [new Date(temp[0], temp[1], temp[2]), list[i].e_quantity]
						      ]);
					}
				}
				else if(list[i].c_idx == 2){
					temp = list[i].e_date.split("-");
					if(list[i].sell_buy == 0){
						chartdatab2.addRows([
					        [new Date(temp[0], temp[1], temp[2]), list[i].e_quantity]
						      ]);
					}
					else{
						chartdatas2.addRows([
					        [new Date(temp[0], temp[1], temp[2]), list[i].e_quantity]
						      ]);
					}
				}
				else if(list[i].c_idx == 3){
					temp = list[i].e_date.split("-");
					if(list[i].sell_buy == 0){
						chartdatab3.addRows([
					        [new Date(temp[0], temp[1], temp[2]), list[i].e_quantity]
						      ]);
					}
					else{
						chartdatas3.addRows([
					        [new Date(temp[0], temp[1], temp[2]), list[i].e_quantity]
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
				      var chartb1 = new google.visualization.LineChart(document.getElementById('chart_div_BTC_buy'));
				      chart1.draw(chartdatab1, options);
				      var chartb2 = new google.visualization.LineChart(document.getElementById('chart_div_ETH_buy'));
				      chart2.draw(chartdatab2, options);
				      var chartb3 = new google.visualization.LineChart(document.getElementById('chart_div_XRP_buy'));
				      chart3.draw(chartdatab3, options);
				      var charts1 = new google.visualization.LineChart(document.getElementById('chart_div_BTC_sell'));
				      chart1.draw(chartdatas1, options);
				      var charts2 = new google.visualization.LineChart(document.getElementById('chart_div_ETH_sell'));
				      chart2.draw(chartdatas2, options);
				      var charts3 = new google.visualization.LineChart(document.getElementById('chart_div_XRP_sell'));
				      chart3.draw(chartdatas3, options);

			
		},
		complete	: function () {
		},
		error		: function (a) {
			console.log(a);
		}
	});
	
}

function c_price(){
	var chartdata1 = new google.visualization.DataTable();
	chartdata1.addColumn('date', 'Date');
	chartdata1.addColumn('number', 'Price');
	
	var chartdata2 = new google.visualization.DataTable();
	chartdata2.addColumn('date', 'Date');
	chartdata2.addColumn('number', 'Price');
	
	var chartdata3 = new google.visualization.DataTable();
	chartdata3.addColumn('date', 'Date');
	chartdata3.addColumn('number', 'Price');
		for(i=0;i<num;i++){
			chartdata1.addRows([
		        [new Date(year_info[i], month_info[i], date_info[i]), BTC_close[i]]
			      ]);
		}

		for(i=0;i<num;i++){
			chartdata2.addRows([
		        [new Date(year_info[i], month_info[i], date_info[i]), ETH_close[i]]
			      ]);
		}

		for(i=0;i<num;i++){
			chartdata3.addRows([
		        [new Date(year_info[i], month_info[i], date_info[i]), XRP_close[i]]
			      ]);
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
	      var chart1 = new google.visualization.LineChart(document.getElementById('chart_div_BCH'));
	      chart1.draw(chartdata1, options);
	      var chart2 = new google.visualization.LineChart(document.getElementById('chart_div_ETH'));
	      chart2.draw(chartdata2, options);
	      var chart3 = new google.visualization.LineChart(document.getElementById('chart_div_XRP'));
	      chart3.draw(chartdata3, options);
}

//차트에 사용할 데이터
//input: num 차트에 사용할 데이터 값의 수   data 차트에 사용할 데이터
//output: chartdata
function inputChartData(){
	
	num=30;
	var chartdata1 = new google.visualization.DataTable();
	chartdata1.addColumn('date', 'Date');
	chartdata1.addColumn('number', 'Price');
	
	var chartdata2 = new google.visualization.DataTable();
	chartdata2.addColumn('date', 'Date');
	chartdata2.addColumn('number', 'Price');
	
	var chartdata3 = new google.visualization.DataTable();
	chartdata3.addColumn('date', 'Date');
	chartdata3.addColumn('number', 'Price');
	
	
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
							
								for(i=0;i<num;i++){
									chartdata1.addRows([
								        [new Date(year_info[i], month_info[i], date_info[i]), BTC_close[i]]
									      ]);
								}
							
						
								for(i=0;i<num;i++){
									chartdata2.addRows([
								        [new Date(year_info[i], month_info[i], date_info[i]), ETH_close[i]]
									      ]);
								}
							
				
								for(i=0;i<num;i++){
									chartdata3.addRows([
								        [new Date(year_info[i], month_info[i], date_info[i]), XRP_close[i]]
									      ]);
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
							      var chart1 = new google.visualization.LineChart(document.getElementById('chart_div_BTC'));
							      chart1.draw(chartdata1, options);
							      var chart2 = new google.visualization.LineChart(document.getElementById('chart_div_ETH'));
							      chart2.draw(chartdata2, options);
							      var chart3 = new google.visualization.LineChart(document.getElementById('chart_div_XRP'));
							      chart3.draw(chartdata3, options);
							
						
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
