export const state = {
    "facilityId": 0,
    "governorId": 0,
    "mineralId": 0,
    "colonyId": 0,
    "load": 0,
    "facilityMineralId": 0,
    "mineralName": '',
}
export function setGovernor(governor) {
    state.governor = governor
}
export const setFacilityId = (facilityId) => {
    state.facilityId = facilityId
    console.log(state)
}
export const setGovernorId = (governorId) => {
    state.governorId = governorId
    console.log(state)
}
export const setMineralId = (mineralId) => {
    state.mineralId = mineralId
    console.log(state)
}

export const setColonyId = (colonyId) => {
    state.colonyId = colonyId
    console.log(state)
}

export const setLoad = (load) => {
    state.load = load
    console.log(state)
}
export const setMineralLoad = (load) => {
    state.load = load
    console.log(state)
}
export const setName = (mineralName) => {
    state.mineralName = mineralName
    console.log(state)
}
// export const setMineralAmount = (mineralName, mineralAmount) => {
//     state[mineralName] = mineralAmount
//     console.log(state)
// }
export const setMineralTarget = (mineralTarget) => {
    state.facilityMineralsTarget = mineralTarget
    console.log(state)
}

export const setFacilityMineralId = (facilityMineralId) => {
    state.facilityMineralId = facilityMineralId
    console.log(state)
}

export const purchaseMineral = async () => {
    let allFacilityMinerals = await AllFacilityMinerals()
    let allColonyMinerals = await AllColonyMinerals()
    let chosenFacilityMineral = allFacilityMinerals.find(mineral => mineral.id == state.facilityMineralId)

    let { facilityId, governorId, mineralId, colonyId, load, facilityMineralId, mineralName } = state
    let colonyMineralState = { facilityId, governorId, mineralId, colonyId, load, facilityMineralId, mineralName }

    for (const colonyMineral of allColonyMinerals) {
        if (colonyMineral.mineralId == colonyMineralState.mineralId && colonyMineral.colonyId == colonyMineralState.colonyId) {
            colonyMineral.load++
            const putOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(colonyMineral)
            }
            const putResponse = await fetch(`http://localhost:8088/colonyMinerals/${colonyMineral.id}`, putOptions)

            chosenFacilityMineral.load--
            const putOptions2 = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(chosenFacilityMineral)
            }
            const putResponse2 = await fetch(`http://localhost:8088/facilityMinerals/${chosenFacilityMineral.id}`, putOptions2)
            return
        }
    }
    
    colonyMineralState.load = 1
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(colonyMineralState)
    }
    const postResponse = await fetch(`http://localhost:8088/colonyMinerals/`, postOptions)

    chosenFacilityMineral.load--
    const putOptions2 = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chosenFacilityMineral)
    }
    const putResponse2 = await fetch(`http://localhost:8088/facilityMinerals/${chosenFacilityMineral.id}`, putOptions2)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

const AllFacilityMinerals = async () => {
    const response = await fetch("http://localhost:8088/facilityMinerals")
    const facilityMinerals = await response.json()
    return facilityMinerals
}
const AllColonyMinerals = async () => {
    const response = await fetch("http://localhost:8088/colonyMinerals")
    const colonyMinerals = await response.json()
    return colonyMinerals
}

export const updateFacilityMineralsLoad = async () => {
    let facilityMineralId = state.facilityMineralId
    let allFacilityMinerals = await AllFacilityMinerals()
    let selectedMineral = allFacilityMinerals.find(mineral => mineral.id == facilityMineralId)
    let facilityMineralElement = document.getElementById(state.mineralName)
    let facilityInputElement = document.getElementById(`${state.mineralName.toLowerCase()}-input`)
    if (selectedMineral.load > 0) {
        facilityMineralElement.textContent =  `${selectedMineral.load} tons of ${state.mineralName}`
    } else {
        facilityInputElement.remove()
        facilityMineralElement.remove()
    }
}
export const clearSpaceCart = async () => {
    let mineralsInCart = document.querySelector('.minerals-in-cart')
    mineralsInCart.textContent = ''
}

export const removeChecked = async () => {
    let facilityMineralId = state.facilityMineralId
    let mineralRadioButton = document.querySelector(`[data-facilitymineralid="${facilityMineralId}"]`)
    if (mineralRadioButton) {
        mineralRadioButton.checked = false
    }
}