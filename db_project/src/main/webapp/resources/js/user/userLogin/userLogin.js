 $(document).ready(function(){
        $("#btnLogin").click(function(){
            // 태크.val() : 태그에 입력된 값
            // 태크.val("값") : 태그의 값을 변경 
            var u_id = $("#u_id").val();
            var u_password = $("#u_password").val();
            if(u_id == ""){
                alert("아이디를 입력하세요.");
                $("#u_id").focus(); // 입력포커스 이동
                return; // 함수 종료
            }
            if(u_password == ""){
                alert("비밀번호를 입력하세요.");
                $("#u_password").focus();
                return;
            }
            // 폼 내부의 데이터를 전송할 주소
            document.logincheck.action="/user/loginCheck.do"
            // 제출
            document.logincheck.submit();
        });
        
        
    });
 