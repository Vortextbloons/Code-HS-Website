import { gamemodeData } from "./Gamemodes.js";
import { mapData } from "./Maps.js"
import { towerData } from "./Towers.js"
import * as helper from "./Helper.js"
// funtion to remove options from the select element
function remove_options() {
    const options = type_select.querySelectorAll("option")
    if (options.length > 0) {
        options.forEach((option) => {
            option.remove()
        })
    }
}
const info_type = document.getElementById("info_type");
const type_select = document.getElementById("type_select");
console.log(info_type)
info_type.addEventListener("change", function () {
    const dynamic_div = document.getElementById("dynamic_info")
    if (info_type.value === "None") {
        remove_options()
    }
    if (info_type.value === "Gamemode") {
        remove_options()
        Object.keys(gamemodeData).forEach((keys) => {
            const difficulty = (gamemodeData[keys].type)
            const option = document.createElement("option")
            option.value = difficulty
            option.classList.add(`Gamemode`)
            option.textContent = difficulty
            type_select.appendChild(option)
        })
        // dynamic info 
        
        const dynamic_div = document.getElementById("dynamic_info")
        helper.createHTML_Muti()

    }
    else if (info_type.value === "Map") {
        remove_options()
        Object.keys(mapData).forEach((keys) => {
            const difficulty = (mapData[keys].type)
            const option = document.createElement("option")
            option.value = difficulty
            option.classList.add(`Map`)
            option.textContent = difficulty
            type_select.appendChild(option)

        })
    }
    else if (info_type.value === "Tower") {
        remove_options()
        Object.keys(towerData).forEach((keys) => {
            const type = (towerData[keys].type)
            const option = document.createElement("option")
            option.value = type
            option.classList.add(`Tower`)
            option.textContent = type
            type_select.appendChild(option)

        })
    }


})  
