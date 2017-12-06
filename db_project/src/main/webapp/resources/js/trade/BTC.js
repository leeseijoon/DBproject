
document.getElementById("AmountBTC1").onchange = function() {caltotal1()};
document.getElementById("AmountKW1").onchange = function() {caltotal1()};

function caltotal1() {
	
	document.getElementById("TotalKW1").value = document.getElementById("AmountBTC1").value * document.getElementById("AmountKW1").value;
}

