var $ = function (id) {
    return document.getElementById(id);
}


function getQuarters(numberIn){
	var myQuarters = numberIn/25;
	
$('quarters').value=Math.floor(myQuarters);	
return numberIn%25;
}

function getDimes(numberIn){
	var myDimes = numberIn/10;
	
$('dimes').value=Math.floor(myDimes);	
return numberIn%10;
}

function getNickels(numberIn){
	var myNickels = numberIn/5;
	
$('nickels').value=Math.floor(myNickels);	
$('pennies').value=numberIn%5;
return numberIn%5;
}

function doCalculate(){
	var myNumber= $('cents').value;
	getNickels(getDimes(getQuarters(myNumber)));
	
}

$('calculate').addEventListener("click", doCalculate);
