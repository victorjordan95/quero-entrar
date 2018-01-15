class HeaderView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template(model) {
        return `
        <div class="navbar">
        <ul class="navbar-menu">
            <li class="menu-item menu-icon">
                <a href="javascript:void(0);" class=" item">
                    <span class="icon-menu"></span>
                </a>
            </li>
            <li class="menu-item"><a href="#" class="item"><strong>My tasks</strong></a></li>
            <li class="menu-item"><a href="#" class="item">Inbox</a></li>
            <li class="menu-item">
                <a href="#" class="plus-circle">
                    <span class="icon-plus"></span>
                </a>
            </li>
        </ul>
        
        <div class="header-field">
            <span class="icon icon-find"></span>
            <input type="text" class="header-search" placeholder="Search">
        </div>
        
        
        <ul class="navbar-menu is-right">
            <li class="menu-item"><a href="#" class="item">Help <svg class="icon icon-down icon-middle"><use xlink:href="#icon-down"></use></svg></a></li>
            <li class="menu-item"><a href="#" class="item">Personal Projects</a></li>
            <li class="menu-item">
                <img src="assets/img/user-avatar.png" class="avatar" alt="Foto de perfil do usuário" width="30" height="30">
            </li>
        </ul>
        </div>
        <div class="header-submenu">
        <div class="submenu-title">
            <img src="assets/img/user-avatar.png" class="avatar" alt="Foto de perfil do usuário" width="25" height="25">
            <span>My personal Tasks</span>
            <span class="icon icon-down icon-middle"></span>
        </div>
        <p class="collapse-button">
            <span class="icon icon-two-up"></span>
        </p>
        </div>
    `;
    };

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}

