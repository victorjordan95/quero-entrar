class TaskController {

    constructor(){
        
        let $ = document.querySelector.bind(document);

        this._inputTitle = $("#activity-title");
	      this._inputDescription = $("#activity-description");
        this._listaTasks = new ListTasks();
        this._taskView = new TasksView($('#tasksView'));
        
        this.addDefault();
        this._taskView.update(this._listaTasks);

    }

    addDefault(){
        this._listaTasks.adiciona(this._criaTask(
            this._inputTitle.value = "Work it harder",
            this._inputDescription.value = "Some description"
        ));
        this._listaTasks.adiciona(this._criaTask(
            this._inputTitle.value = "Make it better",
            this._inputDescription.value = "Some description"
        ));
        this._taskView.update(this._listaTasks);
        this._limpaFormulario();
    };

    adiciona(event) {
        event.preventDefault();
        this._listaTasks.adiciona(this._criaTask());
        this._taskView.update(this._listaTasks);
        this._limpaFormulario();

        console.log(this._listaTasks.tasks);

    };

    _criaTask(){
        return new Task(
            this._inputTitle.value,
            this._inputDescription.value
        );
    };
  
    

    _limpaFormulario() {
        this._inputTitle.value = '';
        this._inputDescription.value = '';

        this._inputTitle.focus();

    };

};