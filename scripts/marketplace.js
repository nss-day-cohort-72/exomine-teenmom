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
                <h2>${"generate colony header"}</h2>
                </article>
            </div>

        <article class="facility">
        ${chooseFacility}
        </article>

        <article class=facility-minerals>
        <h2>${"generate facility mineral header"}</h2>
        ${"generate radio buttons for minerals at each facility"}
        </article>

        <article class="space-cart">
        <h2>Space Cart</h2>
        ${purchaseButton}
        </article>
    `
}