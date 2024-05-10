// Map data
const mapData = [
    {
        type: "Beginner",
        maps: [
            {
                name: "Monkey Meadow",
                description: "A vast meadow with a winding path, perfect for beginners to learn the ropes.",
                uniqueDetails: [
                    "Wide open spaces for placing towers.",
                    "Straightforward path with gentle curves."
                ]
            },
            {
                name: "Town Center",
                description: "A bustling town square with residential areas surrounding the track.",
                uniqueDetails: [
                    "Multiple entry points for bloons.",
                    "Obstacles like buildings and trees to work around."
                ]
            },
            {
                name: "The Glacier",
                description: "A frozen tundra with icy paths carved through the snowy terrain.",
                uniqueDetails: [
                    "Slippery surfaces can affect tower placement.",
                    "Frozen water bodies create natural obstacles."
                ]
            },
            {
                name: "In The Loop",
                description: "A circular track that loops around a central area, providing strategic opportunities.",
                uniqueDetails: [
                    "Bloons travel in both directions around the loop.",
                    "Limited space for tower placement."
                ]
            },
            {
                name: "End Of The Road",
                description: "A dead-end road with bloons coming from both directions.",
                uniqueDetails: [
                    "Bloons emerge from the top and bottom of the screen.",
                    "Limited space for tower placement."
                ]
            },
            {
                name: "Logs",
                description: "A dense forest with a winding path through the trees.",
                uniqueDetails: [
                    "Line of sight issues due to the dense foliage.",
                    "Strategic placement of towers is key."
                ]
            },
            {
                name: "Cubism",
                description: "A map with a unique geometric layout and multiple paths for bloons.",
                uniqueDetails: [
                    "Bloons can take different routes through the map.",
                    "Strategic tower placement is crucial."
                ]
            },
            {
                name: "Four Circles",
                description: "A map with four circular tracks intersecting at various points.",
                uniqueDetails: [
                    "Bloons can travel along multiple paths.",
                    "Strategic tower placement is essential."
                ]
            },
            {
                name: "Hedge",
                description: "A maze-like map with hedges and walls blocking the path.",
                uniqueDetails: [
                    "Limited visibility due to the maze layout.",
                    "Strategic tower placement is key."
                ]
            },
            {
                name: "Spring Spring",
                description: "A map with a spring theme and bloons bouncing around the track.",
                uniqueDetails: [
                    "Bloons can bounce over obstacles.",
                    "Strategic tower placement is crucial."
                ]
            },
            {
                name: "KartsNDarts",
                description: "A racing-themed map with a track winding through the course.",
                uniqueDetails: [
                    "Bloons travel along",
                    "Strategic tower placement is essential."]
            },
            {
                name: "Moon Landing",
                description: "A map set on the moon with low gravity and unique challenges.",
                uniqueDetails: [
                    "Low gravity affects tower and bloon movement.",
                    "Strategic tower placement is crucial."
                ]
            }

        ]
    },
    {
        type: "Intermediate",
        maps: [
            {
                name: "Carved",
                description: "A mysterious map carved into an ancient temple ruin.",
                uniqueDetails: [
                    "Intricate pathways with multiple intersections.",
                    "Limited space for tower placement."
                ]
            },
            {
                name: "Haunted Swamp",
                description: "A spooky swamp filled with twisted trees and eerie fog.",
                uniqueDetails: [
                    "Dense foliage obscures line of sight.",
                    "Bloons can emerge from multiple directions."
                ]
            },
            {
                name: "Cargo Bay",
                description: "A chaotic cargo bay with containers and crates scattered everywhere.",
                uniqueDetails: [
                    "Maze-like layout with tight spaces.",
                    "Obstacles block certain areas for tower placement."
                ]
            },{
                name: "Clock",
                description: "A clock-themed map with gears and cogs turning in the background.",
                uniqueDetails: [
                    "Bloons travel along the clock hands.",
                    "Strategic tower placement is crucial."
                ]
            },
            {
                name: "Cracked",
                description: "A map set in a barren wasteland with cracked earth and lava pits.",
                uniqueDetails: [
                    "Limited space for tower placement.",
                    "Bloons travel along winding paths."
                ]
            },
            {
                name: "Streambed",
                description: "A map with a river flowing through the center, creating unique challenges.",
                uniqueDetails: [
                    "Bloons travel along the riverbed.",
                    "Strategic tower placement is key."
                ]
            },
            {
                name: "Chutes",
                description: "A map with chutes and slides that send bloons in different directions.",
                uniqueDetails: [
                    "Bloons can take different paths through the chutes.",
                    "Strategic tower placement is crucial."
                ]
            },
            {
                name: "Spice Islands",
                description: "A tropical archipelago with bloons coming from multiple directions.",
                uniqueDetails: [
                    "Bloons emerge from different islands.",
                    "Strategic tower placement is essential."
                ]
            },

        ]
    },
    {
        type: "Advanced",
        maps: [
            {
                name: "Bloody Puddles",
                description: "A nightmarish map filled with pools of blood and ominous skulls.",
                uniqueDetails: [
                    "Irregular paths that loop and intersect.",
                    "Limited visibility due to the dark atmosphere."
                ]
            },
            {
                name: "Ravine",
                description: "A treacherous ravine with a narrow path winding through the cliffs.",
                uniqueDetails: [
                    "Restricted space for tower placement.",
                    "Bloons travel along a single, convoluted path."
                ]
            },
            {
                name: "Quad",
                description: "A complex map with four interconnected quadrants.",
                uniqueDetails: [
                    "Multiple entry and exit points for bloons.",
                    "Strategic tower placement is crucial."
                ]
            },
            {
                name: "Another Brick",
                description: "A map set in a bustling city with brick buildings and bustling streets.",
                uniqueDetails: [
                    "Tall buildings create line of sight issues.",
                    "Narrow streets restrict tower placement."
                ]

            },
            {
                name: "Off The Coast",
                description: "A coastal map with bloons traveling along the shoreline.",
                uniqueDetails: [
                    "Limited space for tower placement.",
                    "Strategic tower placement is key."
                ]
            },
            {
                name: "Cornfield",
                description: "A map set in a sprawling cornfield with twisting paths.",
                uniqueDetails: [
                    "Bloons travel along winding paths.",
                    "Strategic tower placement is crucial."
                ]
            },
        ]
    },
];

