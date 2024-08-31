import { setFacilityId } from "./TransientState.js"
import { FacilityMineralsHeader, FacilityMineralsRadioButtons } from "./mineral.js"

const facilitiesEventHandler = async (changeEvent) => {
    let target = changeEvent.target
    if (target.name === 'facility') {
        let convertedValue = parseInt(target.value)
        let selectedFacility = target.options[target.selectedIndex]
        let facilityName = selectedFacility.getAttribute('name')
        setFacilityId(convertedValue)
        FacilityMineralsHeader(facilityName)
        FacilityMineralsRadioButtons(facilityName)
    }
}

export const selectFacility = async () => {
    const response = await fetch("http://localhost:8088/facilities");
    const facilities = await response.json();
    const facilityElement = document.querySelector('.facility')

    if (facilityElement.innerHTML.length == 0) {
    let facilitiesDropdown = `
         <section class='facilities'>
            Choose a facility: <select name='facility'>
            <option>Choose a facility</option>
                ${facilities.map(facility => {
                    if (facility.isActive) {
                    return `<option name='${facility.name}' value='${facility.id}'>${facility.name}</option>`
                    }
                }).join('')}
            </select>
        </section>
    `;
    document.addEventListener("change", facilitiesEventHandler);
    facilityElement.innerHTML = facilitiesDropdown
    }
};


