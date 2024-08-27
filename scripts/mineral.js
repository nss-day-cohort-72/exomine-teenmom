//FACILITY MINERALS

const facilityMineralsEventHandler = async (changeEvent) => {
    let target = changeEvent.target
    if (target.name === 'mineral') {
        let mineralsInCart = document.querySelector('.minerals-in-cart')
        mineralsInCart.innerHTML = `
        1 ton of ${target.dataset.name} from ${target.dataset.facilityName}
        `
    }
    //update space cart to show "1 ton of" ${mineral} from ${facility}
}

export const FacilityMineralsRadioButtons = async (facilityId, facilityName) => {
    const response = await fetch("http://localhost:8088/facilityMinerals")
    const mineralsResponse = await fetch("http://localhost:8088/minerals")
    const facilityMinerals = await response.json()
    const singleMinerals = await mineralsResponse.json()
    console.log(facilityMinerals)
    console.log(singleMinerals)

    document.addEventListener("click", facilityMineralsEventHandler)
    let facilityMineralsElement = document.querySelector('.facility-radio-buttons')
    facilityMineralsElement.innerHTML = ``
    for (const mineral of facilityMinerals) {
        if (mineral.facilityId === parseInt(facilityId)) {
            for (const singleMineral of singleMinerals) {
                if (singleMineral.id === mineral.mineralId) {
                    console.log(singleMineral, ' SINGLE MINERAL')
                    facilityMineralsElement.innerHTML += `
                    <input name='mineral' data-name=${singleMineral.name} data-facility-name=${facilityName} type='radio'>${mineral.load} tons of ${singleMineral.name}</input><br>
                    `
                }
            }
        }
    }
}

export const FacilityMineralsHeader = (facilityName) => {
    let facilityMineralsHeadingId = document.querySelector('#facilityMineralsHeading')
    facilityMineralsHeadingId.innerHTML = `Facility Minerals for ${facilityName}`
}