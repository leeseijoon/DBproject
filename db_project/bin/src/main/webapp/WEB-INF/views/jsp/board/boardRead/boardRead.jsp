<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<input type="hidden" id="u_id" value=<%=session.getAttribute("u_id") %> />
<h2>게시글 작성</h2>
     
    <form>
     
        <!-- (2): textarea will replace by CKEditor -->
        <div id="BoardView">
        </div>>

         <!-- (3): Javascript code to replace textarea with id='editor1' by CKEditor -->
         <div align="right">
		<button type="button" onclick="location.href='/board/boardList'" class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-list-alt"></span>목록 
        </button>
        <button type="button" onclick="location.href='/board/boardWrite'" class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-pencil"></span> 글쓰기
        </button>
        <button type=""button" onclick="location.href='/board/boardList'" class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-edit"></span> 수정 
        </button>
        </div>
             
    </form>