import { setFacility } from "./TransientState.js";
import { marketplace } from "./marketplace.js"

const mainContainer = document.querySelector("#container")

export const render = () => {
    mainContainer.innerHTML = marketplace()

}

render()
