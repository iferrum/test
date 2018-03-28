var taskList = document.getElementById("MyTasks");
var addButton = document.getElementById("addBtn");
var removeAll = document.getElementById("remAll");

addButton.onclick = function(){
	addTask(taskList);
}

function addTask(target){
	var inputText = document.getElementById("tasks").value;
	var listItem = document.createElement("li");
	var node = document.createTextNode(inputText + " ");
	var removeBtn = document.createElement("button");
	document.getElementById("tasks").value = "";

	removeBtn.className = 'removeMe';
	removeBtn.innerHTML = 'XX';
	removeBtn.setAttribute('onclick','remove(this);');

	listItem.className = 'listClass';
	listItem.appendChild(node);
	listItem.appendChild(removeBtn);

	target.appendChild(listItem);

	
}

function remove(item){
	var parent = item.parentElement;
	parent.parentElement.removeChild(parent);
}

removeAll.onclick = function(){
	taskList.innerHTML = '';
}