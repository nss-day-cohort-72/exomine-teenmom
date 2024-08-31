import { marketplace } from "./marketplace.js"

const mainContainer = document.querySelector("#container")

export const render = async () => {
    mainContainer.innerHTML = await marketplace()
}

render()

// document.addEventListener("stateChanged", () => {
//     render()
// })

// document.addEventListener("stateChanged", () => {
//     window.alert('YAY')
// })