// Tower data (you can replace this with your actual tower data)
const towerData = [
    {
        type: "Primary",
        towers: [
            {
                name: "Dart Monkey",
                description: "The classic tower that shoots darts at bloons. The Dart Monkey is the cheapest and most basic tower in the game, but it can be upgraded to become a formidable force.",
                upgradePaths: [
                    "Sharper Darts: Increases the damage and pierce of the darts.",
                    "Enhanced Eyesight: Increases the range and targeting abilities of the tower.",
                    "Crossbow Master: Allows the tower to attack much faster and deal more damage to higher-tier bloons."
                ]
            },
            {
                name: "Boomerang Monkey",
                description: "Throws boomerangs that come back around for multiple hits. The Boomerang Monkey is a versatile tower that can hit multiple bloons with each throw.",
                upgradePaths: [
                    "Grappling Hook: Allows the boomerangs to pull bloons back towards the tower.",
                    "Bionic Boomer: Increases the attack speed and range of the tower.",
                    "Moab Press: Specializes in dealing increased damage to MOAB-class bloons."
                ]
            },
            {
                name: "Bomb Shooter",
                description: "Lobs explosive bombs that deal area-of-effect damage. The Bomb Shooter is a powerful offensive tower that can deal heavy damage to groups of bloons.",
                upgradePaths: [
                    "Missile Launcher: Allows the tower to fire powerful missiles with increased range and damage.",
                    "Bloon Crush: Adds a powerful crushing attack that can deal massive damage to MOAB-class bloons.",
                    "Bomb Blitz: Increases the attack speed and adds a barrage of bombs for crowd control."
                ]
            },
            {
                name: "Ice Monkey",
                description: "Freezes bloons in their tracks with icy blasts. The Ice Monkey is a powerful support tower that can slow down and immobilize bloons.",
                upgradePaths: [
                    "Re-Freeze: Allows the tower to quickly re-freeze thawed bloons.",
                    "Enhanced Freeze: Increases the duration and impact area of the freeze effect.",
                    "Icicle Impale: Adds a powerful icicle attack that can deal heavy damage to frozen bloons."
                ]
            },
            {
                name: "Glue Gunner",
                description: "Slows down bloons with sticky glue. The Glue Gunner is a versatile support tower that can slow and immobilize bloons.",
                upgradePaths: [
                    "Corrosive Glue: Allows the glue to damage bloons over time.",
                    "Glue Soak: Increases the duration and impact area of the glue effect.",
                    "Bloon Liquifier: Adds a powerful liquifying attack that can deal heavy damage to glued bloons."
                ]
            },
            {
                name: "Tack Shooter",
                description: "Rapidly fires volleys of sharp tacks that can shred through bloons. The Tack Shooter is an affordable and efficient tower for dealing with groups of bloons.",
                upgradePaths: [
                    "Even Faster Shooting: Increases the attack speed of the tower.",
                    "Ring of Fire: Adds a ring of fire around the tower that can damage bloons.",
                    "Blade Maelstrom: Transforms the tower into a powerful tornado of blades that can shred through even the toughest bloons."]
            },
        ],
    },
    {
        type: "Military",
        towers: [
            {
                name: "Sniper Monkey",
                description: "A long-range tower that deals heavy damage with each shot.",
                upgradePaths: [
                    "Full Metal Jacket: Increases the pierce and damage of the sniper shots.",
                    "Night Vision Goggles: Allows the tower to detect and target camo bloons.",
                    "Elite Defender: Transforms into an Elite Defender that can unleash powerful attacks on bloons."]
            },

            {
                name: "Monkey Buccaneer",
                description: "A naval tower that attacks bloons from the water. The Monkey Buccaneer is a versatile tower that can target both land and water-based bloons.",
                upgradePaths: [
                    "Grape Shot: Fires a spread of grape shots that can pop multiple bloons.",
                    "Hot Shot: Adds a powerful fire attack that can damage and burn bloons.",
                    "Pirate Lord: Transforms into a Pirate Lord that can unleash devastating attacks on bloons."
                ]
            },
            {
                name: "Monkey Ace",
                description: "A flying tower that drops bombs and shoots darts from the sky. The Monkey Ace is a versatile tower that can cover a large area with its attacks.",
                upgradePaths: [
                    "Rapid Fire: Increases the attack speed of the Monkey Ace.",
                    "Spy Plane: Reveals camo bloons and increases the accuracy of the Monkey Ace.",
                    "Operation: Dart Storm: Unleashes a storm of darts that can shred through bloons."
                ]
            },
            {
                name: "Heli Pilot",
                description: "A helicopter tower that attacks bloons from the air. The Heli Pilot is a versatile tower that can chase and target bloons with precision.",
                upgradePaths: [
                    "Razor Rotors: Increases the attack speed and damage of the Heli Pilot.",
                    "Support Chinook: Provides support and drops crates for nearby towers.",
                    "Apache Prime: Transforms into an Apache Prime that can unleash devastating attacks on bloons."
                ]
            },
            {
                name: "Mortar Monkey",
                description: "Launches explosive shells that deal area-of-effect damage. The Mortar Monkey is a powerful tower that can rain down destruction on groups of bloons.",
                upgradePaths: [
                    "Bigger Blast: Increases the blast radius of the Mortar Monkey.",
                    "Signal Flare: Reveals camo bloons and increases the accuracy of the Mortar Monkey.",
                    "The Biggest One: Unleashes a massive shell that can obliterate bloons."
                ]
            }]
    },
    {
        type: "Magic",
        towers: [
            {
                name: "Wizard Monkey",
                description: "Casts powerful spells to take down bloons.",
                upgradePaths: [
                    "Intense Magic: Increases the range and damage of the wizard spells.",
                    "Arcane Mastery: Unleashes powerful magical attacks that can decimate bloons.",
                    "Wizard Lord Phoenix: Transforms into a Wizard Lord Phoenix that can unleash devastating attacks on bloons."
                ]
            },
            {
                name: "Ninja Monkey",
                description: "A stealthy tower that throws sharp shurikens at bloons. The Ninja Monkey is a versatile tower that excels at popping bloons with its fast and accurate attacks.",
                upgradePaths: [
                    "Sharp Shurikens: Increases the pierce and damage of the shurikens.",
                    "Double Shot: Throws two shurikens at once, doubling the attack speed.",
                    "Grandmaster Ninja: Unleashes powerful attacks that can decimate bloons."
                ]
            },
            {
                name: "Super Monkey",
                description: "A super-powered monkey that shoots powerful laser beams. The Super Monkey is a high-tier tower that can single-handedly take down large groups of bloons.",
                upgradePaths: [
                    "Laser Vision: Increases the range and damage of the laser beams.",
                    "Plasma Blasts: Fires plasma blasts that can pop multiple bloons at once.",
                    "Sun Avatar: Transforms into a Sun Avatar that shoots powerful sun beams."
                ]
            },
            {
                name: "Alchemist",
                description: "Throws potions that buff nearby towers and damage bloons. The Alchemist is a versatile support tower that can provide valuable buffs and debuffs to nearby towers.",
                upgradePaths: [
                    "Acidic Mixture Dip: Adds a powerful acid attack that can damage and weaken bloons.",
                    "Berserker Brew: Grants nearby towers increased attack speed and pierce.",
                    "Bloon Master Alchemist: Transforms into a Bloon Master Alchemist that can deal massive damage to bloons."
                ]
            },
            {
                name: "Druid",
                description: "Summons the forces of nature to attack bloons. The Druid is a versatile tower that can summon powerful storms and creatures to deal with bloons.",
                upgradePaths: [
                    "Heart of Thunder: Summons a powerful storm that can damage and stun bloons.",
                    "Druid of the Jungle: Summons vines that can slow down and damage bloons.",
                    "Avatar of Wrath: Transforms into an Avatar of Wrath that can unleash devastating attacks on bloons."]

            },

        ]
    }, {
        type: "Support",
        towers: [
            {
                name: "Monkey Village",
                description: "Buffs nearby towers and grants extra abilities. The Monkey Village provides valuable support and upgrades to nearby towers.",
                upgradePaths: [
                    "Call to Arms: Increases the attack speed of nearby towers.",
                    "Radar Scanner: Allows nearby towers to detect and target camo bloons.",
                    "Monkey Town: Provides a significant boost to all nearby towers and grants access to powerful upgrades."
                ]
            },
            {
                name: "Banana Farm",
                description: "Generates income over time by producing bananas. The Banana Farm is a valuable source of extra cash for buying and upgrading towers.",
                upgradePaths: [
                    "Valuable Bananas: Increases the income generated by the farm.",
                    "Banana Plantation: Allows the farm to produce bananas at a faster rate.",
                    "Banana Research Facility: Generates additional income and grants access to powerful upgrades."
                ]
            },
            {
                name: "Spike Factory",
                description: "Lays down spiked obstacles that can pop and slow down bloons. The Spike Factory is an effective defensive tower that can create impassable roadblocks.",
                upgradePaths: [
                    "Longer Cannons: Increases the range of the Spike Factory.",
                    "White Hot Spikes: Spikes can pop frozen and lead bloons.",
                    "Spiked Mines: Allows the Spike Factory to produce powerful mines that can heavily damage MOAB-class bloons."
                ]
            },
            {
                name: "Engineer Monkey",
                description: "Builds traps and supports nearby towers with various abilities. The Engineer Monkey provides unique support and utility to the defense.",
                upgradePaths: [
                    "Sentry Paragon: Allows the Engineer to create a powerful sentry turret.",
                    "Overclock: Increases the attack speed of nearby towers for a short duration.",
                    "Bloon Trap: Deploys a powerful trap that can catch and hold bloons in place."
                ]
            },
            {
                name: "Beast Handler",
                description: "Summons powerful beasts to attack bloons. The Beast Handler is a versatile tower that can summon and control powerful creatures to deal with bloons.",
                upgradePaths: [
                    "Tiger Tamer: Summons a powerful tiger that can shred through bloons.",
                    "Bear Trainer: Summons a bear that can stun and damage bloons.",
                    "Dragon Master: Transforms into a Dragon Master that can unleash devastating attacks on bloons."
                ]
            }

        ]

    }];

