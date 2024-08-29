import { marketplace } from "./marketplace.js";

const mainContainer = document.querySelector("#main-container")
const marketplaceHTML = marketplace()

const render = () => {
mainContainer.innerHTML = marketplaceHTML
}

render()