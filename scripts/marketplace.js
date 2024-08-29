import { createGovernorDropdown } from "./governor.js"
import { createFacilitiesDropdown } from "./facility.js"

export const marketplace = () => {
    const governorDropdownHTML = createGovernorDropdown()
    const facilitiesDropdownHTML = createFacilitiesDropdown()
    return `
        <header class="header">
        <h1 class="title">Solar System Mining Marketplace</h1>
        </header>
            <div class="governor-colony">
                <article class="governor">
                ${governorDropdownHTML}
                </article>

                <article class="colony-minerals">
                <h2 id="governorColonyHeading">Colony Minerals</h2>
                <div id='colony-minerals-list'></div>
                </article>
            </div>

        <article class="facility">
        ${facilitiesDropdownHTML}
        </article>

        <article class=facility-minerals>
        <h2 id='facilityMineralsHeading'>Facility Minerals</h2>
        <section class='facility-radio-buttons'>
        </section>
        </article>

        <article class="space-cart">
        <h2>Space Cart</h2>
        <section class='minerals-in-cart'></section>
        </article>
    `
}