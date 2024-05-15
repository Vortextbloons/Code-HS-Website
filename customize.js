 import { gamemodeData } from "./Gamemodes.js";
import { mapData } from "./Maps.js"
import { towerData } from "./Towers.js"
const info_type = document.getElementById("info_type");
const type_select = document.getElementById("type_select");
console.log(info_type)
info_type.addEventListener("change", function() {
    console.log(info_type.value);
})