let color = "#FFF";     // state

// window.addEventListener("DOMContentLoaded", function() {
//     document.querySelector('#btn').addEventListener('click', function() {
//         onClickMeClicked();
//     });
//     renderBg(color);
// });
$(function() {
    $('#btn').on('click', function() {
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
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const hex = [...letters, ...digits];

    color = '#';
    for (let i = 1; i <= 6; i++) {
        color += hex[Math.floor(Math.random() * hex.length)]
    }
}

/**
 * View - UI Rendering
 */
function renderBg(color) {
    // document.getElementById('color').textContent = color;
    $("#color").text(color);
    // document.body.style.backgroundColor = color;
    $('body').css('background-color', color);
};