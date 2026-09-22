const DEFAULT_VALUE = 0;
let counter = DEFAULT_VALUE;

export function getCounter() {
    return counter;
}

export function decreaseCounter() {
    counter --;
}

export function resetCounter() {
    counter = DEFAULT_VALUE;
}

export function increaseCounter() {
    counter++;
}