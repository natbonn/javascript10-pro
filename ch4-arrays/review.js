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

// Άσκηση 2
// Μία συνάρτηση που λαμβάνει ως είσοδο έναν πίνακα αριθμών
// και επιστρέφει τον μέσο όρο

function findAvg(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }

    let sum = 0;
    for (const num of arr) {
        sum =+ num;
    }

    return sum / arr.length;
}

// Functional Solution
function findAvg2(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    } 

    return arr.reduce((total, num) => total + num, 0) / arr.length;
}

// Άσκηση 3
// Μία συνάρτηση που ελέγχει (επιστρέφει true/false)
// αν δύο πίνακες είναι ίσοι: ίδιο μήκος και ίδια στοιχεία

function equalArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || arr1.length === 0) {
        return 0;
    }

    if (!Array.isArray(arr2) || arr2.length === 0) {
        return 0;
    }

    if (arr1.length !== arr2.length) return false;
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

console.log(equalArrays([1, 2, 3, 4], [1, 2, 3, 4]));

// Άσκηση 4
// Μία συνάρτηση που λαμβάνει ως είσοδο έναν πίνακα 
// και μία τιμή και επιστρέφει έναν νέο πίνακα
// χωρίς να εμφανίζει την τιμή αυτή

function removeAllOccurances(arr, valueToRemove) {
    return arr.filter(value => value !== valueToRemove);
}