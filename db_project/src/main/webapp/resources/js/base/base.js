$(document).ready(function(){
	
	isLogined();
});
 
 function isLogined(){
	 var user_id = document.getElementById("u_id").value;
	 str_html="";
	 if(user_id=="null"){
		 str_html+="<a href=\"/user/userLogin\">Login </a> | ";
			 str_html+="<a href=\"/user/userJoin\">Join us</a>";
	 }
	 else{
		 str_html+="<h4>";
		 str_html+=user_id;
		 str_html+="님 환영합니다!</h4>";
	 }
	 $("#userlist").html (str_html);
 }