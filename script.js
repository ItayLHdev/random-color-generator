const colorDisplay = document.querySelector("#colorDisplay");
const colorBtn = document.querySelector("#colorBtn");
const copyBtn = document.querySelector("#copy");

const HEX_SYMBOLS = "0123456789ABCDEF";
const getRandomHexColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += HEX_SYMBOLS[Math.floor(Math.random() * HEX_SYMBOLS.length)];
    }
    return color;
};

colorBtn.addEventListener("click", () => {
    const color = getRandomHexColor();
    colorDisplay.textContent = color;
    document.body.style.backgroundColor = color;
    colorBtn.style.color = color;
    copyBtn.style.color = color;
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(colorDisplay.textContent);
});

function activateButton(button, otherButton) {
    button.classList.add("button-active");
    otherButton.classList.add("button-other-active");
}

function resetButton(button, otherButton) {
    button.classList.remove("button-active");
    otherButton.classList.remove("button-other-active");
}

function addButtonListeners(button, otherButton) {
    button.addEventListener("mousedown", () => activateButton(button, otherButton));
    button.addEventListener("mouseup", () => resetButton(button, otherButton));
    button.addEventListener("mouseleave", () => resetButton(button, otherButton));
}

addButtonListeners(colorBtn, copyBtn);
addButtonListeners(copyBtn, colorBtn);