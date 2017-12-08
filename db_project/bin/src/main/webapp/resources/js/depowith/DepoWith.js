 $(document).ready(function(){
	 
        $("#btndepo").click(function(){
        	
        	alert($("#u_id"));
        	
            // 태크.val() : 태그에 입력된 값
            // 태크.val("값") : 태그의 값을 변경 
        	var f=document.atm;
        	f.action = "/depoWith/deposend";
        	f.submit();
        });
        
        $("#btnwith").click(function(){
            // 태크.val() : 태그에 입력된 값
            // 태크.val("값") : 태그의 값을 변경 

        	if($("#mykrw").val < $("#b_quantity").val)	// 가진돈 부족함
        		alert("out of range(KRW)");

            // 폼 내부의 데이터를 전송할 주소
        	var f=document.atm;
        	f.action = "/depoWith/withsend";
            // 제출
        	f.submit();
        });
        
        getUsrBudget();
 });
 
 
 str_myWon=0;
 
 function getUsrBudget(){
 	var u_id = document.getElementById("u_id").value;
 	if(u_id=="null"){

 	}
 	else{
 		//get searched list
 		$.ajax ({
 			method	: "post",
 			url		: "/budget/GetUserBudget.json",
 			data : {"u_id" : u_id},
 			success	: function (list) {
 				alert(JSON.stringify(list));
 				//list
 				str_myWon = list[0].b_quantity;
 					
 				
 			},
 			complete	: function () {

 				$("#mykrw").text(str_myWon);

 			},
 			error		: function (a) {
 				console.log(a);
 			}
 		});
 	}
 }


 function setComma(num){
 	   var len, point, str; 
 	    
 	    num = num + ""; 
 	    point = num.length % 3 ;
 	    len = num.length; 
 	   
 	    str = num.substring(0, point); 
 	    while (point < len) { 
 	        if (str != "") str += ","; 
 	        str += num.substring(point, point + 3); 
 	        point += 3; 
 	    } 
 	     
 	    return str;
 	}