class TaskForm {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template(model) {
        return `
    <div class="actions row">

    <div class="user">
        <img src="assets/img/user-avatar.png" class="avatar" alt="Foto de perfil do usuário" width="30" height="30">
        <span class="user-name">Victor Jordan</span>
        <span class="icon-circle icon-middle"></span>
    </div>
    
    <div class="button-options">
        <button class="btn btn-calendar"><span class="icon icon-calendar"></span></button>
        <span class="calendar-span">Due Date</span>
        <button class="btn"><span class="icon icon-favorite"></span></button>
        <button class="btn"><span class="icon icon-opt"></span></button>
        <button class="btn"><span class="icon icon-attachment"></span></button>
        <button class="btn"><span class="icon icon-more"></span></button>
    </div>
    <button id="close-task" class="is-right btn btn-close" onclick="taskController.closeTask()"><span class="icon icon-close"></span></button>
    </div>
    
    <form class="form-activity">
    <div class="activity">
        <span class="icon icon-check"></span>
        
        <input type="hidden" id="activity-id" >
        <input type="text" id="activity-title" onkeydown="taskController.closeEsc(event);" class="activity-title" placeholder="New Task">
    
        <textarea id="activity-description" class="activity-description" rows="4" cols="50" 
            placeholder="Description" 
            onblur="taskController.adiciona(event)"
            onkeypress="taskController.blurDescription(event);">
        </textarea>
    </div>
    </form>
    
    <div class="comment">
    <img src="assets/img/user-avatar.png" class="avatar" alt="Foto de perfil do usuário" width="30" height="30">
    <textarea class="comment-input" rows="4" cols="50" placeholder="Write a comment..."></textarea>
    </div>        
    `;
    };

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}

