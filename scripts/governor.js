import { setGovernorId } from "./TransientState.js";

const governorsEventHandler = async (changeEvent) => {
    let target = changeEvent.target
    if (target.name === 'governor') {
        let convertedValue = parseInt(target.value)
        setGovernorId(convertedValue)
        //Function to display change here?
    }
}

export const selectGovernor = async () => {
    const response = await fetch("http://localhost:8088/governors")
    const governors = await response.json()
    document.addEventListener("change", governorsEventHandler)
    let governorsMap = governors.map(governor => {
        return `
        <section class='governors'>
            <select name='governor' value=${governor.id} /> ${governor.name}
        </section>
        `
    }).join('')
    return governorsMap
}
