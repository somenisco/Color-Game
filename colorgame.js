var numsquares = 6;
var colors = getColors(numsquares);
var squares = document.querySelectorAll(".square");
var win = colors[random()];
var w = document.querySelector(".win");
w.textContent = win;
var mssg = document.querySelector(".message");
var h1 = document.querySelector("h1");


for(var i = 6; i < 9; i++) {
	squares[i].style.display = "none";
}


for (var i =0; i < squares.length; i++) {
	//giving colors to the squares
	squares[i].style.backgroundColor = colors[i];
	//adding click event to the squares
	squares[i].addEventListener("click",function(){
		//getting the color
		var clickedColor = this.style.backgroundColor;
		//comparing the color with the correct color
		if(clickedColor === win) {
			//showing message of correct color
			mssg.textContent = "Correct";
			again.textContent = "Play Again!!";
			//changing the background of header to correct colour
			h1.style.backgroundColor = win;
			//changing the color of all the squares to correct color
			for (var i = 0; i < squares.length; i++) {
				squares[i].style.backgroundColor = win;
				}
		}		
		else {
			//changing the color of the wrong ones to background color
			this.style.backgroundColor = "#232323";
			//showing message at the page
			mssg.textContent = "Try Again!!";
		}
	});
}

//picking random color to win
function random() {
	var m = Math.floor(Math.random()*colors.length);
	return m;
}
// var pickedColor = colors[random()];

//getting random colors for the array
function getColors(num) {
	//create a array
	arr = [];
	//picking random color and pushing into array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor()); 
	}
	//return array
	return arr;
}

//getting random color
function randomColor() {
	//picking random number for red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//picking random number for green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//picking random number for blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	//return color string
	return "rgb("+r+", "+g+", "+b+")";
}


var again = document.querySelector(".again");

again.addEventListener("click",function(){
	//new colors to array
	colors = getColors(numsquares);
	//new random win color
	win = colors[random()];
	//display of colors
	for (var i =0; i < squares.length; i++) {
	//giving colors to the squares
	squares[i].style.backgroundColor = colors[i];
	}
	//display button
	again.textContent = "New Colors";
	//adding click event to the squares
	//reseting color of the header background
	h1.style.backgroundColor = "steelblue";
	//reseting header rgb
	w.textContent = win;
	//empty the message
	mssg.textContent = "";
});

var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");	
		if(this.textContent === "EASY") {
			numsquares = 3;
		}
		else if(this.textContent === "MEDIUM") {
			numsquares = 6;
		}
		else {
			numsquares = 9;
		}
		reset();
	});
}

function reset() {
	colors = getColors(numsquares);
	//pick a new random color from array
	win = colors[random()];
	//change colorDisplay to match picked Color
	w.textContent = win;
	again.textContent = "New Colors";
	mssg.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

again.addEventListener("click", function() {
	reset();
});