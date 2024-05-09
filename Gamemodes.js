const Gamemode = [
    {
        Difficulty: "Easy",
        Gamemodes: [
            {
                Name: "Easy",
                Description: "Easy mode is the easiest mode in the game.",
                Properties: {
                    Rounds: 40,
                    CostMultiplier: 0.85,
                    Limitations: "None"
                }
            },
            {
                Name: "Primary Only",
                Description: "Primary Only mode is a mode where you can only use your primary weapon.",
                Properties: {
                    Rounds: 40,
                    CostMultiplier: 0.85,
                    Limitations: "Primary Only"
                }

            },
            {
                Name: "Deflation",
                Description: "Deflation mode is a mode where you start with only 20000 cash and you can't get more.",
                Properties: {
                    Rounds: 30,
                    CostMultiplier: 0.85,
                    Limitations: "No Income"
                }
            },
        ]
    },
    {
        Difficulty: "Medium",
        Gamemodes: [
            {
                Name: "Medium",
                Description: "Medium mode is the medium mode in the game.",
                Properties: {
                    Rounds: 60,
                    CostMultiplier: 1,
                    Limitations: "None"
                }
            },
            {
                Name: "Military Only",
                Description: "Military Only mode is a mode where you can only use military towers.",
                Properties: {
                    Rounds: 60,
                    CostMultiplier: 1,
                    Limitations: "Military Only"
                }
            },
            {
                Name: "Reverse",
                Description: "Reverse mode is a mode where the bloons go the opposite way.",
                Properties: {
                    Rounds: 60,
                    CostMultiplier: 1,
                    Limitations: "None"
                }
            },
            {
                Name: "Apocalypse",
                Description: "Apocalypse mode is a mode where the bloons are faster and stronger and don't stop coming.",
                Properties: {
                    Rounds: 60,
                    CostMultiplier: 1,
                    Limitations: "You can't pause"
                }

            }
        ]
    },
    {
        Difficulty: "Hard",
        Gamemodes: [
            {
                Name: "Hard",
                Description: "Hard mode is the hard mode in the game.",
                Properties: {
                    Rounds: 80,
                    CostMultiplier: 1.15,
                    Limitations: "None"
                }
            },
            {
                Name: "Magic Only",
                Description: "Magic Only mode is a mode where you can only use magic towers.",
                Properties: {
                    Rounds: 80,
                    CostMultiplier: 1.15,
                    Limitations: "Magic Only"
                }
            },
            {
                Name: "Half Cash",
                Description: "Half Cash mode is a mode where you only get half the cash.",
                Properties: {
                    Rounds: 80,
                    CostMultiplier: 1.15,
                    Limitations: "Half Cash"
                }
            },
            {
                Name: "Double HP MOABs",
                Description: "Double HP MOABs mode is a mode where MOABs have double HP.",
                Properties: {
                    Rounds: 80,
                    CostMultiplier: 1.15,
                    Limitations: "None"
                }
            },
            {
                Name: "Alternate Bloons Rounds",
                Description: "Alternate Bloons Rounds mode is a mode where the bloons come in a different order then normal.",
                Properties: {
                    Rounds: 80,
                    CostMultiplier: 1.15,
                    Limitations: "None"
                }
            },
            {
                Name: "Impoppable",
                Description: "Impoppable mode is a mode where you can't get any lives.",
                Properties: {
                    Rounds: 100,
                    CostMultiplier: 1.35,
                    Limitations: "No Lives Lost, Increased Money Cost"
                }
            },
            {
                Name: "CHIMPS",
                Description: "CHIMPS mode is a mode where you can't use continues, Lives, income, monkey knowledge, or powers.",
                Properties: {
                    Rounds: 100,
                    CostMultiplier: 1.15,
                    Limitations: "No Continues, No Lives Lost, No Income, No Monkey Knowledge, No Powers"
                }
            }
        ]
    }
];

function createGamemodeCard(gamemode) {
    const gamemodeCard = document.createElement("div");
    gamemodeCard.classList.add("gamemode-card");

    const gamemodeName = document.createElement("h3");
    gamemodeName.textContent = gamemode.Name;

    const gamemodeDescription = document.createElement("p");
    gamemodeDescription.textContent = gamemode.Description;

    const propertiesList = document.createElement("ul");
    for (const property in gamemode.Properties) {
        const propertyItem = document.createElement("li");
        propertyItem.textContent = `${property}: ${gamemode.Properties[property]}`;
        propertiesList.appendChild(propertyItem);
    }

    gamemodeCard.appendChild(gamemodeName);
    gamemodeCard.appendChild(gamemodeDescription);
    gamemodeCard.appendChild(propertiesList);

    // Set color and hover animation based on game mode
    switch (gamemode.Name) {
        case "Easy":
            gamemodeCard.style.backgroundColor = "red";
            gamemodeCard.style.transition = "background-color 0.3s ease";
            break;
        case "Primary Only":
            gamemodeCard.style.backgroundColor = "blue";
            gamemodeCard.style.transition = "background-color 0.3s ease";
            break;
        case "Deflation":
            gamemodeCard.style.backgroundColor = "green";
            gamemodeCard.style.transition = "background-color 0.3s ease";
            break;
        default:
            gamemodeCard.style.backgroundColor = "gray";
            gamemodeCard.style.transition = "background-color 0.3s ease";
            break;
    }

    return gamemodeCard;
}

function renderGamemodes() {
    const gamemodeContainer = document.createElement("div");
    gamemodeContainer.classList.add("gamemode-container");

    Gamemode.forEach(difficultyLevel => {
        const difficultyHeader = document.createElement("h2");
        difficultyHeader.textContent = difficultyLevel.Difficulty;
        gamemodeContainer.appendChild(difficultyHeader);

        const gamemodeList = document.createElement("div");
        gamemodeList.classList.add("gamemode-list");

        difficultyLevel.Gamemodes.forEach(gamemode => {
            const gamemodeCard = createGamemodeCard(gamemode);
            gamemodeList.appendChild(gamemodeCard);
        });

        gamemodeContainer.appendChild(gamemodeList);
    });

    document.body.appendChild(gamemodeContainer);
}

renderGamemodes();