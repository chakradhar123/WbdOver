var todos=[];
var input=prompt("what whould you like to do?");

while(input!=="quit"){
	if(input==="list"){
		listtodos();
}
	else if(input==="new"){
		newtodo();

}
	else if(input==="delete"){
		deletetodo();
	}
var input=prompt("what whould you like to do?");
}
console.log("OK'You quit the app");
function listtodos(){
	console.log("**************");
		todos.forEach(function(todo,index){
			
			console.log(index+": "+todo);
		});
		console.log("**************");
}
function newtodo(){
	var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
		console.log("added todo");
}
function deletetodo(){
var index=prompt("Enter index of todo to delete");
		todos.splice(index,1);
		console.log("deleted todo");
}