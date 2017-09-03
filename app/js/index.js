var activityDescription = document.getElementById("activity-description");

document.getElementById("open-task").addEventListener("click", function(){
	console.log("Cliquei");
	var tasks = document.getElementById("tasks").classList;
	var taskForm = document.getElementById("task-form").classList;
	tasks.add("open");
	taskForm.add("show");
	
});

document.getElementById("close-task").addEventListener("click", function(e){
	e.preventDefault();
	console.log("Fechando");
	var tasks = document.getElementById("tasks").classList;
	var taskForm = document.getElementById("task-form").classList;
	tasks.remove("open");
	taskForm.remove("show");
});

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
