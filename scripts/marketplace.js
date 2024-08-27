

export const marketplace = () => {
    return `
        <header class="header">
        <h1 class="title">Solar System Mining Marketplace</h1>
        </header>

        <article class="governor">
        ${"list of governors"}
        </article>

        <article class="colony-minerals">
        <h2>${"generate colony header"}</h2>
        </article>

        <article class="facility">
        ${"list of facilities"}
        </article>

        <article class=facility-minerals>
        <h2>${"generate facility mineral header"}</h2>
        ${"generate radio buttons for minerals at each facility"}
        </article>

        <article class="space-cart">
        <h2>Space Cart</h2>
        ${"purchase minerals button"}
        </article>
    `
}