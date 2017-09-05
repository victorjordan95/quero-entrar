var activityTitle = document.getElementById("activity-title");
var activityDescription = document.getElementById("activity-description");
var tasks = document.getElementById("tasks").classList;
var taskForm = document.getElementById("task-form").classList;


function newTask() {
  openTask();
  taskController._limpaFormulario();
}
function openTask() {
	console.log("Cliquei");
	tasks.add("open");
	taskForm.add("show");
}

function closeTask(){
	activityDescription.blur();
	tasks.remove("open");
	taskForm.remove("show");
}

activityDescription.addEventListener('blur', function(){
	taskController.adiciona(event);
});

activityDescription.onkeypress = function (e) {
	if (e.which === 13) {
		e.preventDefault();
		activityDescription.blur();
	}
};

activityTitle.onkeypress = function (e) {
	if (e.which === 13) {
		e.preventDefault();
		activityDescription.focus();
	}
};

