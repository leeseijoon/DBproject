<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
 <div class="container bg_main_container">

	<h1>my_BANK</h1>
	<div >My current KRW : <span id="mykrw">a</span>
  	</div>

<div class="row" style="margin:20px">


    <form name="atm" method="post">
     	<input type="hidden" id="u_id" name="u_id" value=<%=session.getAttribute("u_id") %> />
     	<fieldset>		
				<h2 id="titletext">ATM</h2>
				<input type="hidden" id="c_idx" value="0" />
				<div class="form-group">
                   Amount(KRW) <input type="number" min = 0 step = "1000" name="b_quantity" id="b_quantity1" class="form-control input-lg">
				</div>
				<div class="row">
					<div class="col-xs-6 col-sm-6 col-md-6">
                        <input type="submit" id = "btndepo" class="btn btn-lg btn-success btn-block" value="DEPOSIT">
					</div>
					<div class="col-xs-6 col-sm-6 col-md-6">
                        <input type="submit" id = "btnwith" class="btn btn-lg btn-success btn-block" value="WITHDROW">
					</div>
				</div>
			</fieldset>
             
    </form>
</div>
	
</div>
