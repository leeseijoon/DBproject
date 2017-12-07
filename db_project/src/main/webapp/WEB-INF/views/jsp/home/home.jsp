<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
 <div class="container">
 </br>
    <div id="dashContainer" class="bg-faded p-4 my-4">
    <div id="dashBoardContainer">
		<div id="dash" class="row">
	    	<div id="myinfo" class="col-sm-6">
	      		<table id="myinfotable" class="table">
				    <thead>
				      <tr>
				        <th id="mybalance">MY Balance</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr>
				        <td>
				        	<div id="dashWon">Won</div>
				        	<div id="myWonBalance"></div>
				        </td>
				      </tr>
				      <tr>
				        <td>
				        	<div id="dashCoin"></div>
				        	<div id="myCoinBalance"></div>
				        </td>
				      </tr>
				    </tbody>
				  </table>
	    	</div>
	    	<div class="col-sm-6" id="coin_container">
		      		<form class=form-inline">
		      		<div id="button_div" class="form-group">
		      			<label class="c_button" id="c1" >BTC</label>
		      			<label class="c_button_bar"> | </label>
		      			<label class="c_button" id="c2" >ETH</label>
		      			<label class="c_button_bar"> | </label>
		      			<label class="c_button" id="c3" >XRP</label>
		      			</div>
		      			<div id="coinInfoBox">
		      				<div id="coin_info_left">
		      				<div class="titleword">Current Price(KRW)</div>
		      					<label id="tlast_price"></label>
		      				</div>
		      				<div id="coin_info_right">
		      				<div class="titleword">Yesterday Price(KRW)</div>
		      					<label id="yesterday_price"></label>
		      				</div>
		      			</div>
		      			<div></div>
		      		</form>    
	    	</div>
	  	</div>
	  	<div id="detailInfo">
	  	 <div class="row">
		    <div class="col-sm-2">&nbspFirst</div>
		    <div class="col-sm-2">Volume</div>
		    <div class="col-sm-2">High</div>
		    <div class="col-sm-2">Low</div>
		    <div class="col-sm-2">Yesterday High</div>
		    <div class="col-sm-2">Yesterday Low</div>
		  </div>
	  	<div class="row">
		    <div class="col-sm-2"><label class="c_first"></label></div>
		    <div class="col-sm-2"><label class="c_vol"></label></div>
		    <div class="col-sm-2"><label class="c_high"></label></div>
		    <div class="col-sm-2"><label class="c_low"></label></div>
		    <div class="col-sm-2"><label class="c_yhigh"></label></div>
		    <div class="col-sm-2"><label class="c_ylow"></label></div>
		  </div>
		 </div>
		 <div id="detailInfo_small">
		  	  <div class="row">
			    <div class="col-sm-2">First<label class="c_first"></label></div>
			    <div class="col-sm-2">Volume<label class="c_vol"></label></div>
			    <div class="col-sm-2">High<label class="c_high"></label></div>
			    <div class="col-sm-2">Low<label class="c_low"></label></div>
			    <div class="col-sm-2">Yesterday High<label class="c_yhigh"></label></div>
			    <div class="col-sm-2">Yesterday Low<label class="c_ylow"></label></div>
			  </div>
		 </div>
		 </div>
		 
		 <div id="chart_div"></div>

	</div>
    <div id="div1" style="border: 1px solid black;" class="bg-faded p-4 my-4">
     <gcse:searchbox></gcse:searchbox>
     </div>
		
     <div id="div2" style="border: 1px solid black;" class="bg-faded p-4 my-4">
     <gcse:searchresults></gcse:searchresults>
     </div>
</div>
