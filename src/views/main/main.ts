import axios from "axios";

const main = () => {
    let items = []
    const searchBar = document.getElementById("searchBar");

    if (searchBar === null) return;

    searchBar.addEventListener("keyup", (e: Event) => {
        const inputElement = e.target as HTMLInputElement;
        const filterString = inputElement?.value.toLowerCase();
        const lowerCaseFilterString = filterString.toLowerCase()
        for (const [type, _] of Object.entries(items)) {
            const filteredItemsOfType = items[type].filter((item) => {
                return (
                    item.name.toLowerCase().includes(lowerCaseFilterString) || item.description.toLowerCase().includes(lowerCaseFilterString) || item.price.toString().includes(filterString)
                )
            })
            const filteredItems = {}
            filteredItems[type] = filteredItemsOfType
            displayItemsOfType(filteredItems, type)
        }
    })

    const loadItems = async () => {
        try {
            const response = await axios.get(
                "https://my-json-server.typicode.com/Pyroblazer/jsonServer/menu"
            );
            items = response.data;
            console.log("items", items);
            displayItems(items);
        } catch (err) {
            console.error(err);
        }
    };

    const displayItems = (items) => {
        console.log(items)
        for (const [type, _] of Object.entries(items)) {
            displayItemsOfType(items, type)
        }
    }

    const displayItemsOfType = (items, type) => {
        const htmlString = items[type]
            .map((item) => {
                let itemJsonString = JSON.stringify(item)
                return `<card-item class="col-xl-4 col-md-5 mb-4" item='${itemJsonString}'></card-item>`
            })
            .join('');
        let component = document.getElementById(type);
        if (component) component.innerHTML = htmlString;
    }

    loadItems();
};

export default main
