function pagina1(){
	console.log("pagina1()");
 	document.getElementById("pagina1").style.backgroundImage = "url('wakker.jpg')";
 	document.getElementById("pijlrechts").style.display = "block";
 	document.getElementById("button2").style.display = "block";
 	document.getElementById("text1").innerHTML = 'Spongebob has to work. Click on the arrow to go to the Krusty Krab';
 	document.getElementById("button1").style.display = "none";


}

function pagina2(){
	console.log("pagina2()");
	var opt1 = document.getElementById('button2');
 	opt1.setAttribute("onClick", "javascript:voorhuis();");

 	document.getElementById("pagina1").style.backgroundImage = "url('voorhethuis.jpg')";
 	document.getElementById("button3").style.display = "block";
 	document.getElementById("text1").style.display = "none";

}

function voorhuis(){
	document.getElementById("text1").style.display = "none";
	console.log("pagina2()");
	document.getElementById("text1").style.display = "block";
	document.getElementById("text1").innerHTML = 'Wrong way !';
} 

function pagina3(){

	console.log("pagina3()");
	document.getElementById("pagina1").style.backgroundImage = "url('voorkrustykrab.jpg')";
	document.getElementById("text1").innerHTML = 'Go inside !';
	document.getElementById("button2").style.display = "none";
	document.getElementById("button3").style.display = "none";
	document.getElementById("text1").style.display = "block";
	document.getElementById("button4").style.display = "block";
}

function pagina4(){
	console.log("pagina4()");
	document.getElementById("pagina1").style.backgroundImage = "url('krustykrab.jpg')";
	document.getElementById("button4").style.display = "none";
	document.getElementById("text1").innerHTML = 'Go to Mr. Krabs';
	document.getElementById("button5").style.display = "block";
	document.getElementById("text1").style.display = "block";
}

function pagina5(){
	console.log("pagina5()");
	document.getElementById("pagina1").style.backgroundImage = "url('krabopen.jpg')";
	document.getElementById("text1").innerHTML = 'Mr. Krabs : Spongebob ! Plankton stole the recipe. You have to get it back !';
	document.getElementById("button5").style.display = "none";
	document.getElementById("button6").style.display = "block";
	document.getElementById("text1").style.display = "block";
	document.getElementById("button8").style.display = "block";
}

function pagina6(){
	console.log("pagina6()");
	document.getElementById("pagina1").style.backgroundImage = "url('chumbucket.jpg')";
	document.getElementById("button7").style.display = "block";
	document.getElementById("button6").style.display = "none";
	document.getElementById("button8").style.display = "none";
	document.getElementById("text1").innerHTML = 'Go inside and find the secret button to get the recipe back !';
}
function pagina8(){
	console.log("pagina8()")
	document.getElementById("pagina1").style.backgroundImage = "url('fail.jpg')"
	document.getElementById("button6").style.display = "none";
	document.getElementById("button8").style.display = "none";
	document.getElementById("text1").innerHTML = 'You lose Plankton wins! Press F5 to restart.';

}

function pagina7(){					
	console.log("pagina7()");
	var opt1 = document.getElementById('button2');
 	opt1.setAttribute("onClick", "javascript:pagina9();");
 	document.getElementById("button3").style.display = "none";
	document.getElementById("pagina1").style.backgroundImage = "url('insidechum1.jpg')";
	document.getElementById("button7").style.display = "none";
	document.getElementById("button2").style.display = "block";
	document.getElementById("text1").innerHTML = 'Find the secret button or go to the next room to search.';
}

function pagina9(){
	console.log("pagina9()");
	document.getElementById("pagina1").style.backgroundImage = "url('insidechum2.jpg')";
	document.getElementById("button3").style.display = "block";
	document.getElementById("button2").style.display = "block";
	var opt1 = document.getElementById('button3');
 	opt1.setAttribute("onClick", "javascript:pagina7();");
 	var opt2 = document.getElementById('button2');
 	opt2.setAttribute("onClick", "javascript:pagina10();");
 	document.getElementById("button9").style.display = "none";
}

