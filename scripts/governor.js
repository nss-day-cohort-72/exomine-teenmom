const govResponse = await fetch("http://localhost:8088/governors")
const governors = await govResponse.json()

export const createGovernorDropdown = () => {
    const html = `<label for='governors'>Choose a governor:</label>
    <select name='governors'><option value="">Select a governor...</option>`
    let optionCounter = 1
    
    const governorOptionsElements = governors.map(governor => {
        return `<option data-id="${governor.id}" data-type="governor" value="${optionCounter++}">${governor.name}</option>`
    })
    const governorOptionsHTML = governorOptionsElements.join("")
    const governorCompleteDropdownHTML = html + governorOptionsHTML + "</select>"
    return governorCompleteDropdownHTML
}

document.addEventListener(
    "change", (event) => {
        const selectedOption = event.target.selectedOptions[0]
        if (selectedOption.dataset.type === "governor") {
            window.alert("THIS LISTENER IS WORKING")
        }
    }
)