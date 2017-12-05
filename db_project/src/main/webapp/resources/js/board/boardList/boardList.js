$(document).ready (function (){
	boardList();
	
});





function boardList() {
	$.ajax ({
		method	: "post",
		url		: "/board/GetBoardList.json",
		success	: function (list) {
			//list board
			str_html = "<table class=\"table table-inbox table-hover\"><tbody><tr class=\"unread\">";
			str_html += "<td class=\"view-message  dont-show\">번호</td><td class=\"view-message\">제목</td> <td></td><td></td><td>";
			str_html += "<span>작성자</span></td><td class=\"view-message  text-left\">작성일</td>";
			str_html += "<td class=\"view-message  text-left\">조회수</td></tr>";
			var i=0;
			for(i=0; i<list.length; i++){
				str_html += "<tr class=\"\">";
				str_html += "<td colspan=\"1\" class=\"view-message\">";
				str_html += list[i].b_no;
				str_html += "</td><td colspan=\"3\"><span class=\"view-message text-center\">";
				str_html += "<a href = \"/board/boardRead?b_no=";
				str_html += list[i].b_no;
				str_html += "\">";
				str_html += list[i].b_title;
				str_html += "</a></span></td>";
				str_html += "<td class=\"view-message\">";
				str_html += list[i].u_id;
				str_html += "</td>";
				str_html += "<td class=\"view-message\">";
				str_html += list[i].b_date;
				str_html += "</td>";
				str_html += "<td class=\"view-message\">";
				str_html += list[i].b_hit;
				str_html += "</td>";
				str_html += "</tr>";
			}
			str_html += "</tbody></table>";
			
			$("#table_content").html (str_html);
			
		},
		complete	: function () {
		},
		error		: function (a) {
			alert("error");
			console.log(a);
		}
	});
	    
	    
}