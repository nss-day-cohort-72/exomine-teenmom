import { state } from "./TransientState.js"

export const colonyMineralsList = async () => {
    const response = await fetch("http://localhost:8088/colonyMinerals?_expand=mineral")
    const mineralsInColonies = await response.json()
    let colonyMineralsList = document.getElementById('colony-minerals-list')
    let mineralsToDisplay = []
    for (const mineral of mineralsInColonies) {
        if (mineral.colonyId == state.colonyId) {
            mineralsToDisplay.push(mineral)
            colonyMineralsList.innerHTML = `
            <section>
                    ${mineralsToDisplay.map(mineral => `<div>${mineral.load} tons of ${mineral.mineralName}</div>`).join('')}
            </section>`
        } 
        if (mineralsToDisplay.length === 0) {colonyMineralsList.innerHTML = ``}
    }
}
