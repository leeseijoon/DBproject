$(document).ready (function (){
	userList();
	
});



function userList() {

	$.ajax ({
		method	: "post",
		url		: "/user/GetUserlist.json",
		success	: function (list) {
			
			str_html ="<div class=\"col-xs-12\">";
			str_html +="<div class=\"well\" style=\"overflow: auto;\">";
			str_html +="<ul id=\"check-list-box\" class=\"list-group checked-list-box\">";
			
			//list user
			var i=0;
			for(i=0; i<list.length; i++){
				str_html +="<li class=\"list-group-item\">";
				str_html +=list[i].u_id;
				str_html += "</li>";
			}
			str_html+="</ul>";
			
			//search company
			str_html+="<div class=\"input-group col-xs-12\">";
			str_html+="<input id=\"cmpnySearch\" type=\"text\" class=\"form-control input-lg\" placeholder=\"유저 검색\">";
			str_html+="<span class=\"input-group-btn\">";
			str_html+="<i class=\"glyphicon glyphicon-search\"></i>";
			str_html+="</span></div>";

			
		},
		complete	: function () {
			
		},
		error		: function (a) {
			console.log(a);
		}
	});
	    
	    
}