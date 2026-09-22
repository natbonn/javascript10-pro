const counterElement = document.getElementById('counter')

export function render(counter) {
    counterElement.textContent = counter;
    styleCounter(counter);
}

function styleCounter(counter) {
    counterElement.classList.toggle('color-positive', counter > 0);
    counterElement.classList.toggle('color-negative', counter < 0);
    counterElement.classList.toggle('color-zero', counter === 0);

}
