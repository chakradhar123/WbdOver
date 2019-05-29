var p1button=document.querySelector('#p1');
var p2button=document.getElementById('p2');
var resetbutton=document.getElementById('reset');
var p1Display=document.querySelector('#p1Display');
var p2Display=document.querySelector('#p2Display');
var numinput=document.querySelector('input');
var winningScoreDisplay=document.querySelector('p span');
var p1score=0;
var p2score=0;
var gameover=false;
var winningscore=5;


p1button.addEventListener('click',function(){
	if(!gameover){
	p1score++;
	if(p1score===winningscore){
		p1Display.classList.add("winner");
		gameover=true;
	}
	p1Display.textContent=p1score;
}
});
p2button.addEventListener('click',function(){
	if(!gameover){
	p2score++;
	if(p2score===winningscore){
		p2Display.classList.add("winner");
		gameover=true;
	}
	p2Display.textContent=p2score;
}
});

resetbutton.addEventListener("click",function(){
	reset();
});
function reset(){
	p1score=0;
	p2score=0;
	p1Display.textContent=p1score;
	p2Display.textContent=p2score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameover=false;
}
numinput.addEventListener("change",function(){
	winningScoreDisplay.textContent=this.value;
	winningscore=Number(this.value);
	reset();
});