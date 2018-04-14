var taskList = document.getElementById("MyTasks");
var addButton = document.getElementById("addBtn");
var removeAll = document.getElementById("remAll");
var lists = [];


addButton.onclick = function(){
	addTask(taskList);
}

function addTask(target){
	var inputText = document.getElementById("tasks").value;
	var listItem = document.createElement("li");
	var node = document.createTextNode(inputText + " ");
	var removeBtn = document.createElement('span');
    var checkbox = document.createElement('input');
    
	document.getElementById("tasks").value = "";
    
      //disallows empty input
    if( inputText.length === 0){
        alert("Please enter a task to-do");
        return false;
    }
    
    checkbox.className = 'taskCheckBox';
    checkbox.type = 'checkbox';
    
    
	removeBtn.className = 'removeMe';
	removeBtn.textContent = 'x';
	removeBtn.setAttribute('onclick','remove(this)');
    
    

	listItem.className = 'listClass';
    listItem.appendChild(checkbox);
    listItem.appendChild(node);
	listItem.appendChild(removeBtn);
    listItem.draggable = "true";
    
    
    listItem.setAttribute('ondragstart','dragStarted(event)');
    listItem.setAttribute('ondragover', 'draggingOver(event)');
    listItem.setAttribute('ondrop','dropped(event)');
    
    target.appendChild(listItem);
    lists.push(inputText);
}


//this adds a task when you hit enter 
//key code for enter is 13 
document.querySelector('#tasks').addEventListener('keypress', function(e){
    var key = e.which || e.keycode;
    if((key == 13) && (document.querySelector('#tasks').value.length > 0))
        addTask(taskList);
    else if(key == 13)
        alert("Please enter a task to-do");
    
        
})


function remove(item){
	var parent = item.parentElement;
	parent.parentElement.removeChild(parent);
}

removeAll.onclick = function(){
	taskList.innerHTML = '';
}


var source;

function dragStarted(evt){
    //start drag
    source=evt.target;
    //set data
    evt.dataTransfer.setData("text/plain", evt.target.innerHTML);
    //specify allowed transfer
    evt.dataTransfer.effectAllowed = "move";
}

function draggingOver(evt){
    //drag over
    evt.preventDefault();
    //specify operation
    evt.dataTransfer.dropEffect = "move";
    
}
function dropped(evt){
    //drop
    evt.preventDefault();
    evt.stopPropagation();
    //update text in dragged item
    source.innerHTML = evt.target.innerHTML;
    //update text in drop target
    evt.target.innerHTML = evt.dataTransfer.getData("text/plain");
    
}
