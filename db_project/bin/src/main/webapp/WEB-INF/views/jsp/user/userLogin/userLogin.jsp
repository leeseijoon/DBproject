<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">



       

<div class="container">
  
  <div class="row" id="pwd-container">
    <div class="col-md-4"></div>
    
    <div class="col-md-4">
      <section class="login-form">
        <form method="post" name="logincheck"  role="login">
          <img src="http://i.imgur.com/RcmcLv4.png" class="img-responsive" alt="" />
          <input type="email" name="u_id" placeholder="Email ID" required class="form-control input-lg"  />
          
          <input type="password" class="form-control input-lg" id="u_password" name="u_password" placeholder="Password" required="" />
          
          
          <div class="pwstrength_viewport_progress"></div>
          
          
          <button type="button" id="btnLogin" name="go" class="btn btn-lg btn-primary btn-block">Sign in</button>
          <c:if test="${msg == 'failure'}">
                    <div style="color: red">
                        아이디 또는 비밀번호가 일치하지 않습니다.
                    </div>
                </c:if>
                <c:if test="${msg == 'logout'}">
                    <div style="color: red">
                        로그아웃되었습니다.
                    </div>
                </c:if>
          <div>
            <a href="user/userJoin">Create account</a>
          </div>
          </br>
        </form>
        

      </section>  
      </div>
      
      

  </div>   
  
  
</div>