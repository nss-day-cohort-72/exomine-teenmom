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
    const response = await fetch("http://localhost:8088/facilities");
    const facilities = await response.json();

  
    let facilitiesDropdown = `
        <section class='facilities'>
            <select name='facility'>
                ${facilities.map(facility => `<option value='${facility.id}'>${facility.name}</option>`).join('')}
            </select>
        </section>
    `;

    document.addEventListener("change", facilitiesEventHandler);

    return facilitiesDropdown
};

