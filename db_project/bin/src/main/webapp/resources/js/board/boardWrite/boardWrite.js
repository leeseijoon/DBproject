$(document).ready (function (){
	
	 //summernote 실행
	runSummernote();
	
	
	temp = location.href.split("?");
	var f=document.formName;
	if(temp[1]!=null){
		
		$("#write_or_edit").html (" 수정");
		boardRead();
	
		f.action = "/board/boardUpdate/send";
	}
	else{
		$("#write_or_edit").html (" 글쓰기");
		f.action = "/board/boardWrite/send";
	}
	


});

checkLogin();

function checkLogin(){
	var user_id = document.getElementById("u_id").value;
	 if(user_id=="null"){
		 alert("로그인 하신 뒤 이용가능합니다.");
		 location.href="/board/boardList"; 
	 }
}


function runSummernote(){
	$('#b_content').summernote({
		height: 300,                 // set editor height
		lang: 'ko-KR' // default: 'en-US'
	});
}
function boardRead() {
	temp = location.href.split("?");
	data=temp[1].split("=");
	b_no = data[1];
	str_html="<input type=\"hidden\" id=\"b_no\" name=\"b_no\" value=";
	str_html+=b_no;
	str_html+=">";
	$("#get_b_no").html(str_html);
	$.ajax ({
		method	: "post",
		url		: "/board/GetBoardInfo.json",
		data : {"b_no" : b_no},
		success	: function (list) {
			//아이디 체크
			var user_id = document.getElementById("u_id").value;
			var board_userid=list.u_id;
			 if(user_id!=board_userid){
				 alert("본인이 작성한 글만 수정 가능합니다.");
				 location.href="/board/boardList"; 
			 }
			
			str_html = list.b_title;
			$('#b_title').val(str_html);
			str_html = list.b_content;
			
			$('#b_content').summernote('code', str_html);

		},
		complete	: function () {
		},
		error		: function (a) {
			console.log(a);
		}
	});
	    
	    
}