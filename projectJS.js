//create header1
var header = document.createElement("H1")                
var headerText = document.createTextNode("Oksana Feterovskaya");     
header.appendChild(headerText);  
document.body.appendChild(header);
header.style.fontFamily= "Tahoma";
header.style.color= "red";
header.style.textAlign= "center";
//create header2
var header2 = document.createElement("H2")                
var headerCourse = document.createTextNode("WEB115.0001");     
header2.appendChild(headerCourse);  
document.body.appendChild(header2);
header2.style.fontFamily= "Garamond";
header2.style.color= "red";
header2.style.textAlign= "center";
header2.style.fontStyle= "italic";
//create horizontal rule
 var line = document.createElement("HR");
    document.body.appendChild(line);
	line.width="60%";
//create title	
var title = document.createElement("H1")                
var titleText = document.createTextNode("Build Your Resume");     
title.appendChild(titleText);  
document.body.appendChild(title);
title.style.textAlign= "center";



function myFunction() {
    var str = document.getElementById("txtEmail").value;
    var n = str.search("@");
		if (n>=0)
		{
		document.getElementById("emailErr").innerHTML = " ";
		}
		else{document.getElementById("emailErr").innerHTML = "enter valid email";}
    
}

function myResume() {
	
//    visitorName = document.getElementById("myInput").value;
    myText = '<!doctype html><html><head><meta charset="UTF-8"><title>Web 115 Final Project</title><link href="finalProject.css" rel="stylesheet" type="text/css"></head><body>';
	
	myText += ('<div class="header"><p> ');
	myText += ("<p>"+document.getElementById("txtName").value+"</p>");
	myText += (""+document.getElementById("txtAdress").value+"/ ");
	myText += (" "+document.getElementById("txtPhone").value+" ");
	myText += ("<p> "+document.getElementById("txtEmail").value+"</p>");
	myText += ("</p>\n</div><hr>");
	
	
	myText += ('<div  class="left"><p>Career Objective</p></div><div  class="right"><p> '+document.getElementById("txtCareer").value+'	</p></div>');
	myText += ('<div  class="left"><p>Personal Data</p></div><div  class="right"><p> '+document.getElementById("persData").value+'</p></div>');
	myText += ('<div  class="left"><p>Education</p></div><div  class="right"><p> '+document.getElementById("txtEducate").value+'</p></div>');
	myText += ('<div  class="left"><p>Employment Experience</p><p>'+document.getElementById("txtExp1").value+'</p></div><div  class="right"><br><br><p> '+document.getElementById("txtName1").value+'</p></div>');
	myText += ('<div  class="left"><p>'+document.getElementById("txtExp2").value+'</p></div><div  class="right"><p> '+document.getElementById("txtName2").value+'</p></div>');
	myText += ('<div  class="left"><p>'+document.getElementById("txtExp3").value+'</p></div><div  class="right"><p> '+document.getElementById("txtName3").value+'</p></div>');
	myText += ('<div  class="left"><p>'+document.getElementById("txtExp4").value+'</p></div><div  class="right"><p> '+document.getElementById("txtName4").value+'</p></div>');
	myText += ('<div  class="left"><p>Business References</p></div><div  class="right"><p> '+document.getElementById("txtRef").value+'	</p></div>');
	
	
	/*
	myText += ("<p>"+document.getElementById("txtCareer").value+"</p>");
	myText += ("<p>"+document.getElementById("persData").value+"</p>");
	myText += ("<p>"+document.getElementById("txtEducate").value+"</p>");
	myText += ("<p>"+document.getElementById("txtExp1").value+"</p>");
	myText += ("<p>"+document.getElementById("txtName1").value+"</p>");
	myText += ("<p>"+document.getElementById("txtExp2").value+"</p>");
	myText += ("<p>"+document.getElementById("txtName2").value+"</p>");
	myText += ("<p>"+document.getElementById("txtExp3").value+"</p>");
	myText += ("<p>"+document.getElementById("txtName3").value+"</p>");
	myText += ("<p>"+document.getElementById("txtExp4").value+"</p>");
	myText += ("<p>"+document.getElementById("txtName4").value+"</p>");
	myText += ("<p>"+document.getElementById("txtRef").value+"</p>");
	*/
    myText += ("</body>\n</html>");

    flyWindow = window.open('about:blank','myPop','width=600,height=800,left=200,top=200');
    flyWindow.document.write(myText);
}


	
