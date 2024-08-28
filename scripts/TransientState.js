export const state = {
    "facilityId": 0,
    "governorId": 0,
    "mineralId": 0,
    "colonyId": 0,
    "load": 0,
    "colonyId": 0,
    "facilityMineralId": 0
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

export const setFacilityMineralId = (facilityMineralId) => {
    state.facilityMineralId = facilityMineralId
    console.log(state)
}



export const purchaseMineral = async () => {
    let allFacilityMinerals = await AllFacilityMinerals()
    let allColonyMinerals = await AllColonyMinerals()
    let chosenFacilityMineral = allFacilityMinerals.find(mineral => mineral.id == state.facilityMineralId)

    for (const colonyMineral of allColonyMinerals) {
        if (colonyMineral.mineralId == state.mineralId && colonyMineral.colonyId == state.colonyId) {
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
    
    state.load = 1
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(state)
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
    const putResponse = await fetch(`http://localhost:8088/facilityMinerals/${chosenFacilityMineral.id}`, putOptions2)
    document.dispatchEvent(new CustomEvent("stateChanged"))
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
