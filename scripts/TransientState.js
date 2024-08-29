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