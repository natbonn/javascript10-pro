// Άσκηση 1
// Μία συνάρτηση που παίρνει ως παράμετρο ένα string και επιστρέφει ένα νέο string με τους χαρακτηρες σε αντίστροφη σειρά.

let str = 'Coding Factory';

function reverse(str) {
    let returnedStr = '';

    for (let i = str.length - 1; i>= 0; i--) {
        returnedStr += str[i];
    }

    return returnedStr;
}

console.log(reverse(str));

// συντομότερος και functional τρόπος
function reverse2(str) {
    return str.trim().split('').reverse().join('');
}

let str2 = 'Coding';
console.log(reverse2(str2));