let health = 100;
let level = 1;
let kills = {};

const healthFill = document.getElementById("health-fill");
const healthText = document.getElementById("health-text");
const levelText = document.getElementById("level");
const kyomui = document.getElementById("kyomui");

function loadData() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        const data = JSON.parse(savedData);
        health = data.health ?? 10;
        level = data.level ?? 1;
        kills = data.kills ?? {};
    }
}


function saveData() {
    const data = {
        health: health,
        level,
        kills
    };
    localStorage.setItem("data", JSON.stringify(data));
}


function updateHealth() {
    levelText.textContent = `Level ${level} (${kills[level.toString()]} Kills)`;
    healthText.textContent = `${health} / ${level * 10}`;
    healthFill.style.width = `${(health / (level * 10)) * 100}%`;
    saveData();
}

kyomui.addEventListener("click", () => {
    health--;
    if (health <= 0) {
        health = level * 10;
        kills[level.toString()] += 1;
    }
    updateHealth();
});

function autoSave() {
    saveData();
    setTimeout(autoSave, 1000);
}

loadData();
autoSave()
updateHealth();

