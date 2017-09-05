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

        var itemLista = this._listaTasks.tasks[n];
        console.log(itemLista);
        
        //openTask();

        var identificador =  this._listaTasks.tasks[n].id;
        console.log("me identifica" + identificador);

        this._inputTitle.value = this._listaTasks.tasks[n].title;
        this._inputDescription.value = this._listaTasks.tasks[n].description;
        
        var listaTarefas = document.getElementsByClassName("activity-text");
        
        //console.log(listaTarefas[identificador - 1]);

        listaTarefas[identificador - 1].innerHTML = "NEW TASK"; 
        listaTarefas._inputTitle = "teste";

        console.log(itemLista);
        //var activityTitle = document.getElementById("activity-title");
//        var activityDescription = document.getElementById("activity-description");
        
  //      console.log(activityTitle.value);

    //        console.log("vou editar: " + listaTarefas[identificador]);

        
        //listaTarefas[identificador].innerHTML = 'teste';
        //this._taskView.update(this._listaTasks);
    }

    _limpaFormulario() {
        this._inputTitle.value = '';
        this._inputDescription.value = '';
        this._inputTitle.focus();
    };

};