// Function to create a map card element
function createMapCard(map) {
    const mapCard = document.createElement("div");
    mapCard.classList.add("map-card");

    const mapNameElement = document.createElement("h3");
    mapNameElement.textContent = map.name;

    const mapDescriptionElement = document.createElement("p");
    mapDescriptionElement.textContent = map.description;

    const uniqueDetailsList = document.createElement("ul");
    map.uniqueDetails.forEach(detail => {
        const detailItem = document.createElement("li");
        detailItem.textContent = detail;
        uniqueDetailsList.appendChild(detailItem);
    });

    mapCard.appendChild(mapNameElement);
    mapCard.appendChild(mapDescriptionElement);
    mapCard.appendChild(uniqueDetailsList);
    // set the color based on the map difficulty
    if (map.name === "Monkey Meadow" || map.name === "Town Center" || map.name === "The Glacier" || map.name === "In The Loop" || map.name === "End Of The Road" || map.name === "Logs" || map.name === "Cubism" || map.name === "Four Circles" || map.name === "Hedge" || map.name === "Spring Spring" || map.name === "KartsNDarts" || map.name === "Moon Landing") {
        mapCard.style.backgroundColor = "lightgreen";
    } else if (map.name === "Carved" || map.name === "Haunted Swamp" || map.name === "Cargo Bay" || map.name === "Clock" || map.name === "Cracked" || map.name === "Streambed" || map.name === "Chutes" || map.name === "Spice Islands") {
        mapCard.style.backgroundColor = "yellow";
    } else if (map.name === "Bloody Puddles" || map.name === "Ravine" || map.name === "Quad" || map.name === "Another Brick" || map.name === "Off The Coast" || map.name === "Cornfield") {
        mapCard.style.backgroundColor = "#FF6347";
    }
    return mapCard;
}

// Function to render map cards in the corresponding section
function renderMaps() {
    mapData.forEach(difficultyLevel => {
        const mapList = document.querySelectorAll(".map-list")[difficultyLevel.type === "Beginner" ? 0 : difficultyLevel.type === "Intermediate" ? 1 : 2];

        difficultyLevel.maps.forEach(map => {
            const mapCard = createMapCard(map);
            mapList.appendChild(mapCard);
        });
    });
}

// Call the renderMaps function to display the map cards
renderMaps();