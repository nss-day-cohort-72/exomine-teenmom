import { purchaseMineral, updateFacilityMineralsLoad, clearSpaceCart, removeChecked, state } from "./TransientState.js"

export const purchaseMineralButton = () => {
    document.addEventListener(
        "click",
        handlePurchaseClick
    )
    return `<button id="purchase">Purchase Mineral</button>`
}

const handlePurchaseClick = async (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        console.log(state.facilityMineralsTarget)
        if (state.facilityMineralsTarget == undefined || !state.facilityMineralsTarget.checked) {
            window.alert('No check! please check!')
            return
        }
        await purchaseMineral()
        await removeChecked()
        await updateFacilityMineralsLoad()
        await clearSpaceCart()
        await updateColonyMinerals()
    }
}

const updateColonyMinerals = async () => {
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