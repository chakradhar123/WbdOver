var numSquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll('.square');
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();
function init(){
	//mode buttons event listeners
	setUpModeButtons();
	//main logic
	setUpSquares();
	//first thing on page load
	reset();
}

function reset(){
	//generate all new colors
	colors=generateRandomColors(numSquares);
	//pick a new random color from the array
	pickedColor=pickColor();
	//change color display to match picked colors
	colorDisplay.textContent=pickedColor;
	//change colors of squares
	for(var i=0;i<squares.length;i++){
	//add initial colors to squares
	if(colors[i]){
		squares[i].style.display="block";
		squares[i].style.backgroundColor=colors[i];
	}
	else{
		squares[i].style.display="none";
	}
	

	
}
resetButton.textContent="New Colors";
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
}

resetButton.addEventListener("click",function(){
	reset();

});





function changeColors(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++){
	//change each color to match given color
	squares[i].style.backgroundColor=color;

	}
}
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//make an array
	var arr=[];
	//repeat num times
	for(var i=0;i<num;i++){
	//get random color and push it into arr
		arr.push(randomColor());
	}
	//return the array
	return arr;
}

function randomColor(){
	//random 'red'
	var r=Math.floor(Math.random()*256);
	//random 'green'
	var g=Math.floor(Math.random()*256);
	//random 'blue'	
	var b=Math.floor(Math.random()*256);


	return "rgb("+r+", "+g+", "+b+")";
}
function setUpModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
			modeButtons[i].addEventListener('click',function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			numSquares=(this.textContent==="Easy") ? 3 : 6;
		
		reset();
	});}
}
function setUpSquares(){
	for(var i=0;i<squares.length;i++){
	//add click listeners to squares
		squares[i].addEventListener("click",function(){
		//grab color of clicked square
			var clickedColor=this.style.backgroundColor;
		//compare color to clicked color
			if(pickedColor===clickedColor){
				messageDisplay.textContent="Correct";
				changeColors(clickedColor);
				resetButton.textContent="Play Again!"
				h1.style.backgroundColor=clickedColor;
			}
			else{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again";
			}
		});
	}
}