import { setColonyId, setGovernorId, setGovernor } from "./TransientState.js";
import { colonyMineralsList } from "./colony.js";
import { selectFacility } from "./facility.js";



const governorsEventHandler = async (changeEvent) => {
    let target = changeEvent.target
    if (target.name === 'governor') {
        let convertedValue = parseInt(target.value)
        let selectedGovernor = target.options[target.selectedIndex]
        let colonyId = parseInt(selectedGovernor.dataset.colonyid)
        setGovernor(target)
        setGovernorId(convertedValue)
        setColonyId(colonyId)
        GovernorColonyHeader(colonyId)
        colonyMineralsList(selectedGovernor.value)
        selectFacility()
    }
}

export const selectGovernor = async () => {
    const response = await fetch("http://localhost:8088/governors")
    const governors = await response.json()
    document.addEventListener("change", governorsEventHandler)
    let selectBar = `<section>Choose a governor: <select name='governor'> <option>Choose a governor</option>`
    let governorsMap = governors.map(governor => {
        if (governor.isActive) {
        return `
         <option data-colonyId="${governor.colonyId}"value=${governor.id}>${governor.name}</option>
        `
        }
    }).join('')
    
    let selectClose = `</select></section>`
    return selectBar + governorsMap + selectClose
}

export const GovernorColonyHeader = async (colonyId) => {

    const response = await fetch("http://localhost:8088/colonies")
    const colonies = await response.json()

    let governorColonyHeadingId = document.querySelector('#governorColonyHeading')

    for (const colony of colonies) {
        if (colony.id === colonyId) {
        governorColonyHeadingId.innerHTML = `${colony.name} Minerals`
        }
    }
}
