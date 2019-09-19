
const buttonColor = document.getElementById("change");

buttonColor.onclick = function(){
	//document.body.style.backgroundColor = "#4285F4";
	//document.body.setAttribute("class", "blue"); //set attribute class
	document.body.classList.toggle("blue-color"); //to set on and off
}

//creating a button in javascript
const mixedColor = document.createElement("button");
const buttonText = document.createTextNode("Mixed color");
mixedColor.appendChild(buttonText);
mixedColor.setAttribute("type", "button");
change.after(mixedColor);

//adding event to the button

mixedColor.addEventListener("click", function(){
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	
	document.body.style.backgroundColor = "rgb("+ r + "," + g + "," + b +")";
});

const sRed = document.querySelector("input[name=sRed]");
const sGreen = document.querySelector("input[name=sGreen]");
const sBlue = document.querySelector("input[name=sBlue]");

sRed.addEventListener("input", function(){
	
	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;
	document.body.style.backgroundColor = "rgb("+ r + "," + g + "," + b +")";
});

sGreen.addEventListener("input", function(){
	
	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;
	document.body.style.backgroundColor = "rgb("+ r + "," + g + "," + b +")";
});

sBlue.addEventListener("input", function(){
	
	const r = sRed.value;
	const g = sGreen.value;
	const b = sBlue.value;
	document.body.style.backgroundColor = "rgb("+ r + "," + g + "," + b +")";
});

document.body.addEventListener("mousemove", function(event){
	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255);
	document.body.style.backgroundColor = "rgb("+ xPos + "," + yPos + "," + 100 +")";
});


/*function changeColorBody(){ //using onclick to change the background color
	const buttonColor1 = document.querySelector("body");	
	buttonColor1.style.backgroundColor = "#4285F4";
}*/

/*
//using id to change the background color

//const buttonColor1 = document.getElementsByTagName("body")[0];
const buttonColor1 = document.querySelector("body");
const buttonColor2 = document.getElementById("change");

buttonColor2.onclick = function(){
	//buttonColor1.style.backgroundColor = "#4285F4";
	buttonColor1.classList.toggle("blue");
}
*/