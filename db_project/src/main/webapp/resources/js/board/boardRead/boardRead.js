$(document).ready (function (){
	
	boardRead();
	
});



function b_delete(){
	var f=document.DeleteForm;
	$.ajax ({
		method	: "post",
		url		: "/board/GetBoardU_id.json",
		data : {"b_no" : b_no},
		success	: function (list) {
			//아이디 체크
			var user_id = document.getElementById("u_id").value;
			var board_userid=list.u_id;
			 if(user_id!=board_userid){
				 alert("본인이 작성한 글만 삭제 가능합니다.");
				 location.href="/board/boardList"; 
			 }
			 else{
		
				 str_html="/board/boardDelete?b_no="; 
				 str_html+=b_no;
				 
				 var user_id = document.getElementById("u_id").value;
				 $.ajax ({
						method	: "post",
						url		: str_html,
						data : {"u_id" : user_id},
						success	: function (list) {
							location.href="/board/boardList"; 

						},
						complete	: function () {
						},
						error		: function (a) {
							console.log(a);
						}
					});
	
			 }

		},
		complete	: function () {
		},
		error		: function (a) {
			console.log(a);
		}
	});

}



function b_write(){
	var user_id = document.getElementById("u_id").value;
	 if(user_id=="null"){
		 alert("로그인 하신 뒤 이용가능합니다.");
		 location.href="/board/boardList"; 
	 }
	 else{
		 location.href ="/board/boardWrite";
	 }
}

function b_update(){
	var user_id = document.getElementById("u_id").value;
	
	
	$.ajax ({
		method	: "post",
		url		: "/board/GetBoardU_id.json",
		data : {"b_no" : b_no},
		success	: function (list) {
			//아이디 체크
			var user_id = document.getElementById("u_id").value;
			var board_userid=list.u_id;
			 if(user_id!=board_userid){
				 alert("본인이 작성한 글만 수정 가능합니다.");
				 location.href="/board/boardList"; 
			 }
			 else{
				 str_html="/board/boardWrite?b_no="; 
				 str_html+=b_no;
				 location.href =str_html;
			 }

		},
		complete	: function () {
		},
		error		: function (a) {
			console.log(a);
		}
	});
	 
}

function boardRead() {
	temp = location.href.split("?");
	data=temp[1].split("=");
	b_no = data[1];
	
	str_html= "<div align=\"right\"><button type=\"button\" onclick=\"location.href='/board/boardList'\" class=\"btn btn-info btn-lg\">";
	str_html+= "<span class=\"glyphicon glyphicon-list-alt\"></span>목록 </button><button type=\"button\" onclick=\"b_write()\"";
	str_html+= " class=\"btn btn-info btn-lg\">";
	str_html+= "<span class=\"glyphicon glyphicon-pencil\"></span> 글쓰기 </button>";
	str_html+="<button type=\"button\" onclick=\"b_update()"; 
	str_html+="\" class=\"btn btn-info btn-lg\"><span class=\"glyphicon glyphicon-edit\"></span> 수정 </button>";
	

	str_html+="<span align=\"right\">";
	str_html+="<button type=\"button\" onclick=\"b_delete()\" class=\"btn btn-info btn-lg\">";
	str_html+= "<span class=\"glyphicon glyphicon-erase\">삭제</span></button></span>"

	$("#buttons").html (str_html);
	
	$.ajax ({
		method	: "post",
		url		: "/board/GetBoardInfo.json",
		data : {"b_no" : b_no},
		success	: function (list) {
			str_html = "<table class=\"table table-bordered table-inbox \"><tbody><tr><th class=\"active\">제목</th><td colspan=\"5\">";
			str_html += list.b_title;
			str_html += "</td></tr><tr><th class=\"active\">글쓴이</th><td>";
			str_html += list.u_id;
			str_html += "</td><th class=\"active\">등록일</th><td>";
			str_html += list.b_date;
			str_html += "</td><th class=\"active\">조회수</th><td>";
			str_html += list.b_hit;
			str_html += "</td></tr><tr><td class=\"active\" colspan=\"6\"><div id=\"board_contents\" class=\"input-group\" style=\"overflow:scroll; height:500px; padding:10px; background-color:rgb(255, 255, 255);\">";
			str_html += list.b_content;
			str_html += "</div></tr></td></tbody></table>";
			
			$("#BoardView").html (str_html);

		},
		complete	: function () {
		},
		error		: function (a) {
			console.log(a);
		}
	});
	    
	    
}