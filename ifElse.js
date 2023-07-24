var age = parseFloat(prompt("Please enter age"));
//document.write(age);


if(age>=21 && age<=95){
window.location ="http://www.espn.com/";}

else if (age<21 && age>=5){
	window.location ="http://www.disney.com/";
}
document.write("Enter age between 5 and 95");