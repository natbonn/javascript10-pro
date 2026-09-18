let color = "white";     // state

window.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#btn').addEventListener('click', function() {
        onClickMeClicked();
    });
    renderBg(color);
});

/**
 * Controller
 */
function onClickMeClicked() {
    updateBg()                // model function that alters-updates the state
    renderBg(color);          // render based on the updated state
}

/**
 * Model
 */
function updateBg() {
    const colors = ['black', 'red', 'green', 'white', 'blue'];
    color = colors[Math.floor(Math.random() * colors.length)];
}

/**
 * View - UI Rendering
 */
function renderBg(color) {
    document.getElementById('color').textContent = color;
    document.body.style.backgroundColor = color;
}