//chart data
var year_info=[];
var month_info=[];
var date_info=[];
BTC_close=[];
ETH_close=[];
XRP_close=[];


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
