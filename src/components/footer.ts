class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/ `
            <nav class="text-light bg-dark position-fixed w-100 bottom-0 left-0 customFooter">
                <div class="container text-center color-white">
                    <small>&copy; Ignatius Timothy Manullang</small>
                </div>
            </nav>
        `
    }
}

customElements.define("footer-custom", Footer)
