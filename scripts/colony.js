export const colonyMineralsList = async () => {
    const response = await fetch("http://localhost:8088/colonyMinerals?_expand=mineral")
    const mineralsInColonies = await response.json()

    let html = `
        <section>
            ${mineralsInColonies.map(colonyMineral => 
                `<div>${colonyMineral.load} tons of ${colonyMineral.mineral.name}</div>`
            ).join("")}
        </section>`
    return html        
}