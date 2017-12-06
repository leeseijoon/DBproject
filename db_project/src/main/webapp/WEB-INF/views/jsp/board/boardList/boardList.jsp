	<%@ page language="java" contentType="text/html; charset=UTF-8"
	    pageEncoding="UTF-8"%>
	<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
	<div class="container">
	<link rel='stylesheet prefetch' href='http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'>
	 <div class="mail-box">
	                  <aside class="lg-side">
	                      <div class="inbox-head">
	                          <h3>게시판</h3>
	                          <form action="#" class="form-inline pull-right position">

	                              <select id="searchOption" class="form-control">
	                              	 <option>제목</option> 
		                              <option>내용</option> 
		                              <option>제목 + 내용</option>
		                               <option>글쓴이</option> 
	                                </select>
	
	                                  <input type="text" class="sr-input" placeholder="검색">
	                                  <button class="btn sr-btn" type="button"><i class="fa fa-search"></i></button>
	    

	
	                          </form>
	                      </div>
	                      <div class="inbox-body">
	                         <div class="mail-option">
	                             
									<div id="table_content"></div>
									<div align="right">
	                               		<button onclick = "location.href ='/board/boardWrite'" class="btn btn-info btn-lg">
	                    						<span class="glyphicon glyphicon-pencil"></span> 글쓰기
	        							</button>
	        							</div>
	                      </div>
	                  </aside>
	              </div>
	              <div class="text-center">
	                    <ul class="pagination">
	        		        <li class="disabled"><span>«</span></li>
	    		            <li class="active"><span>1</span></li>
	    		            <li><a href="http://bootsnipp.com/search?q=page&page=2">2</a></li>
	    		            <li><a href="http://bootsnipp.com/search?q=page&page=3">3</a></li>
	    		            <li><a href="http://bootsnipp.com/search?q=page&page=4">4</a></li>
	    		            <li class="disabled"><span>...</span></li>
	    		            <li><a href="http://bootsnipp.com/search?q=page&page=22">5</a></li>
	    		            <li><a href="http://bootsnipp.com/search?q=page&page=2" rel="next">»</a></li>
		                </ul>
	
	              </div>
	</div>
	</div>