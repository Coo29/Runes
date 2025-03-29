// table loading start
    let runes = [ // all the rune textures, files that end in F are flipped
        "Art/runes/Alg.PNG",
        "Art/runes/AlgF.PNG",
        "Art/runes/Ans.PNG",
        "Art/runes/AnsF.PNG",
        "Art/runes/Ber.PNG",
        "Art/runes/BerF.PNG",
        "Art/runes/Dag.PNG",
        "Art/runes/DagF.PNG",
        "Art/runes/Ehw.PNG",
        "Art/runes/EhwF.PNG",
        "Art/runes/Eih.PNG",
        "Art/runes/EihF.PNG",
        "Art/runes/Feh.PNG",
        "Art/runes/FehF.PNG",
        "Art/runes/Geb.PNG",
        "Art/runes/GebF.PNG",
        "Art/runes/Hag.PNG",
        "Art/runes/HagF.PNG",
        "Art/runes/Ing.PNG",
        "Art/runes/IngF.PNG",
        "Art/runes/Isa.PNG",
        "Art/runes/IsaF.PNG",
        "Art/runes/Jar.PNG",
        "Art/runes/JarF.PNG",
        "Art/runes/Kau.PNG",
        "Art/runes/KauF.PNG",
        "Art/runes/Lag.PNG",
        "Art/runes/LagF.PNG",
        "Art/runes/Man.PNG",
        "Art/runes/ManF.PNG",
        "Art/runes/Nau.PNG",
        "Art/runes/NauF.PNG",
        "Art/runes/Oth.PNG",
        "Art/runes/OthF.PNG",
        "Art/runes/Per.PNG",
        "Art/runes/PerF.PNG",
        "Art/runes/Rai.PNG",
        "Art/runes/RaiF.PNG",
        "Art/runes/Sow.PNG",
        "Art/runes/SowF.PNG",
        "Art/runes/Tei.PNG",
        "Art/runes/TeiF.PNG",
        "Art/runes/Thu.PNG",
        "Art/runes/ThuF.PNG",
        "Art/runes/Uru.PNG",
        "Art/runes/UruF.PNG",
        "Art/runes/Wun.PNG",
        "Art/runes/WunF.PNG"
    ]

    let stones = [ // all the stone textures
        "Art/stones/Sky.PNG",
        "Art/stones/Aqua.PNG",
        "Art/stones/Green.PNG",
        "Art/stones/Lime.PNG",
        "Art/stones/Pink.PNG",
        "Art/stones/Plum.PNG",
        "Art/stones/Red.PNG"
    ]

    let shadows = [ // all the shadow textures
        "Art/shadows/SkyShadow.PNG",
        "Art/shadows/AquaShadow.PNG",
        "Art/shadows/GreenShadow.PNG",
        "Art/shadows/LimeShadow.PNG",
        "Art/shadows/PinkShadow.PNG",
        "Art/shadows/PlumShadow.PNG",
        "Art/shadows/RedShadow.PNG",
    ]


    let descriptions = { // all the descriptions
        "Alg.PNG": `<h2>Algiz</h2>
                    <h3>Elk</h3>
                    <p>Protection, Luck</p>`,

        "AlgF.PNG":`<h2>Algiz (Inverted)</h2>
                    <h3>Elk</h3>
                    <p>Protection, Luck</p>`,

        "Ans.PNG": `<h2>Ansuz</h2>
                    <h3>Odin (God)</h3>
                    <p>Breath, Communication</p>`,

        "AnsF.PNG":`<h2>Ansuz (Inverted)</h2>
                    <h3>Odin (God)</h3>
                    <p>Breath, Communication</p>`,

        "Ber.PNG": `<h2>Berkano</h2>
                    <h3>Birch</h3>
                    <p>Rebirth, Relationship</p>`,

        "BerF.PNG":`<h2>Berkano (Inverted)</h2>
                    <h3>Birch</h3>
                    <p>Rebirth, Relationship</p>`,

        "Dag.PNG": `<h2>Dagaz</h2>
                    <h3>Day</h3>
                    <p>Awakenment, Inspiration</p>`,

        "DagF.PNG":`<h2>Dagaz (Inverted)</h2>
                    <h3>Day</h3>
                    <p>Awakenment, Inspiration</p>`,

        "Ehw.PNG": `<h2>Ehwaz</h2>
                    <h3>Horse</h3>
                    <p>Cooperation, Progress</p>`,

        "EhwF.PNG":`<h2>Ehwaz (Inverted)</h2>
                    <h3>Horse</h3>
                    <p>Cooperation, Progress</p>`,

        "Eih.PNG": `<h2>Eihwaz</h2>
                    <h3>Yew (Tree)</h3>
                    <p>Wisdom, Transformation</p>`,

        "EihF.PNG":`<h2>Eihwaz (Inverted)</h2>
                    <h3>Yew (Tree)</h3>
                    <p>Wisdom, Transformation</p>`,

        "Feh.PNG": `<h2>Fehu</h2>
                    <h3>Cattle</h3>
                    <p>Wealth, Abundance</p>`,

        "FehF.PNG":`<h2>Fehu (Inverted)</h2>
                    <h3>Cattle</h3>
                    <p>Wealth, Abundance</p>`,

        "Geb.PNG": `<h2>Gebo</h2>
                    <h3>Gift</h3>
                    <p>Gratitude, Exchange</p>`,

        "GebF.PNG":`<h2>Gebo (Inverted)</h2>
                    <h3>Gift</h3>
                    <p>Gratitude, Exchange</p>`,

        "Hag.PNG": `<h2>Hagalaz</h2>
                    <h3>Hail (Weather)</h3>
                    <p>Difficulties, Delay</p>`,

        "HagF.PNG":`<h2>Hagalaz (Inverted)</h2>
                    <h3>Hail (Ice)</h3>
                    <p>Difficulties, Delay</p>`,

        "Ing.PNG": `<h2>Ingwaz</h2>
                    <h3>Ingwaz (God)</h3>
                    <p>Sexuality, Energy</p>`,

        "IngF.PNG":`<h2>Ingwaz (Inverted)</h2>
                    <h3>Ingwaz (God)</h3>
                    <p>Sexuality, Energy</p>`,

        "Isa.PNG": `<h2>Isa</h2>
                    <h3>Ice</h3>
                    <p>Pause, Inertia</p>`,

        "IsaF.PNG":`<h2>Isa (Inverted)</h2>
                    <h3>Ice</h3>
                    <p>Pause, Inertia</p>`,

        "Jar.PNG": `<h2>Jera</h2>
                    <h3>Year</h3>
                    <p>Cycle, Reward</p>`,

        "JarF.PNG":`<h2>Jera (Inverted)</h2>
                    <h3>Year</h3>
                    <p>Cycle, Reward</p>`,

        "Kau.PNG": `<h2>Kenaz</h2>
                    <h3>Torch</h3>
                    <p>Passion, Creation</p>`,

        "KauF.PNG":`<h2>Kenaz (Inverted)</h2>
                    <h3>Torch</h3>
                    <p>Passion, Creation</p>`,

        "Lag.PNG": `<h2>Laguz</h2>
                    <h3>Water</h3>
                    <p>Journey, Flow</p>`,

        "LagF.PNG":`<h2>Laguz (Inverted)</h2>
                    <h3>Water</h3>
                    <p>Journey, Flow</p>`,

        "Man.PNG": `<h2>Mannaz</h2>
                    <h3>Man</h3>
                    <p>Balance, Development</p>`,

        "ManF.PNG":`<h2>Mannaz (Inverted)</h2>
                    <h3>Man</h3>
                    <p>Balance, Development</p>`,

        "Nau.PNG": `<h2>Naudhiz</h2>
                    <h3>Need</h3>
                    <p>Overcome, Endure</p>`,

        "NauF.PNG":`<h2>Naudhiz (Inverted)</h2>
                    <h3>Need</h3>
                    <p>Overcome, Endure</p>`,

        "Oth.PNG": `<h2>Othala</h2>
                    <h3>Heritage</h3>
                    <p>Wisdom, Talent</p>`,

        "OthF.PNG":`<h2>Othala (Inverted)</h2>
                    <h3>Heritage</h3>
                    <p>Wisdom, Talent</p>`,

        "Per.PNG": `<h2>Perthro</h2>
                    <h3>Unknown</h3>
                    <p>Fate, Chance</p>`,

        "PerF.PNG":`<h2>Perthro (Inverted)</h2>
                    <h3>Unknown</h3>
                    <p>Fate, Chance</p>`,

        "Rai.PNG": `<h2>Raidho</h2>
                    <h3>Journey</h3>
                    <p>Journey, Rhythm</p>`,

        "RaiF.PNG":`<h2>Raidho (Inverted)</h2>
                    <h3>Journey</h3>
                    <p>Journey, Rhythm</p>`,

        "Sow.PNG": `<h2>Sowilo</h2>
                    <h3>Sun</h3>
                    <p>Power, Growth</p>`,

        "SowF.PNG":`<h2>Sowilo (Inverted)</h2>
                    <h3>Sun</h3>
                    <p>Power, Growth</p>`,

        "Tei.PNG": `<h2>Teiwaz</h2>
                    <h3>Tiwaz (God)</h3>
                    <p>Bravery, Sacrifice</p>`,

        "TeiF.PNG":`<h2>Teiwaz (Inverted)</h2>
                    <h3>Tiwaz (God)</h3>
                    <p>Bravery, Sacrifice</p>`,

        "Thu.PNG": `<h2>Thurisaz</h2>
                    <h3>Thunraz (God)</h3>
                    <p>Defense, Disruption</p>`,

        "ThuF.PNG":`<h2>Thurisaz (Inverted)</h2>
                    <h3>Thunraz (God)</h3>
                    <p>Defense, Disruption</p>`,

        "Uru.PNG": `<h2>Uruz</h2>
                    <h3>Aurochs</h3>
                    <p>Strength, Health</p>`,

        "UruF.PNG":`<h2>Uruz (Inverted)</h2>
                    <h3>Aurochs</h3>
                    <p>Strength, Health</p>`,

        "Wun.PNG": `<h2>Wunjo</h2>
                    <h3>Joy</h3>
                    <p>Fulfillment, Happiness</p>`,

        "WunF.PNG":`<h2>Wunjo (Inverted)</h2>
                    <h3>Joy</h3>
                    <p>Fulfillment, Happiness</p>`,

    }
