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
    console.log(state)
}
export const setGovernorId = (governorId) => {
    state.governorId = governorId
    console.log(state)
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
    //const existingObject = state.find(obj => obj.id === colonyMinerals.id)
    let test = 'tester'
    const colonyMineralsResponse = await fetch(`http://localhost:8088/colonyMinerals`)
    const facilityMineralsResponse = await fetch(`http://localhost:8088/facilityMinerals/`)
    const colonyMinerals = colonyMineralsResponse.json()
    const facilityMinerals = facilityMineralsResponse.json()

    //for (const colonyMineral of colonyMinerals) {
        
    //}

    if (colonyMinerals && facilityMinerals) {
        colonyMinerals.load += 1
        facilityMinerals.load -= 1
        
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state)
        }
    
        const postResponse = await fetch("http://localhost:8088/colonyMinerals", postOptions)
    }
    
    // const putOptions = {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(state)
    // }

    // if (state.load > 0) {
    //     state.load -= 1

    
    // const putResponse = await fetch("http://localhost:8088/colonyMinerals", putOptions)

    document.dispatchEvent(new CustomEvent("stateChanged"))
}
/*
        Does the chosen governor's colony already own some of this mineral?
            - If yes, what should happen?
            - If no, what should happen?

        Defining the algorithm for this method is traditionally the hardest
        task for teams during this group project. It will determine when you
        should use the method of POST, and when you should use PUT.

        Only the foolhardy try to solve this problem with code.
    */


    




