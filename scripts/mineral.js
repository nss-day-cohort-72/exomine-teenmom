

export const createMineralRadioButtons = async () => {
    const facilityRadioButtonsElement = document.querySelector("#facility-mineral-buttons")

    const mineralsResponse = await fetch("http://localhost:8088/minerals")
    const minerals = await mineralsResponse.json()

    let optionCounter = 1

    const mineralRadioButtonElements = minerals.map(mineral => {
        return `<input type="radio" id="option${optionCounter++}" name="mineral-option">
                <label for="option${optionCounter++}">${mineral.name}</label><br>`
    })

    const mineralRadioButtonHTML = mineralRadioButtonElements.join('')
    const completeMineralRadioButtons = mineralRadioButtonHTML
    facilityRadioButtonsElement.innerHTML = completeMineralRadioButtons
}