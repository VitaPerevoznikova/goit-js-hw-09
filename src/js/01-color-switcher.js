const CHANGE_COLOR_DELAY = 1000;
let idInt = null;

const elements = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

elements.btnStop.disabled = true;
elements.btnStart.addEventListener('click', onBtnStartChangeColor);
elements.btnStop.addEventListener('click', onBtnStopChangeColor);


function onBtnStartChangeColor() {
    elements.btnStart.disabled = true;
    elements.btnStop.disabled = false;

    idInt = setInterval(() => {
        elements.body.style.backgroundColor = getRandomHexColor()
    }, CHANGE_COLOR_DELAY);
}

function onBtnStopChangeColor() {
    elements.btnStart.disabled = false;
    elements.btnStop.disabled = true;

    clearInterval(idInt);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}