<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<h2>게시글 작성</h2>
     
    <form name="formName" method="post">
     	<input type="hidden" id="u_id" name="u_id" value=<%=session.getAttribute("u_id") %> />
     	<div id="get_b_no"></div>
        <!-- (2): textarea will replace by CKEditor -->
        <div class="input-group">
        <span class="input-group-addon"><b>제목</b></span>
    	<input id="b_title" type="text" class="form-control" name="b_title" placeholder="">
    	</div>
        <textarea id="b_content" name="b_content" cols="80" rows="10">
       
        </textarea>
 
         <div align="right">
		<button type="submit" class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-pencil"><a id="write_or_edit"></a></span>
        </button>
        </div>
             
    </form>