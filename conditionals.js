var age=prompt("Enter your age");
if (age<0){
	console.log("age cant be negative");
}
if (age==21){
	console.log("happy 21st birthday");
}
if (age%2!=0){
	console.log("your age is odd");
}
if (Math.sqrt(age)==Math.abs(Math.sqrt(age))){
	console.log("your age is perfect square");
}
