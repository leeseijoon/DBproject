<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
 <div class="container bg_main_container">

	<h1>Trade BTC</h1>
	
<div class="row">
  <div class="col-md-6">My current BTC : <span id="mybtc">a</span>
  </div>
  <div class="col-md-6">My current KRW : <span id="mykrw">a</span>
  </div>
</div>

<div class="row">
  <div class="col-md-4">high : <span id="coin_high">1</span>
  </div>
  <div class="col-md-4">low : <span id="coin_low">2</span>
  </div>
  <div class="col-md-4">last : <span id="coin_last">3</span>
  </div>
</div>

	
	
	<div class="container">
<div class="row" style="margin:20px">
<div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">

    <form name="buysellbtc" method="post">
     	<input type="hidden" id="u_id" name="u_id" value=<%=session.getAttribute("u_id") %> />
     	
     	<fieldset>		
				<h2 id="titletext">BUY / SELL BTC</h2>
				<input type="hidden" name = "c_idx" id="c_idx" value="1" />
				<div class="form-group">
                   Amount(BTC) <input type="number" min = 0 step = "0.000001" name="e_quantity" id="AmountBTC1" class="form-control input-lg">
				</div>
				<div class="form-group">
                   Price(KRW) <input type="number" min = 0 name="e_price" id="AmountKW1" class="form-control input-lg" >
				</div>
				<div class="form-group">
                   Total KRW <input type="number" min = 0 step = "0.000001" id="TotalKW1" class="form-control input-lg" readonly>
				</div>
				<div class="row">
					<div class="col-xs-6 col-sm-6 col-md-6">
                        <input type="submit" id = "btnbuybtc" class="btn btn-lg btn-success btn-block" value="Buy">
					</div>
					<div class="col-xs-6 col-sm-6 col-md-6">
                        <input type="submit" id = "btnsellbtc" class="btn btn-lg btn-success btn-block" value="Sell">
					</div>
				</div>
			</fieldset>
             
    </form>
</div>
</div>
	</div>
	
	
	
</div>
