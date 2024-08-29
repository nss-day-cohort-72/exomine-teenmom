import { marketplace } from "./marketplace.js";

const mainContainer = document.querySelector("#main-container")

const render = async () => {
mainContainer.innerHTML = await marketplace()
}

render()