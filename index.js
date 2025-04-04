let count = 0;
let total = 0;
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
const totalEl = document.getElementById("total-el");

let sections = {
    'main': 0,
    'balcony': 0,
    'overflow': 0
};

function incrementSection(section) {
    sections[section]++;
    updateDisplay();
}

function updateDisplay() {
    let total = Object.values(sections).reduce((a, b) => a + b, 0);
    document.getElementById("total-el").textContent = `Total: ${total}`;
}

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    total += count;
    totalEl.textContent = "Total: " + total;
    count = 0;
    countEl.textContent = count;
}
