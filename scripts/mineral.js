import { setMineralId, setFacilityMineralId } from "./TransientState.js"
import { setLoad } from "./TransientState.js"

const facilityMineralsEventHandler = async (changeEvent) => {
    let target = changeEvent.target
    if (target.name === 'mineral') {
        setMineralId(parseInt(target.dataset.id))
        setFacilityMineralId(parseInt(target.dataset.facilitymineralid))
        setLoad(parseInt(target.dataset.load))
        let mineralsInCart = document.querySelector('.minerals-in-cart')
        document.dispatchEvent(new CustomEvent("stateChanged"))

        mineralsInCart.innerHTML = `
        1 ton of ${target.dataset.name} from ${target.dataset.facilityName}
        `
    }
}

export const FacilityMineralsRadioButtons = async (facilityId, facilityName) => {
    console.log('RADIO BUTTONS GENERATED')
    const response = await fetch("http://localhost:8088/facilityMinerals")
    const mineralsResponse = await fetch("http://localhost:8088/minerals")
    const facilityMinerals = await response.json()
    const singleMinerals = await mineralsResponse.json()


    document.addEventListener("click", facilityMineralsEventHandler)
    let facilityMineralsElement = document.querySelector('.facility-radio-buttons')
    facilityMineralsElement.innerHTML = ``
    for (const mineral of facilityMinerals) {
        if (mineral.facilityId === parseInt(facilityId)) {
            for (const singleMineral of singleMinerals) {
                if (singleMineral.id === mineral.mineralId) {
                    // console.log(singleMineral, ' SINGLE MINERAL')
                    facilityMineralsElement.innerHTML += `
                    <input name='mineral' data-load='${mineral.load}' data-facilityMineralId='${mineral.id}' data-id='${singleMineral.id}' data-name=${singleMineral.name} data-facility-name=${facilityName} type='radio'>${mineral.load} tons of ${singleMineral.name}</input><br>
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