// table loading end

// table shuffling start
    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    let copies = [0] // number of runes to display

    function getUniqueRunes(runeList, count) {
        let uniqueRunes = [];
        let usedBaseNames = new Set();
        
        shuffleArray(runeList);

        for (let rune of runeList) {
            let baseName = rune.replace(/F\.PNG$/, ".PNG"); // remove 'F' at the end
            if (!usedBaseNames.has(baseName)) {
                usedBaseNames.add(baseName);
                uniqueRunes.push(rune);
            }
            if (uniqueRunes.length >= count) break; // stop once there are enough runes
        }

        return uniqueRunes;
    }
// table shuffling end

// image loading start
    function loadRandomImages() {
        let shuffledRunes = getUniqueRunes([...runes], copies); // ensures unique base names

        // shuffles stones keeping track of indices
            let stoneIndices = [...Array(stones.length).keys()];
            shuffleArray(stoneIndices);
            let selectedStoneIndices = stoneIndices.slice(0, copies);

            let gallery = document.getElementById("gallery");
            gallery.innerHTML = "";

        // remove context box if it exists
            let existingContextBox = document.getElementById("context-box");
            if (existingContextBox) {
                existingContextBox.remove();
            }

            for (let i = 0; i < copies; i++) {
                let container = document.createElement("div");
                container.className = "container"; // sets up the container

                let img1 = document.createElement("img");
                img1.className = "layer";
                img1.src = shuffledRunes[i]; // sets up the rune texture 

                img1.addEventListener("click", (event) => {
                    event.stopPropagation();
                    let runeName = shuffledRunes[i].split("/").pop();
                    let description = descriptions[runeName] || "No description available.";
                    showContextBox(description, event);  // shows context box
                });

                let stoneIndex = selectedStoneIndices[i]
                let img2 = document.createElement("img");
                img2.className = "layer";
                img2.src = stones[stoneIndex]; // sets up the stone texture

                let img3 = document.createElement("img");
                img3.className = "shadow";
                img3.src = shadows[stoneIndex]; // sets up the shadow texture

                container.appendChild(img3); // loads shadow texture
                container.appendChild(img2); // loads stone texture
                container.appendChild(img1); // loads rune texture
                gallery.appendChild(container); // loads container
            }
    }
