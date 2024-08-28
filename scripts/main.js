import { setFacilityId } from "./TransientState.js";
import { marketplace } from "./marketplace.js"

const mainContainer = document.querySelector("#container")

export const render = async () => {
    mainContainer.innerHTML = await marketplace()
}
const AllFacilities = async () => {
    const response = await fetch("http://localhost:8088/facilities")
    const facilities = await response.json()
    return facilities
}
const AllMinerals = async () => {
    const response = await fetch("http://localhost:8088/minerals")
    const minerals = await response.json()
    return minerals
}
const AllGovernors = async () => {
    const response = await fetch("http://localhost:8088/governors")
    const governors = await response.json()
    return governors
}
const AllColonies = async () => {
    const response = await fetch("http://localhost:8088/colonies")
    const colonies = await response.json()
    return colonies
}
render()

document.addEventListener("stateChanged", () => {
    render()
})