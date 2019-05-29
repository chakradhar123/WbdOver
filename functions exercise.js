function isEven(x){
	if(x%2==0){
		return true;
	}
	else{
		return false;
	}
}
function factorial(x){
	if(x==0){
		return 1;
	}
	else{
		return x*factorial(x-1);
	}
}
function kebebToSnake(str){
	return str.replace(/-/g,"_");
}