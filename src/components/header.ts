class Header extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/ `
            <nav class="navbar navbar-light bg-dark animate__animated animate__fadeInDown px-5" id="header" >
                <a class="navbar-brand text-light">Timothy's Restaurant</a>
                <form class="form-inline">
                    <input type="text" class="form-control mr-sm-2" name="searchBar" id="searchBar"
                        placeholder="Search" />
                </form>
            </nav>
        `;
    }
}

customElements.define("header-custom", Header)
