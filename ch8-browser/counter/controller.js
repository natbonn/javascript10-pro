import { render } from "./view.js";
import { decreaseCounter, getCounter, increaseCounter, resetCounter } from "./model.js";

document.getElementById('btnDecr').addEventListener('click', onDecreaseClicked);
document.getElementById('btnReset').addEventListener('click', onResetClicked);
document.getElementById('btnIncr').addEventListener('click', onIncreaseClicked);

render(getCounter());

function onDecreaseClicked() {
    decreaseCounter();
    render(getCounter());
}

function onResetClicked() {
    resetCounter();
    render(getCounter());
}

function onIncreaseClicked() {
    increaseCounter();
    render(getCounter());
}