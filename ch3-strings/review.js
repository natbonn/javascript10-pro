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

// Άσκηση 2
// Μία συνάρτηση που να ελέγχει αν ένα string είναι παλυνδρομικό. 
// Αγνοήστε πεζά και κεφαλαία
// Επιστρέφει boolean 
// Σωστοί και οι 2 τρόποι επίλυσης

function palindrome(str) {
    const cleaned = str.trim().toUpperCase().split(/\s+/).join('');

    for (let i = 0, j = cleaned.length - 1; i < j; i++, j--) {
        if (cleaned[i] !== cleaned[j]) {
            return false;
        }
    }
    return true;
}

function palindrome2(str) {
    const reversed = str.trim().toUpperCase().split(/\s+/).reverse().join('');
    return reversed === str.trim().toUpperCase().split().koin('');
}
 