function pagina10(){
	console.log("pagina10()");
	document.getElementById("pagina1").style.backgroundImage = "url('insidechum3.jpg')";
	document.getElementById("button2").style.display = "none";
	var opt1 = document.getElementById('button3');
 	opt1.setAttribute("onClick", "javascript:pagina9();");
 	document.getElementById("button3").style.backgroundColor = "transparant";
 	document.getElementById("button9").style.display = "block";
}

function pagina11(){
	console.log("pagina11()");
	document.getElementById("pagina1").style.backgroundImage = "url('planktonmad.jpg')";
	document.getElementById("button11").style.display = "block";
	document.getElementById("button10").style.display = "block"
	document.getElementById("button3").style.display = "none";
	document.getElementById("button9").style.display = "none";
	document.getElementById("text1").innerHTML = 'Plankton is stopping you! Make a choise.';
}

function pagina12(){
	console.log("pagina12()");
	document.getElementById("pagina1").style.backgroundImage = "url('spongebobmad.jpg')"
	document.getElementById("button11").style.display = "none";
	document.getElementById("button10").style.display = "none";
	document.getElementById("button12").style.display = "block";
	document.getElementById("text1").innerHTML = 'Find the secret button to shoot plankton down!';
}

function pagina13(){
	console.log("pagina13()");
	document.getElementById("pagina1").style.backgroundImage = "url('runaway.jpg')"
	document.getElementById("button10").style.display = "none";
	document.getElementById("button11").style.display = "none";
	document.getElementById("text1").innerHTML = 'You run away. Which side do you go?';
	var opt1 = document.getElementById('button2');
 	opt1.setAttribute("onClick", "javascript:pagina16();");
 	document.getElementById("button2").style.display = "block";
 	var opt2 = document.getElementById('button3');
 	opt2.setAttribute("onClick", "javascript:pagina15();");
 	document.getElementById("button3").style.display = "block";
 	document.getElementById("button2").style.backgroundColor = "white";
 	document.getElementById("button3").style.backgroundColor = "white";


}

function pagina14(){
	console.log("pagina14()");
	document.getElementById("pagina1").style.backgroundImage = "url('planktondown.jpg')"
	document.getElementById("text1").innerHTML = 'You defeated Plankton! Lets bring the recipe to Mr. Krabs.';
	document.getElementById("button12").style.display = "none";
	document.getElementById("button2").style.display = "block";
	var opt1 = document.getElementById('button2');
 	opt1.setAttribute("onClick", "javascript:pagina15();");
}

function pagina15(){
	console.log("pagina15()");
	document.getElementById("pagina1").style.backgroundImage = "url('recipetokrab.jpg')";
	document.getElementById("text1").innerHTML = 'Give the recipe to Mr. Krabs.';
	document.getElementById("button2").style.display = "none";
	document.getElementById("button3").style.display = "none";
	var opt1 = document.getElementById('button11');
	opt1.innerHTML = 'Give Recipe';
 	opt1.setAttribute("onClick", "javascript:pagina17();");
 	document.getElementById("button11").style.display = "block";
}
function pagina16(){
	console.log("pagina16()");
	document.getElementById("pagina1").style.backgroundImage = "url('fail.jpg')";
	document.getElementById("button2").style.display = "none";
	document.getElementById("button3").style.display = "none";
	document.getElementById("text1").innerHTML = 'Wrong way, Spongebob didnt survive!';
}

function pagina17(){
	console.log("pagina17()")
	document.getElementById("pagina1").style.backgroundImage = "url('einde.jpg')";
	document.getElementById("text1").innerHTML = 'They are enjoying their meal.Thanks to you! Press F5 to restart. Thanks for playing! ';
	document.getElementById("button11").style.display = "none";
}