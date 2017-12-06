<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<input type="hidden" id="u_id" value=<%=session.getAttribute("u_id") %> />
<div class="inbox-head">
                          <h3>게시판</h3>
                          <form action="#" class="pull-right position">
                              <div class="input-append">
                                  <input type="text" class="sr-input" placeholder="검색">
                                  <button class="btn sr-btn" type="button"><i class="fa fa-search"></i></button>
                              </div>
                          </form>
                      </div>
    <form>
     	 <div class="inbox-body">
            <div class="mail-option">
        		<div id="BoardView"></div>
        	</div>
       	</div>

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