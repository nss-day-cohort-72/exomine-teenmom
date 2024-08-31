import { setMineralId, setFacilityMineralId, AllColonyMinerals, AllSingleMinerals } from "./TransientState.js"
import { setLoad, setMineralLoad, setName, setMineralTarget, setFacilityObject, state,
AllFacilityMinerals} from "./TransientState.js"

const facilityMinerals = await AllFacilityMinerals()
const singleMinerals = await AllSingleMinerals()

const facilityMineralsEventHandler = async (changeEvent) => {
    let target = changeEvent.target
    if (target.dataset.type === 'mineral') {
        setMineralId(parseInt(target.dataset.id))
        setFacilityMineralId(parseInt(target.dataset.facilitymineralid))
        setLoad(parseInt(target.dataset.load))
        setMineralLoad(parseInt(target.dataset.load))
        setName(target.dataset.name)
        setMineralTarget(target)
        setFacilityObject(target.dataset.facilityname, state.colonyId, state.mineralId)
        let facilityNameToLowerCase = target.dataset.facilityname.toLowerCase()

        let mineralInCart = document.querySelector(`.${facilityNameToLowerCase}-cart`)
        document.dispatchEvent(new CustomEvent("stateChanged"))
        mineralInCart.innerHTML = `
        1 ton of ${target.dataset.name} from ${target.dataset.facilityname}
        `
    }
}

export const FacilityMineralsRadioButtons = async (facilityName) => {
    let facilityClass = facilityName.toLowerCase()
    let facilityMineralsElement = document.querySelector(`.${facilityClass}-radio-buttons`)
    document.addEventListener("click", facilityMineralsEventHandler)
    hideAllRadioElements()
    facilityMineralsElement.classList.remove(`hide-element`)
}

export const displayGanymedeMinerals = async () => {
    let facilityMineralsArray = []
    for (const mineral of facilityMinerals) {
        if (mineral.facilityId === 1) {
            for (const singleMineral of singleMinerals) {
                if (singleMineral.id === mineral.mineralId) {
                    if (mineral.load > 0) {
                        facilityMineralsArray.push(
                            `<input class='radio' data-type='mineral' name='${mineral.facilityId}' data-mineralid='${mineral.mineralId}' data-facilityid='${mineral.facilityId}' data-load='${mineral.load}' data-facilityMineralId='${mineral.id}' data-id='${singleMineral.id}' data-name=${singleMineral.name} data-facilityname='Ganymede' type='radio' id='${singleMineral.name.toLowerCase()}-input'><div id='${singleMineral.name}'>${mineral.load} tons of ${singleMineral.name}</div><br>`
                        )
                    }
                }
            }
        }
    }
    return facilityMineralsArray.join('')
}
export const displayEnceladusMinerals = async () => {
    let facilityMineralsArray = []
    for (const mineral of facilityMinerals) {
        if (mineral.facilityId === 2) {
            for (const singleMineral of singleMinerals) {
                if (singleMineral.id === mineral.mineralId) {
                    if (mineral.load > 0) {
                        facilityMineralsArray.push(
                            `<input class='radio' data-type='mineral' name='${mineral.facilityId}' data-load='${mineral.load}' data-facilityMineralId='${mineral.id}' data-id='${singleMineral.id}' data-name=${singleMineral.name} data-facilityname='Oberon' type='radio' id='${singleMineral.name.toLowerCase()}-input'><div id='${singleMineral.name}'>${mineral.load} tons of ${singleMineral.name}</div><br>`
                        )
                    }
                }
            }
        }
    }
    return facilityMineralsArray.join('')
}
export const displayOberonMinerals = async () => {
        let facilityMineralsArray = []
    for (const mineral of facilityMinerals) {
        if (mineral.facilityId === 3) {
            for (const singleMineral of singleMinerals) {
                if (singleMineral.id === mineral.mineralId) {
                    if (mineral.load > 0) {
                        facilityMineralsArray.push(
                            `<input class='radio' data-type='mineral' name='${mineral.facilityId}' data-load='${mineral.load}' data-facilityMineralId='${mineral.id}' data-id='${singleMineral.id}' data-name=${singleMineral.name} data-facilityname='Io' type='radio' id='${singleMineral.name.toLowerCase()}-input'><div id='${singleMineral.name}'>${mineral.load} tons of ${singleMineral.name}</div><br>`
                        )
                    }
                }
            }
        }
    }
    return facilityMineralsArray.join('')
}
export const displayIoMinerals = async () => {
    let facilityMineralsArray = []
    for (const mineral of facilityMinerals) {
        if (mineral.facilityId === 4) {
            for (const singleMineral of singleMinerals) {
                if (singleMineral.id === mineral.mineralId) {
                    if (mineral.load > 0) {
                        facilityMineralsArray.push(
                            `<input class='radio' data-type='mineral' name='${mineral.facilityId}' data-load='${mineral.load}' data-facilityMineralId='${mineral.id}' data-id='${singleMineral.id}' data-name=${singleMineral.name} data-facilityname='Enceladus' type='radio' id='${singleMineral.name.toLowerCase()}-input'><div id='${singleMineral.name}'>${mineral.load} tons of ${singleMineral.name}</div><br>`
                        )
                    }
                }
            }
        }
    }
    return facilityMineralsArray.join('')
}

export const FacilityMineralsHeader = (facilityName) => {
    let facilityMineralsHeadingId = document.querySelector('#facilityMineralsHeading')
    let facilityIsSelectedText = `Facility Minerals for ${facilityName}`
    let facilityIsNotSelectedText = `(choose a facility)`
    if (!facilityName) {
        facilityMineralsHeadingId.innerHTML = facilityIsNotSelectedText
    } else {
        facilityMineralsHeadingId.innerHTML = facilityIsSelectedText

    }
}

const hideAllRadioElements = () => {
    let ganymede = document.querySelector('.ganymede-radio-buttons')
    let oberon = document.querySelector('.oberon-radio-buttons')
    let io = document.querySelector('.io-radio-buttons')
    let enceladus = document.querySelector('.enceladus-radio-buttons')
    ganymede.classList.add('hide-element')
    oberon.classList.add('hide-element')
    io.classList.add('hide-element')
    enceladus.classList.add('hide-element')
}