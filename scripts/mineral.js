import { setMineralId, setFacilityMineralId } from "./TransientState.js"
import { setLoad, setMineralLoad, setName, setMineralTarget, setFacilityObject, state } from "./TransientState.js"

const facilityMineralsEventHandler = async (changeEvent) => {
    let target = changeEvent.target
    console.log(target)
    console.log(target.name2)
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

export const FacilityMineralsRadioButtons = async (facilityId, facilityName) => {
    const response = await fetch("http://localhost:8088/facilityMinerals")
    const mineralsResponse = await fetch("http://localhost:8088/minerals")
    const facilityMinerals = await response.json()
    const singleMinerals = await mineralsResponse.json()
    let facilityClass = facilityName.toLowerCase()
    
    document.addEventListener("click", facilityMineralsEventHandler)
    let facilityMineralsElement = document.querySelector(`.${facilityClass}-radio-buttons`)
    hideAllRadioElements()
    facilityMineralsElement.classList.remove(`hide-element`)
    // facilityMineralsElement.innerHTML = ``
}

export const displayGanymedeMinerals = async () => {
    const response = await fetch("http://localhost:8088/facilityMinerals")
    const mineralsResponse = await fetch("http://localhost:8088/minerals")
    const facilityMinerals = await response.json()
    const singleMinerals = await mineralsResponse.json()
    let facilityMineralsArray = []
    for (const mineral of facilityMinerals) {
        if (mineral.facilityId === 1) {
            for (const singleMineral of singleMinerals) {
                if (singleMineral.id === mineral.mineralId) {
                    if (mineral.load > 0) {
                        console.log(mineral)
                        facilityMineralsArray.push(
                            `<input class='radio' data-type='mineral' name='${mineral.facilityId}' data-mineralid='${mineral.mineralId}' data-facilityid='${mineral.facilityId}' data-load='${mineral.load}' data-facilityMineralId='${mineral.id}' data-id='${singleMineral.id}' data-name=${singleMineral.name} data-facilityname='Ganymede' type='radio' id='${singleMineral.name.toLowerCase()}-input'><div id='${singleMineral.name}'>${mineral.load} tons of ${singleMineral.name}</div><br>`
                        )
                    }
                }
            }
        }
    }
    // let facilityMineralsHeading = document.getElementById('facilityMineralsHeading')
    // facilityMineralsHeading.innerHTML = `Facility Minerals For Ganymede`
    return facilityMineralsArray.join('')
}
export const displayEnceladusMinerals = async () => {
    const response = await fetch("http://localhost:8088/facilityMinerals")
    const mineralsResponse = await fetch("http://localhost:8088/minerals")
    const facilityMinerals = await response.json()
    const singleMinerals = await mineralsResponse.json()
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
    const response = await fetch("http://localhost:8088/facilityMinerals")
    const mineralsResponse = await fetch("http://localhost:8088/minerals")
    const facilityMinerals = await response.json()
    const singleMinerals = await mineralsResponse.json()
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
    const response = await fetch("http://localhost:8088/facilityMinerals")
    const mineralsResponse = await fetch("http://localhost:8088/minerals")
    const facilityMinerals = await response.json()
    const singleMinerals = await mineralsResponse.json()
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