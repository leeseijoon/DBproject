$(document).ready (function (){
	temp = location.href.split("?");
	
	if(temp[1]==null){
		boardList();
	}
	else{
		searchBoardList();
	}
	
});

//글쓰기 버튼을 눌렀을 때 수행되는 함수
//기능: 로그인 중인지 확인 이후 페이지 이동
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

function searchList(){
	if($("#searchKeyword").val()==""){
		location.replace("/board/boardList");
	}
	else{
		//get search option
		
		str_link="/board/boardList?searchKeyword=";
		str_link+=$("#searchKeyword").val();
		str_link+="?searchOption=";
		str_link+=$("select[name=searchOption]").val();
		location.replace(str_link);
	}
}

function searchBoardList(){

	//get search keyword
	temp = location.href.split("?");
	sdata=temp[1].split("=");
	searchKeyword = sdata[1];
	//get search option
	odata=temp[2].split("=");
	searchOption = odata[1];
	
	//get searched list
	$.ajax ({
		method	: "post",
		url		: "/board/GetSearchBoardList.json",
		data : {"searchOption" : searchOption, "searchKeyword" : searchKeyword},
		success	: function (list) {
			//list board
			str_html = "<table class=\"table table-inbox table-hover\"><tbody><tr class=\"unread\">";
			str_html += "<td class=\"view-message  dont-show\">번호</td><td class=\"view-message\">제목</td> <td></td><td></td><td>";
			str_html += "<span>작성자</span></td><td class=\"view-message  text-left\">작성일</td>";
			str_html += "<td class=\"view-message  text-left\">조회수</td></tr>";
			var i=0;
			for(i=0; i<list.length; i++){
				str_html += "<tr data-href = \"/board/boardRead?b_no=";
				str_html += list[i].b_no;
				str_html += "\">";
				str_html += "<td colspan=\"1\" class=\"view-message\">";
				str_html += list[i].b_no;
				str_html += "</td><td colspan=\"3\"><span class=\"view-message text-center\">";
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
			$('tr[data-href]').on("click", function() {
			    document.location = $(this).data('href');
			});
		},
		error		: function (a) {
			console.log(a);
		}
	});
	
}



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
				str_html += "<tr data-href = \"/board/boardRead?b_no=";
				str_html += list[i].b_no;
				str_html += "\">";
				str_html += "<td colspan=\"1\" class=\"view-message\">";
				str_html += list[i].b_no;
				str_html += "</td><td colspan=\"3\"><span class=\"view-message text-center\">";
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
			$('tr[data-href]').on("click", function() {
			    document.location = $(this).data('href');
			});
		},
		error		: function (a) {
			console.log(a);
		}
	});
	    
	    
}