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
			alert("error");
			console.log(a);
		}
	});
	    
	    
}