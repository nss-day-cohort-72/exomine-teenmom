// import { purchaseMineral } from "./TransientState"

export const purchaseMineralButton = () => {
    document.addEventListener(
        "click",
        handlePurchaseClick
    )
    return `<button id="purchase">Purchase Mineral</button>`
}

const handlePurchaseClick = () => {
    if (clickEvent.target.id === "purchase") {
        // purchaseMineral()
    }
}