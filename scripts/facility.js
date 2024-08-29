import { createMineralRadioButtons } from "./mineral.js"

const facilityResponse = await fetch("http://localhost:8088/facilities")
const facilities = await facilityResponse.json()

const facilityEventHandler = () => {
    createMineralRadioButtons()

}

export const createFacilitiesDropdown = () => {
    const html = `<label for='facilities'>Choose a facility:</label>
    <select name='facilities'><option value="">Select a facility...</option>`
    let optionCounter = 1

    const facilityOptionElements = facilities.map(facility => {
        return `<option data-type="facility" data-id="${facility.id}" value="${optionCounter++}">${facility.name}</option>`
    })
    
    const facilityOptionsHTML = facilityOptionElements.join("")
    const completeFacilityDropdownHTML = html + facilityOptionsHTML + `</select>`
    return completeFacilityDropdownHTML
}

document.addEventListener(
    "change", (event) => {
        const selectedOption = event.target.selectedOptions[0]
        if (selectedOption.dataset.type === "facility") {
            // window.alert("THIS LISTENER IS WORKING")
            facilityEventHandler()
        }
    }
)