// image loading end

// different rune counts (for testing) start
    function singleRune() {
        copies = 1
    }

    function threeRune() {
        copies = 3
    }

    function fiveRune() {
        copies = 5
    }
// different rune counts (for testing) end

// different layouts for rune counts start
    let currentLayout = "auto";

    function setGalleryLayout(layout) {
        let gallery = document.getElementById("gallery");
        gallery.classList.remove("row-layout", "column-layout", "circle-layout", "cross-layout", "auto-layout");
        gallery.classList.add(layout);
    }
// different layouts for rune counts end

window.onload = loadRandomImages; // makes sure it runs on start

//context box stuff start
    let isContextBoxVisible = false;
    let fadeOutTimeout = null;

    // show context box start
    function showContextBox(description, event) {
        let contextBox = document.getElementById("context-box");

        // if there's no context box, create one
        if (!contextBox) {
            contextBox = document.createElement("div");
            contextBox.id = "context-box";
            contextBox.className = "context-box";
            document.body.appendChild(contextBox);
            console.log("Context box created and added to DOM");
        }

        // gets the position of the image
        let runeImage = event.target;
        let rect = runeImage.getBoundingClientRect();

        // make sure that the box isn't visible when setting up
        contextBox.style.opacity = 0;
        contextBox.style.position = "absolute"; // locked and loaded
        contextBox.style.left = `-9999px`; // yeet it

        // fade out box if visible (pain in the ass)
        if (isContextBoxVisible) {
            // fade out
            contextBox.style.transition = "opacity 0.3s ease-in-out";
            contextBox.style.opacity = 0;

            fadeOutTimeout = setTimeout(() => {
                // move to the right place
                contextBox.style.left = `${rect.left + (rect.width / 2) - (contextBox.offsetWidth / 2)}px`;
                contextBox.style.top = `${rect.bottom + 10}px`;

                // Set innerHTML to allow HTML content
                contextBox.innerHTML = description;

                // fade in
                contextBox.style.transition = "opacity 0.3s ease-in-out";
                contextBox.style.opacity = 1;
            }, 300);
        } else {
            // fade in
            setTimeout(() => {
                // move to the right place
                contextBox.style.left = `${rect.left + (rect.width / 2) - (contextBox.offsetWidth / 2)}px`;
                contextBox.style.top = `${rect.bottom + 10}px`;

                // Set innerHTML to allow HTML content
                contextBox.innerHTML = description;

                // fade in
                contextBox.style.transition = "opacity 0.3s ease-in-out";
                contextBox.style.opacity = 1;
                isContextBoxVisible = true;
            }, 0.1);
        }
    }
    // show context box end

        document.addEventListener("click", function(event) {
            let contextBox = document.getElementById("context-box");
            if (contextBox && !contextBox.contains(event.target)) {
                hideContextBox();
            }
        });
    // hide context box end
    
// context box stuff end