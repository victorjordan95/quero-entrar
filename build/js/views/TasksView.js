class TasksView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template(model) {
        return `
            
            ${model.tasks.map(n => {
                return `
                    <div class="activities" onclick="${n.funcao}" style="border: 1px solid red">
                        <div class="activity">
                            <div class="activity-body">
                                <span class="icon icon-check icon-middle"></span>
                                <span class="activity-text">${n.title}</span>
                                <span class="icon icon-circle right icon-middle"></span>
                            </div>
                        </div>
                    </div>
                `
            }).join('')}
        `;
    };

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}

                