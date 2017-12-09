$(document).ready (function (){

	historylist0();
	historylist1();
	historylist2();
	historylist3();
	historylist4();
});



function historylist0() {
	$.ajax ({
		method	: "post",
		url		: "/history/GetHistoryList0.json",
		success	: function (list) {
			//list board
			str_html = "<table class=\"table table-inbox table-hover\"><tbody><tr>";
			str_html += "<th>Types</th><th>transaction</th><th>price</th><th>quantity</th><th>date</th></tr>";
			
			var i=0;
			for(i=0; i<list.length; i++){
				str_html += "<tr><td>";
				
				if(list[i].c_idx == 1){
					str_html += "BTC";
				}
				else if(list[i].c_idx == 2){
					str_html += "ETH";
				}
				else if(list[i].c_idx == 3){
					str_html += "XRP";
				}
				str_html += "</td><td>";
				
				if(list[i].sell_buy == 0){
					str_html += "BUY";
				}
				else {
					str_html += "SELL";
				}
				
				str_html += "</td><td>";
				str_html += list[i].e_price;
				str_html += "</td><td>";
				str_html += list[i].e_quantity;
				str_html += "</td><td>";
				str_html += list[i].e_date;
				str_html += "</td></tr>";
			}
			str_html += "</tbody></table>";
			
			$("#table_content0").html (str_html);
			
		},
		complete	: function () {
			$('tr[data-href]').on("click", function() {
			    document.location = $(this).data('href');
			});
		},
		error		: function (a) {
			console.log(a);
		}
	});
	    
	    
}
function historylist1() {
	var c_idx=1;
	
	$.ajax ({
		method	: "post",
		url		: "/history/GetHistoryList1.json",
		data : {"c_idx" : c_idx},
		success	: function (list) {

			str_html = "<table class=\"table table-inbox table-hover\"><tbody><tr>";
			str_html += "<th>Types</th><th>transaction</th><th>price</th><th>quantity</th><th>date</th></tr>";
			
			var i=0;
			for(i=0; i<list.length; i++){
				str_html += "<tr><td>";
				
				if(list[i].c_idx == 1){
					str_html += "BTC";
				}
				else if(list[i].c_idx == 2){
					str_html += "ETH";
				}
				else if(list[i].c_idx == 3){
					str_html += "XRP";
				}
				str_html += "</td><td>";
				
				if(list[i].sell_buy == 0){
					str_html += "BUY";
				}
				else {
					str_html += "SELL";
				}
				
				str_html += "</td><td>";
				str_html += list[i].e_price;
				str_html += "</td><td>";
				str_html += list[i].e_quantity;
				str_html += "</td><td>";
				str_html += list[i].e_date;
				str_html += "</td></tr>";
			}
			str_html += "</tbody></table>";
			
			$("#table_content1").html (str_html);
			
		},
		complete	: function () {
			$('tr[data-href]').on("click", function() {
			    document.location = $(this).data('href');
			});
		},
		error		: function (a) {
			console.log(a);
		}
	});
	    
	    
}
function historylist2() {
	var c_idx=2;
	
	$.ajax ({
		method	: "post",
		url		: "/history/GetHistoryList1.json",
		data : {"c_idx" : c_idx},
		success	: function (list) {

			str_html = "<table class=\"table table-inbox table-hover\"><tbody><tr>";
			str_html += "<th>Types</th><th>transaction</th><th>price</th><th>quantity</th><th>date</th></tr>";
			
			var i=0;
			for(i=0; i<list.length; i++){
				str_html += "<tr><td>";
				
				if(list[i].c_idx == 1){
					str_html += "BTC";
				}
				else if(list[i].c_idx == 2){
					str_html += "ETH";
				}
				else if(list[i].c_idx == 3){
					str_html += "XRP";
				}
				str_html += "</td><td>";
				
				if(list[i].sell_buy == 0){
					str_html += "BUY";
				}
				else {
					str_html += "SELL";
				}
				
				str_html += "</td><td>";
				str_html += list[i].e_price;
				str_html += "</td><td>";
				str_html += list[i].e_quantity;
				str_html += "</td><td>";
				str_html += list[i].e_date;
				str_html += "</td></tr>";
			}
			str_html += "</tbody></table>";
			
			$("#table_content2").html (str_html);
			
		},
		complete	: function () {
			$('tr[data-href]').on("click", function() {
			    document.location = $(this).data('href');
			});
		},
		error		: function (a) {
			console.log(a);
		}
	});
	    
	    
}
function historylist3() {
	var c_idx=3;
	
	$.ajax ({
		method	: "post",
		url		: "/history/GetHistoryList1.json",
		data : {"c_idx" : c_idx},
		success	: function (list) {

			str_html = "<table class=\"table table-inbox table-hover\"><tbody><tr>";
			str_html += "<th>Types</th><th>transaction</th><th>price</th><th>quantity</th><th>date</th></tr>";
			
			var i=0;
			for(i=0; i<list.length; i++){
				str_html += "<tr><td>";
				
				if(list[i].c_idx == 1){
					str_html += "BTC";
				}
				else if(list[i].c_idx == 2){
					str_html += "ETH";
				}
				else if(list[i].c_idx == 3){
					str_html += "XRP";
				}
				str_html += "</td><td>";
				
				if(list[i].sell_buy == 0){
					str_html += "BUY";
				}
				else {
					str_html += "SELL";
				}
				
				str_html += "</td><td>";
				str_html += list[i].e_price;
				str_html += "</td><td>";
				str_html += list[i].e_quantity;
				str_html += "</td><td>";
				str_html += list[i].e_date;
				str_html += "</td></tr>";
			}
			str_html += "</tbody></table>";
			
			$("#table_content3").html (str_html);
			
		},
		complete	: function () {
			$('tr[data-href]').on("click", function() {
			    document.location = $(this).data('href');
			});
		},
		error		: function (a) {
			console.log(a);
		}
	});
	    
	    
}
function historylist4() {
	var u_id = $("#u_id").val();
	
	$.ajax ({
		method	: "post",
		url		: "/history/GetHistoryList2.json",
		data : {"u_id" : u_id},
		success	: function (list) {
			str_html = "<table class=\"table table-inbox table-hover\"><tbody><tr>";
			str_html += "<th>Types</th><th>transaction</th><th>price</th><th>quantity</th><th>date</th></tr>";
			
			var i=0;
			for(i=0; i<list.length; i++){
				str_html += "<tr><td>";
				
				if(list[i].c_idx == 1){
					str_html += "BTC";
				}
				else if(list[i].c_idx == 2){
					str_html += "ETH";
				}
				else if(list[i].c_idx == 3){
					str_html += "XRP";
				}
				str_html += "</td><td>";
				
				if(list[i].sell_buy == 0){
					str_html += "BUY";
				}
				else {
					str_html += "SELL";
				}
				
				str_html += "</td><td>";
				str_html += list[i].e_price;
				str_html += "</td><td>";
				str_html += list[i].e_quantity;
				str_html += "</td><td>";
				str_html += list[i].e_date;
				str_html += "</td></tr>";
			}
			str_html += "</tbody></table>";
			
			$("#table_content4").html (str_html);
			
		},
		complete	: function () {
			$('tr[data-href]').on("click", function() {
			    document.location = $(this).data('href');
			});
		},
		error		: function (a) {
			console.log(a);
		}
	});
	    
	    
}