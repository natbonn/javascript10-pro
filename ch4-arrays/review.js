// Άσκηση
// Μία συνάρτηση που να παίρνει ένα πίνακα αριθμών
// και να επιστρέφει το μεγαλύτερο αριθμό,
// χωρίς την Μath.max

function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0 ) {
        return;
    }

    let max = -Infinity;
    for (const el of arr) {
        if (el > max) {
            max = el;
        }
    }
    return max;
}

console.log(findMax([13, 5, 78, 42]));