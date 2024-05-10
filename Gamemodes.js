// Gamemode data
const gamemodeData = [
    {
        type: "Easy",
        gamemodes: [
            {
                name: "Easy",
                description: "Easy mode is the easiest mode in the game.",
                properties: {
                    rounds: 40,
                    costMultiplier: 0.85,
                    limitations: "None"
                }
            },
            {
                name: "Primary Only",
                description: "Primary Only mode is a mode where you can only use your primary weapon.",
                properties: {
                    rounds: 40,
                    costMultiplier: 0.85,
                    limitations: "Primary Only"
                }
            },
            {
                name: "Deflation",
                description: "Deflation mode is a mode where you start with only 20000 cash and you can't get more.",
                properties: {
                    rounds: 30,
                    costMultiplier: 0.85,
                    limitations: "No Income"
                }
            }
        ]
    },
    {
        type: "Medium",
        gamemodes: [
            {
                name: "Medium",
                description: "Medium mode is the medium mode in the game.",
                properties: {
                    rounds: 60,
                    costMultiplier: 1,
                    limitations: "None"
                }
            },
            {
                name: "Military Only",
                description: "Military Only mode is a mode where you can only use military towers.",
                properties: {
                    rounds: 60,
                    costMultiplier: 1,
                    limitations: "Military Only"
                }
            },
            {
                name: "Reverse",
                description: "Reverse mode is a mode where the bloons go the opposite way.",
                properties: {
                    rounds: 60,
                    costMultiplier: 1,
                    limitations: "None"
                }
            },
            {
                name: "Apocalypse",
                description: "Apocalypse mode is a mode where the bloons are faster and stronger and don't stop coming.",
                properties: {
                    rounds: 60,
                    costMultiplier: 1,
                    limitations: "You can't pause"
                }
            }
        ]
    },
    {
        type: "Hard",
        gamemodes: [
            {
                name: "Hard",
                description: "Hard mode is the hard mode in the game.",
                properties: {
                    rounds: 80,
                    costMultiplier: 1.15,
                    limitations: "None"
                }
            },
            {
                name: "Magic Only",
                description: "Magic Only mode is a mode where you can only use magic towers.",
                properties: {
                    rounds: 80,
                    costMultiplier: 1.15,
                    limitations: "Magic Only"
                }
            },
            {
                name: "Half Cash",
                description: "Half Cash mode is a mode where you only get half the cash.",
                properties: {
                    rounds: 80,
                    costMultiplier: 1.15,
                    limitations: "Half Cash"
                }
            },
            {
                name: "Double HP MOABs",
                description: "Double HP MOABs mode is a mode where MOABs have double HP.",
                properties: {
                    rounds: 80,
                    costMultiplier: 1.15,
                    limitations: "None"
                }
            },
            {
                name: "Alternate Bloons Rounds",
                description: "Alternate Bloons Rounds mode is a mode where the bloons come in a different order then normal.",
                properties: {
                    rounds: 80,
                    costMultiplier: 1.15,
                    limitations: "None"
                }
            },
            {
                name: "Impoppable",
                description: "Impoppable mode is a mode where you can't get any lives.",
                properties: {
                    rounds: 100,
                    costMultiplier: 1.35,
                    limitations: "No Lives Lost, Increased Money Cost"
                }
            },
            {
                name: "CHIMPS",
                description: "CHIMPS mode is a mode where you can't use continues, Lives, income, monkey knowledge, or powers.",
                properties: {
                    rounds: 100,
                    costMultiplier: 1.15,
                    limitations: "No Continues, No Lives Lost, No Income, No Monkey Knowledge, No Powers"
                }
            }
        ]
    }
];

// Function to create a gamemode card element
function createGamemodeCard(gamemode) {
    const gamemodeCard = document.createElement("div");
    gamemodeCard.classList.add("gamemode-card");

    const gamemodeNameElement = document.createElement("h3");
    gamemodeNameElement.textContent = gamemode.name;

    const gamemodeDescriptionElement = document.createElement("p");
    gamemodeDescriptionElement.textContent = gamemode.description;

    const propertiesListElement = document.createElement("ul");
    for (const property in gamemode.properties) {
        const propertyItem = document.createElement("li");
        propertyItem.textContent = `${property}: ${gamemode.properties[property]}`;
        propertiesListElement.appendChild(propertyItem);
    }

    gamemodeCard.appendChild(gamemodeNameElement);
    gamemodeCard.appendChild(gamemodeDescriptionElement);
    gamemodeCard.appendChild(propertiesListElement);

    // Set color and hover animation based on gamemode name
    if (gamemode.name === "Easy") {
        gamemodeCard.style.backgroundColor = "lightgreen";
    } else if (gamemode.name === "Medium") {
        gamemodeCard.style.backgroundColor = "lightblue";
    } else if (gamemode.name === "Hard") {
        gamemodeCard.style.backgroundColor = "lightcoral";
    } else {
        gamemodeCard.style.backgroundColor = "lightgrey";
    }

    return gamemodeCard;
}

// Function to render gamemode cards in the corresponding section
function renderGamemodes() {
    gamemodeData.forEach(difficultyLevel => {
        const gamemodeList = document.querySelectorAll(".gamemode-list")[difficultyLevel.type === "Easy" ? 0 : difficultyLevel.type === "Medium" ? 1 : 2];

        difficultyLevel.gamemodes.forEach(gamemode => {
            const gamemodeCard = createGamemodeCard(gamemode);
            gamemodeList.appendChild(gamemodeCard);
        });
    });
}

// Call the renderGamemodes function to display the gamemode cards
renderGamemodes();