// Function to create a tower card element
function createTowerCard(tower) {
    const towerCard = document.createElement("div");
    towerCard.classList.add("tower-card");

    const towerName = document.createElement("h3");
    towerName.textContent = tower.name;

    const towerDescription = document.createElement("p");
    towerDescription.textContent = tower.description;

    const upgradePathList = document.createElement("ul");
    tower.upgradePaths.forEach(path => {
        const pathItem = document.createElement("li");
        pathItem.textContent = path;
        upgradePathList.appendChild(pathItem);
    });

    towerCard.appendChild(towerName);
    towerCard.appendChild(towerDescription);
    towerCard.appendChild(upgradePathList);
    // Set color and hover animation based on category
    if (tower.type === "Primary") {
        towerCard.style.backgroundColor = "#FFD700";
        towerCard.classList.add("primary-tower");
    } else if (tower.type === "Military") {
        towerCard.style.backgroundColor = "#C0C0C0";
        towerCard.classList.add("military-tower");
    } else if (tower.type === "Magic") {
        towerCard.style.backgroundColor = "#FF69B4";
        towerCard.classList.add("magic-tower");
    }
    else if (tower.type === "Support") {
        towerCard.style.backgroundColor = "#00FF00";
        towerCard.classList.add("support-tower");
    }






    return towerCard;
}

// Function to render tower cards in the corresponding section
function renderTowers() {
    towerData.forEach(towerType => {
        const towerList = document.querySelectorAll(".tower-list")[towerType.type === "Primary" ? 0 : towerType.type === "Military" ? 1 : towerType.type === "Magic" ? 2 : 3];

        towerType.towers.forEach(tower => {
            const towerCard = createTowerCard(tower);
            towerList.appendChild(towerCard);
        });
    });
}

// Call the renderTowers function to display the tower cards
renderTowers();
