const colorDisplay = document.getElementById("colorDisplay");
const colorBtn = document.getElementById("colorBtn");

const getRandomHexColor = () => {
    let symbols = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
};

colorBtn.addEventListener("click", () => {
    colorDisplay.textContent = document.body.style.background = colorBtn.style.color = getRandomHexColor();
});