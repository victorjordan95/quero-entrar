class TaskController {

    constructor(){
        
        let $ = document.querySelector.bind(document);

        this._inputId = $("#activity-id");
        this._inputTitle = $("#activity-title");
	      this._inputDescription = $("#activity-description");
        this._listaTasks = new ListTasks();
        this._taskView = new TasksView($('#tasksView'));
        
        this.addDefault();
        this._taskView.update(this._listaTasks);

    }

    addDefault(){
        this._listaTasks.adiciona(this._criaTask(
            this._inputId.value = 1,
            this._inputTitle.value = "Work it harder",
            this._inputDescription.value = "Some description"
        ));
        this._listaTasks.adiciona(this._criaTask(
            this._inputId.value = 2,
            this._inputTitle.value = "Make it better",
            this._inputDescription.value = "Some description"
        ));
        this._taskView.update(this._listaTasks);
        this._limpaFormulario();
    };

    adiciona(event) {
        event.preventDefault();
        this._inputId.value = this._listaTasks.tasks.length + 1; 
        this._listaTasks.adiciona(this._criaTask());
        this._taskView.update(this._listaTasks);
        this._limpaFormulario();

        console.log(this._listaTasks.tasks);

    };

    _criaTask(){
        return new Task(
            this._inputId.value,
            this._inputTitle.value,
            this._inputDescription.value
        );
    };
  
    edt(n) {
      console.log(this._listaTasks.tasks[n]);
      this._inputTitle.value = this._listaTasks.tasks[n].title;
      this._inputDescription.value = this._listaTasks.tasks[n].description;

    }

    _limpaFormulario() {
        this._inputTitle.value = '';
        this._inputDescription.value = '';

        this._inputTitle.focus();

    };

};