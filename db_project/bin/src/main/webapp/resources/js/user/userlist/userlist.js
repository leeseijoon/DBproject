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
			
			$("#userlist").html (str_html);
			
		},
		complete	: function () {
		},
		error		: function (a) {
			alert("error");
			console.log(a);
		}
	});
	    
	    
}