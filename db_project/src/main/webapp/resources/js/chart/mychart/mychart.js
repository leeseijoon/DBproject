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
  	google.charts.setOnLoadCallback(mychart);

});

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
	var u_id = $("#u_id").val();
	
	

	$.ajax ({
		method	: "post",
		url		: "/budget/GetUserBudget_buy_month.json",
		data : {"u_id" : u_id},
		success	: function (list) {
			var i=0;
			for(i=0; i<list.length; i++){
				if(list[i].c_idx == 1){
					
	
						chartdatab1.addRows([
					        [new Date(list[i].e_date), list[i].e_quantity]
						      ]);
				}
				else if(list[i].c_idx == 2){
					temp = list[i].e_date.split("-");
						chartdatab2.addRows([
							[new Date(list[i].e_date), list[i].e_quantity]
						      ]);

				}
				else if(list[i].c_idx == 3){
					temp = list[i].e_date.split("-");
						chartdatab3.addRows([
							[new Date(list[i].e_date), list[i].e_quantity]
						      ]);
				}
			}
			
			
			
			
		},
		complete	: function () {
			
			
			$.ajax ({
				method	: "post",
				url		: "/budget/GetUserBudget_sell_month.json",
				data : {"u_id" : u_id},
				success	: function (list) {
					var i=0;
					for(i=0; i<list.length; i++){
						if(list[i].c_idx == 1){
							temp = list[i].e_date.split("-");
								chartdatas1.addRows([
									[new Date(list[i].e_date), list[i].e_quantity]
								      ]);
						}
						else if(list[i].c_idx == 2){
							temp = list[i].e_date.split("-");
								chartdatas2.addRows([
									[new Date(list[i].e_date), list[i].e_quantity]
								      ]);

						}
						else if(list[i].c_idx == 3){
							temp = list[i].e_date.split("-");
								chartdatas3.addRows([
									[new Date(list[i].e_date), list[i].e_quantity]
								      ]);
						}
					}
		

					
				},
				complete	: function () {

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
					          title: 'Volume',
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
						      chartb1.draw(chartdatab1, options);
						      var chartb2 = new google.visualization.LineChart(document.getElementById('chart_div_ETH_buy'));
						      chartb2.draw(chartdatab2, options);
						      var chartb3 = new google.visualization.LineChart(document.getElementById('chart_div_XRP_buy'));
						      chartb3.draw(chartdatab3, options);
						      
						      var charts1 = new google.visualization.LineChart(document.getElementById('chart_div_BTC_sell'));
						      charts1.draw(chartdatas1, options);
						      var charts2 = new google.visualization.LineChart(document.getElementById('chart_div_ETH_sell'));
						      charts2.draw(chartdatas2, options);
						      var charts3 = new google.visualization.LineChart(document.getElementById('chart_div_XRP_sell'));
						      charts3.draw(chartdatas3, options);

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
