import { selectGovernor } from "./governor.js"
import { selectFacility } from "./facility.js"

export const marketplace = async () => {
    let chooseGovernor = await selectGovernor()
    let chooseFacility = await selectFacility()
    return `
        <header class="header">
        <h1 class="title">Solar System Mining Marketplace</h1>
        </header>

        <article class="governor">
        ${chooseGovernor}
        </article>

        <article class="colony-minerals">
        <h2>${"generate colony header"}</h2>
        </article>

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
        ${"purchase minerals button"}
        </article>
    `
}