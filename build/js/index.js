var activityTitle = document.getElementById("activity-title");
var activityDescription = document.getElementById("activity-description");
var tasks = document.getElementById("tasks").classList;
var taskForm = document.getElementById("task-form").classList;

function openTask() {
	console.log("Cliquei");
	tasks.add("open");
	taskForm.add("show");

	if(activityTitle.value == ""){
		console.log("new task");
		//activityDescription.addEventListener()
	}else{
		console.log("edit task");
	}
}

function closeTask(){
	activityDescription.blur();
	tasks.remove("open");
	taskForm.remove("show");
}

function createTask(){
	taskController.adiciona(event);
}

activityDescription.addEventListener('blur', function(){
	taskController.adiciona(event);
});

function enterPress() {
    activityDescription.onkeypress = function (e) {
        if (e.which === 13) {
            e.preventDefault();
			activityDescription.blur();
        }
    };
}
