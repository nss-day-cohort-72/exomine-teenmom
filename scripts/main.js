import { setFacilityId } from "./TransientState.js";
import { marketplace } from "./marketplace.js"

const mainContainer = document.querySelector("#container")

export const render = async () => {
    mainContainer.innerHTML = await marketplace()
}

render()
