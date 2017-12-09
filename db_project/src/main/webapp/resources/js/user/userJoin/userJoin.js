
	
	 $(document).ready(function(){
		 
	        $("#btnjoin").click(function(){
	        	
	            // 태크.val() : 태그에 입력된 값
	            // 태크.val("값") : 태그의 값을 변경 
	        	
	        	if(t1.value == t2.value){
	        		var f=document.userJoin;
		        	f.action="/user/userJoin/send";
		        	f.submit();
	        	}
	        	else
	        		alert("check password again!");
	        	
	        	
	        });
	        
	 });