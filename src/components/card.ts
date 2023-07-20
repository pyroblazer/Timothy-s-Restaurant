class Card extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        let item = this.attributes.getNamedItem("item")?.value
        if (item === undefined) return
        let itemJson = JSON.parse(item)
        this.innerHTML = /*html*/ `
            <div class="card border-2 shadow h-100">
                <div class="card-body d-flex flex-column text-center">
                    <img src=${itemJson.imgurl} class="cardImg card-img-top w-100 object-fit-cover object-position" alt='${itemJson.name.toLowerCase()}-img'} />
                    <div class="text-center mt-4">
                        <h5 class="card-title">${itemJson.name}</h5>
                        <div class="bs-gray-dark">${itemJson.description}</div>
                    </div>
                    <div class="mt-auto text-black fw-bold">${itemJson.price}</div>
                </div>
            </div>
        `
    }
}

customElements.define("card-item", Card)