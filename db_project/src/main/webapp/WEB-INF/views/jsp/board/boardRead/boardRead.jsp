<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<input type="hidden" id="u_id" value=<%=session.getAttribute("u_id") %> />
<div class="inbox-head">
                          <h3>게시판</h3>
                          <form action="#" class="pull-right position">
                              <div class="input-append">
                                  
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
   
        <div id="buttons"></div>

             </form>
    </form>