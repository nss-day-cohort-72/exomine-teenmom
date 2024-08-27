import { setFacilityId } from "./TransientState.js"

const facilitiesEventHandler = async (changeEvent) => {
    let target = changeEvent.target
    if (target.name === 'facility') {
        let convertedValue = parseInt(target.value)
        setFacilityId(convertedValue)
        //Function to display change here?
        //Something like displayFacilityMinerals()
    }
}

export const selectFacility = async () => {
    const response = await fetch("http://localhost:8088/facilities")
    const facilities = await response.json()
    document.addEventListener("change", facilitiesEventHandler)
    let facilitiesMap = facilities.map(factility => {
        return `
        <section class='facilities'>
            <select name='facility' value=${factility.id} /> ${factility.name}
        </section>
        `
    }).join('')
    return facilitiesMap
}

