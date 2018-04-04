var colorDisplay = document.querySelector("span");
var messageDisplay = document.querySelector(".message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".newColor");
var squares = document.querySelectorAll(".square");
var easyGame = document.querySelector(".easyMode");
var hardGame = document.querySelector(".hardMode");
var numSquares = 6;

var colors = generateColor(numSquares);
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
	colors = generateColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	
	for(var i=0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		h1.style.background = "steelblue";
		messageDisplay.textContent ="";
		resetButton.textContent ="New Colors";

	}
});

easyGame.addEventListener("click", function(){
	easyGame.classList.add("selected");
	hardGame.classList.remove("selected");
	numSquares = 3;
	colors = generateColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";

	for(var i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];	
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardGame.addEventListener("click", function(){
	easyGame.classList.remove("selected");
	hardGame.classList.add("selected");
	numSquares = 6;
	colors = generateColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";

	for(var i=0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

for(var i=0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){
		if(this.style.background === pickedColor){
			messageDisplay.textContent = "Correct"
			changeColor(pickedColor);
			h1.style.background = pickedColor;
			resetButton.textContent = "Try Again ?";
		}else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color){
	for (var i=0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function generateColor(num){
	var arr =[];
	randomColor(num);
	for (var i = 0; i< num; i++){
		arr[i] = randomColor(num);
	}
	return arr;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
};