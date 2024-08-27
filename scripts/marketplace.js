import { selectGovernor } from "./governor.js"
import { selectFacility } from "./facility.js"
import { purchaseMineralButton } from "./purchaseMineral.js"

export const marketplace = async () => {
    const chooseGovernor = await selectGovernor()
    const chooseFacility = await selectFacility()
    const purchaseButton = purchaseMineralButton()
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
                </article>
            </div>

        <article class="facility">
        ${chooseFacility}
        </article>

        <article class=facility-minerals>
        <h2 id='facilityMineralsHeading'>Facility Minerals</h2>
        <section class='facility-radio-buttons'></section>
        </article>

        <article class="space-cart">
        <h2>Space Cart</h2>
        <section class='minerals-in-cart'></section>
        ${purchaseButton}
        </article>
    `
}