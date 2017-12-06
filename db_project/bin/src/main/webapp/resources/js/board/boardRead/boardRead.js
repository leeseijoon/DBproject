$(document).ready (function (){
	
	boardRead();
	
});




function boardRead() {
	temp = location.href.split("?");
	data=temp[1].split("=");
	b_no = data[1];
	$.ajax ({
		method	: "post",
		url		: "/board/GetBoardInfo.json",
		data : {"b_no" : b_no},
		success	: function (list) {
			str_html = "<div class=\"input-group\"><span class=\"input-group-addon\"><b>제목</b></span><form> ";
			str_html += list.b_title;
			str_html += "</form></div><div class=\"input-group\"><span class=\"input-group-addon\"><b>글쓴이</b></span><div> ";
			str_html += list.u_id;
			str_html += "</div><span class=\"input-group-addon\"><b>등록일</b></span>	<div> ";
			str_html += list.b_date;
			str_html += "</div><span class=\"input-group-addon\"><b>조회</b></span><div> ";
			str_html += list.b_hit;
			str_html += "</div></div><div class=\"input-group\" style=\"overflow:scroll; height:500px; padding:10px; background-color:rgb(250, 250, 250);\">";
			str_html += list.b_content;
			str_html += "</div>";
			$("#BoardView").html (str_html);
			
		},
		complete	: function () {
		},
		error		: function (a) {
			alert("error");
			console.log(a);
		}
	});
	    
	    
}