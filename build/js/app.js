var activityTitle = document.getElementById("activity-title");

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

activityTitle.addEventListener('focusin', function(){
	verifyEmpty(activityTitle.value);
});

activityTitle.addEventListener('focusout', function(){
	//getTitleText();
});

function createTask() {
	activityTitle.addEventListener("focusout", function(){
		constructView();
	});
    activityTitle.onkeypress = function (e) {
        if (e.which === 13) {
            e.preventDefault();
            constructView();
			activityTitle.blur();
        }
    };
}

function updateView(element){
	
//	document.querySelectorAll('[value="element.value"]');
	console.log("Recebendo no update View");
	console.log(element);
}

function verifyEmpty(input) {
	if(input === ""){
		console.log(input + " é vazio");
		createTask();
	} else {
		console.log(input + " é preenchido");
		updateView();
	}
}


var listActivities = document.getElementById("list-activities");
function constructView(){
	var title = activityTitle.value;

	var divActivity = document.createElement('div');
	divActivity.classList.add('activity');

	var divActivityBody = document.createElement('div');
	divActivityBody.classList.add('activity-body');

	var spanIconCheck = document.createElement('span');
	spanIconCheck.classList.add("icon", "icon-check", "icon-middle");

	var spanActivityCheck = document.createElement('span');
	spanActivityCheck.classList.add("activity-text");

	var spanIconCircle = document.createElement('span');
	spanIconCircle.classList.add("icon", "icon-circle", "right", "icon-middle");

	spanActivityCheck.textContent = title;

	divActivityBody.appendChild(spanIconCheck);
	divActivityBody.appendChild(spanActivityCheck);
	divActivityBody.appendChild(spanIconCircle);

	divActivity.appendChild(divActivityBody);

	listActivities.appendChild(divActivity);

}
