import { setGovernorId } from "./TransientState.js";

const GovernorColonyHeader = async (changeEvent) => {
    
}

const governorsEventHandler = async (changeEvent) => {
    let target = changeEvent.target
    if (target.name === 'governor') {
        let convertedValue = parseInt(target.value)
        setGovernorId(convertedValue)
        GovernorColonyHeader()
        //Function to display change here?
    }
}

export const selectGovernor = async () => {
    const response = await fetch("http://localhost:8088/governors")
    const governors = await response.json()
    console.log(governors)
    document.addEventListener("change", governorsEventHandler)
    let selectBar = `<select name='governor'>`
    let governorsMap = governors.map(governor => {
        return `
         <option value=${governor.id}>${governor.name}</option>
        `
    }).join('')
    let selectClose = `</select>`
    return selectBar + governorsMap + selectClose
}
