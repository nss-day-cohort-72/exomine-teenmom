import { selectGovernor } from "./governor.js"
import { selectFacility } from "./facility.js"
import { purchaseMineralButton } from "./purchaseMineral.js"
import { colonyMineralsList } from "./colony.js"
import { displayGanymedeMinerals, displayEnceladusMinerals, displayOberonMinerals, displayIoMinerals } from "./mineral.js"

export const marketplace = async () => {
    const chooseGovernor = await selectGovernor()
    // const chooseFacility = await selectFacility()
    const purchaseButton = purchaseMineralButton()
    const ganymedeMinerals = await displayGanymedeMinerals()
    const enceladusMinerals = await displayEnceladusMinerals()
    const oberonMinerals = await displayOberonMinerals()
    const ioMinerals = await displayIoMinerals()
    return `
        <header class="header">
        <h1 class="title">Solar System Mining Marketplace</h1>
        </header>
            <div class="governor-colony">
                <article class="governor">
                ${chooseGovernor}
                </article>

                <article class="colony-minerals">
                <h2 id="governorColonyHeading">Colony Minerals</h2>
                <div id='colony-minerals-list'></div>
                </article>
            </div>

        <article class="facility"></article>

        <article class='facilityMinerals-spaceCart'>
            <article class='facility-minerals'>
                <h2 id='facilityMineralsHeading'>(choose a facility)</h2>
                <section class='ganymede-radio-buttons hide-element'>${ganymedeMinerals}</section>
                <section class='enceladus-radio-buttons hide-element'>${enceladusMinerals}</section>
                <section class='oberon-radio-buttons hide-element'>${oberonMinerals}</section>
                <section class='io-radio-buttons hide-element'>${ioMinerals}</section>
            </article>

            <article class="space-cart">
                <h2>Space Cart</h2>
                <section class='minerals-in-cart ganymede-cart'></section>
                <section class='minerals-in-cart enceladus-cart'></section>
                <section class='minerals-in-cart oberon-cart'></section>
                <section class='minerals-in-cart io-cart'></section>
                ${purchaseButton}
            </article>
        </article>
    `
}