const counterElement = document.getElementById('counter')

export function render(counter) {
    counterElement.textContent = counter;
}
