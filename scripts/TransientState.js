export const state = {
    "facilityId": 0,
    "governorId": 0,
    "mineralId": 0,
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


export const purchaseMineral = () => {
    /*
        Does the chosen governor's colony already own some of this mineral?
            - If yes, what should happen?
            - If no, what should happen?

        Defining the algorithm for this method is traditionally the hardest
        task for teams during this group project. It will determine when you
        should use the method of POST, and when you should use PUT.

        Only the foolhardy try to solve this problem with code.
    */
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
