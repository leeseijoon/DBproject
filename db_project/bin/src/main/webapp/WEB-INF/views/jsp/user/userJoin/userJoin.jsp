<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


 

      <article class="container">
        <div class="page-header">
          <h1>회원가입 <small>basic form</small></h1>
        </div>
        <div class="col-md-6 col-md-offset-3">
          <form id="userJoin" action="/user/userJoin/send" method = "post">
            <div class="form-group">
              <label for=""u_id"">아이디</label>
              <input type="email" class="form-control" id="u_id" name="u_id" placeholder="이메일 주소">
            </div>
            <div class="form-group">
              <label for="u_password">비밀번호</label>
              <input type="password" class="form-control" id="u_password" name="u_password" placeholder="비밀번호">
            </div>
            <div class="form-group">
              <label for="u_password">비밀번호 확인</label>
              <input type="password" class="form-control" id="u_password2" placeholder="비밀번호 확인">
              <p class="help-block">비밀번호 확인을 위해 다시한번 입력 해 주세요</p>
            </div>
            <div class="form-group">
              <label for="u_name">이름</label>
              <input type="text" class="form-control" id="u_name" name="u_name" placeholder="이름을 입력해 주세요">
            </div>
            <div class="form-group">
 				<label for="u_phonenum">핸드폰 번호(- 없이 입력)</label>
              	<input type="text" class="form-control" id="u_phonenum" name="u_phonenum" placeholder="핸드폰 번호를 입력해 주세요">
            </div>
            <div class="form-group text-center">
              <button type="submit" class="btn btn-info">회원가입<i class="fa fa-check spaceLeft"></i></button>
             </form>
              <form action="/user/userLogin">
              	<button type="submit" class="btn btn-warning">가입취소<i class="fa fa-times spaceLeft"></i></button>
              </form>
            </div>
          
        </div>

       

