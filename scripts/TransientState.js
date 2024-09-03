export const state = {
    "facilityId": 0,
    "governorId": 0,
    "mineralId": 0,
    "colonyId": 0,
    "load": 0,
    "facilityMineralId": 0,
    "mineralName": '',
    "ganymede": {},
    "enceladus": {},
    "oberon": {},
    "io": {},
}
export function setGovernor(governor) {
    state.governor = governor
}
export const setFacilityId = (facilityId) => {
    state.facilityId = facilityId
    console.log(state, ' STATE FROM FACILITY DROPDOWN')
}
export const setGovernorId = (governorId) => {
    state.governorId = governorId
}
export const setMineralId = (mineralId) => {
    state.mineralId = mineralId
}

export const setColonyId = (colonyId) => {
    state.colonyId = colonyId
}

export const setLoad = (load) => {
    state.load = load
}
export const setMineralLoad = (load) => {
    state.load = load
}
export const setName = (mineralName) => {
    state.mineralName = mineralName
}
// export const setMineralAmount = (mineralName, mineralAmount) => {
//     state[mineralName] = mineralAmount
//     console.log(state)
// }
export const setMineralTarget = (mineralTarget) => {
    state.facilityMineralsTarget = mineralTarget
    console.log(state, ' STATE FROM RADIO BUTTON CLICK')
}

export const setFacilityMineralId = (facilityMineralId) => {
    state.facilityMineralId = facilityMineralId
}

export const setFacilityObject = (facilityName) => {
    let facilityNameToLowerCase = facilityName.toLowerCase()
    let selectedFacility = state[facilityNameToLowerCase]
    selectedFacility.colonyId = state.colonyId
    selectedFacility.mineralId = state.mineralId
    selectedFacility.facilityId = state.facilityId
    selectedFacility.load = state.load
    selectedFacility.mineralName = state.mineralName
    selectedFacility.governorId = state.governorId
    console.log(selectedFacility, ' FACILITY OBJECT')
}

export const purchaseMineral = async () => {
    let allFacilityMinerals = await AllFacilityMinerals()
    let allColonyMinerals = await AllColonyMinerals()
    let chosenFacilityMineral = allFacilityMinerals.find(mineral => mineral.id == state.facilityMineralId)

    let { facilityId, governorId, mineralId, colonyId, load, facilityMineralId, mineralName, ganymede, enceladus, oberon, io } = state
    let colonyMineralState = { facilityId, governorId, mineralId, colonyId, load, facilityMineralId, mineralName }
    let facilityArray = [ganymede, enceladus, oberon, io]

    for (const facility of facilityArray) {
        if (Object.keys(facility).length !== 0) {
            let match = allColonyMinerals.find(colonyMineral => colonyMineral.mineralId == facility.mineralId && colonyMineral.colonyId == facility.colonyId)
            if (match) {
                match.load++
                //DO PUT OPTIONS HERE
                const putOptions = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(match)
                }
                console.log('FIRST SET PUT 1')
                console.log(match.id)
                const putResponse = await fetch(`http://localhost:8088/colonyMinerals/${match.id}`, putOptions)

                chosenFacilityMineral.load--
                const putOptions2 = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(chosenFacilityMineral)
                }
                console.log('FIRST SET PUT 2')
                const putResponse2 = await fetch(`http://localhost:8088/facilityMinerals/${chosenFacilityMineral.id}`, putOptions2)   
            }
        }
    }
    for (const facility of facilityArray) {
        if (Object.keys(facility).length !== 0) {
            console.log('key length > 0')
            let matchFound = false
            for (const colonyMineral of allColonyMinerals) {
                if (facility.mineralId == colonyMineral.mineralId && facility.colonyId == colonyMineral.colonyId) {
                    matchFound = true
                    break;
                }
            }
                if (matchFound === false) {
                    facility.load = 1
                    const postOptions = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(facility)
                    }
                    console.log('SECOND SET POST 1')
                    const postResponse = await fetch(`http://localhost:8088/colonyMinerals/`, postOptions)
                
                    chosenFacilityMineral.load--
                    const putOptions2 = {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(chosenFacilityMineral)
                    }
                    console.log('SECOND SET PUT 1')
                    const putResponse2 = await fetch(`http://localhost:8088/facilityMinerals/${chosenFacilityMineral.id}`, putOptions2)
                    document.dispatchEvent(new CustomEvent("stateChanged"))
                }
            }
        }
        state.ganymede = {}
        state.enceladus = {}
        state.oberon = {}
        state.io = {}
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
    let mineralsInCart = document.querySelectorAll('.minerals-in-cart')
    mineralsInCart.forEach(element => element.textContent = '')
}

export const removeChecked = async () => {
    let allRadioButtonElements = document.querySelectorAll('.radio')
    allRadioButtonElements.forEach(button => button.checked = false)
    // let facilityMineralId = state.facilityMineralId
    // let mineralRadioButton = document.querySelector(`[data-facilitymineralid="${facilityMineralId}"]`)
    // if (mineralRadioButton) {
    //     mineralRadioButton.checked = false
    // }
}