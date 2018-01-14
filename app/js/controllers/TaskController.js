class TaskController {

    constructor(){
        
        let $ = document.querySelector.bind(document);

        this._listaTasks = new ListTasks();
        
        this._header = new HeaderView($('#header'));
        this._header.update(this._header);

        this._taskView = new TasksView($('#tasksView'));
        this._taskView.update(this._listaTasks);
        
        this._taskForm = new TaskForm($('#taskForm'));
        this._taskForm.update(this._taskForm);

        this._inputId = $("#activity-id");
        this._inputTitle = $("#activity-title");
	    this._inputDescription = $("#activity-description");
        this._tasks = $("#tasks");
        this._taskForm = $("#taskForm");
        
        this._addDefault();
    }

    _addDefault(){
        this._listaTasks.adiciona(this._criaTask(
            "1",
            "Work it harder",
            "Some description"
        ));
        this._listaTasks.adiciona(this._criaTask(
            "2",
            "Make it better",
            "Some description"
        ));
        this._taskView.update(this._listaTasks);
        this._limpaFormulario();
    };

    adiciona(event) {
        event.preventDefault();
     
        if(!this._inputId.value && (this._inputTitle.value !== "" || this._inputDescription.value !== "")){
          this._inputId.value = this._listaTasks.tasks.length + 1;
          this._listaTasks.adiciona(this._criaTask(this._inputId.value, this._inputTitle.value, this._inputDescription.value));
     
        } else if ( this._inputTitle.value === ""){
            this._inputTitle.focus();
     
        } else {
          this._listaTasks.tasks.splice(this._inputId.value - 1, 1, this._criaTask(this._inputId.value, this._inputTitle.value, this._inputDescription.value));
        }

        this._taskView.update(this._listaTasks);
        this._limpaFormulario();
    };

    _criaTask(id, title, desc){
        return new Task(
            id,
            title,
            desc
        );
    };

    _openTask() {
        this._tasks.classList.add("is-open");
        this._taskForm.classList.add("is-visible");
    }
  
    edt(n) {
        let clickedTask = document.querySelectorAll('.icon-right');
        clickedTask[n].classList.add('is-visible');
        let task = this._listaTasks.tasks[n];
        this._inputId.value = task.id;
        this._inputTitle.value = task.title;
        this._inputDescription.value = task.description;
                
        this._openTask();
    };

    _limpaFormulario() {
        
        this._inputId.value = null;
        this._inputTitle.value = null;
        this._inputDescription.value = null;
        var clickedTask = document.querySelectorAll('.icon-right');
        
        this._removeClickedIcon();
        this._inputTitle.focus();
    };

    _removeClickedIcon(){
        let clickedTask = document.querySelectorAll('.icon-right');
        
        clickedTask.forEach(element => {
            element.classList.remove('is-visible');
        });
    };

    newTask() {
        this._tasks.classList.add("is-open");
        this._taskForm.classList.add("is-visible");
        taskController._limpaFormulario();
    };

    blurDescription(event){
        if(event.which === 13){
            this.adiciona(event);
        }
    };

    closeTask() {
        this._inputDescription.blur();
        this._tasks.classList.remove("is-open");
        this._taskForm.classList.remove("is-visible");
        this._removeClickedIcon();
    };

    closeEsc(event){
        event = event || window.event;
        if (event.keyCode == 27) {
            this._tasks.classList.remove("is-open");
            this._taskForm.classList.remove("is-visible");
            this._removeClickedIcon();
        }
    }
  

};