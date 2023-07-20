class CardRow extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        let title = this.attributes.getNamedItem("title")?.value
        if (title === undefined) return
        let titleCapitalCase = title.charAt(0).toUpperCase()+ title.slice(1)
        this.innerHTML = /*html*/ `
            <div>
                <h3 class="fadeIn text-black text-center display-5 my-4">${titleCapitalCase}</h3>
                <div class="container">
                    <div id="${title}" class="row"></div>
                </div>
            </div>
        `
    }
}

customElements.define("card-row", CardRow)