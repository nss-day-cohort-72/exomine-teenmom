import { purchaseMineral } from "./TransientState.js"

export const purchaseMineralButton = () => {
    document.addEventListener(
        "click",
        handlePurchaseClick
    )
    return `<button id="purchase">Purchase Mineral</button>`
}

const handlePurchaseClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        purchaseMineral()
    }
}