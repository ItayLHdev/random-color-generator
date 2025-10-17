const colorDisplay = document.getElementById("colorDisplay");
const colorBtn = document.getElementById("colorBtn");
const copyBtn = document.getElementById("copy");

const getRandomHexColor = () => {
    let symbols = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
};

colorBtn.addEventListener("click", () => {
    const color = getRandomHexColor();
    colorDisplay.textContent = color;
    document.body.style.background = color;
    colorBtn.style.color = color;
    copyBtn.style.color = color;
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(colorDisplay.textContent);
});

const updateButtonClick = () => {
    function activateButton (button, otherButton) {
        button.style.borderRadius = otherButton.style.borderRadius = '100px';
        button.style.transform = 'scale(0.9)';
    }

    function resetButton (button, otherButton) {
        button.style.transform = otherButton.style.transform = 'scale(1)';
        switch (button) {
            case colorBtn:
                button.style.borderRadius = '100px 50px 50px 100px';
                otherButton.style.borderRadius = '50px 100px 100px 50px'
                break;
            case copyBtn:
                button.style.borderRadius = '50px 100px 100px 50px'
                otherButton.style.borderRadius = '100px 50px 50px 100px';
                break;
        }
    }

    colorBtn.addEventListener("mousedown", () => activateButton(colorBtn, copyBtn));
    colorBtn.addEventListener("mouseup", () => resetButton(colorBtn, copyBtn));
    colorBtn.addEventListener("mouseleave", () => resetButton(colorBtn, copyBtn))

    copyBtn.addEventListener("mousedown", () => activateButton(copyBtn, colorBtn));
    copyBtn.addEventListener("mouseup", () => resetButton(copyBtn, colorBtn));
    copyBtn.addEventListener("mouseleave", () => resetButton(copyBtn, colorBtn))
};
updateButtonClick();