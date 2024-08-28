import { setColonyId, setGovernorId } from "./TransientState.js";

const governorsEventHandler = async (changeEvent) => {
    let target = changeEvent.target
    if (target.name === 'governor') {
        let convertedValue = parseInt(target.value)
        let selectedGovernor = target.options[target.selectedIndex]
        let colonyId = parseInt(selectedGovernor.dataset.colonyid)
        setGovernorId(convertedValue)
        setColonyId(colonyId)
        GovernorColonyHeader(colonyId)
        //Function to display change here?
    }
}

export const selectGovernor = async () => {
    const response = await fetch("http://localhost:8088/governors")
    const governors = await response.json()
    console.log(governors)
    document.addEventListener("change", governorsEventHandler)
    let selectBar = `<section>Choose a Governor: <select name='governor'>`
    let governorsMap = governors.map(governor => {
        return `
         <option data-colonyId="${governor.colonyId}"value=${governor.id}>${governor.name}</option>
        `
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

