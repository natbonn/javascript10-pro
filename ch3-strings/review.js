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
    return reversed === str.trim().toUpperCase().split(/\s+/).join('');
}

// Άσκηση 3
// Μία συνάρτηση μετράει πόσα φωνήεντα
// [a, e, i, o, u] περιέχει ένα string, 
// ανεξαρτήτως κεφαλαίων - πεζών

function countVowels(str) {
    const vowels = [...'aeiou'];
    let count = 0;

    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels('Javascript'));

// Άσκηση 4
// Μία συνάρτηση που παίρνει ως είσοδο μια πρόταση
// και αν επιστρέφει την ίδια πρόταση, αλλά με το πρώτο
// γράμμα κάθε λέξης κεφαλαίο και τα υπόλοιπα πεζά
// και ένα κενό μεταξύ των λέξεων
// 'codING   faCtory'   -> 'Coding Factory'

function capitalize(str) {
    if (!str.trim()) return '';

    let returnedSentence = '';
    const tokens = str.trim().split(/\s+/);

    for (const token of tokens) {
        const newToken1 = token[0].toUpperCase();
        const newToken2 = token.slice(1).toLowerCase();
        returnedSentence += newToken1 + newToken2 + ' ';
    }
    return returnedSentence.trim();
}

console.log(capitalize('codING    faCtory'));

// Άσκηση 5
// Μία συνάρτηση που παίρνει ένα κείμενο
// και μία λέξη και επιστρέφει πόσες φορές εμφανίζεται
// αυτή η λέξη μέσα στο κείμενο (ανεξαρτητως πεζων/κεφαλαίων)

function wordCount (text, str) {
    if (!text.trim() || !str.trim()) return 0;

    const words = text.trim().toLowerCase().split(/\s+/);
    const searchTerm = str.trim('.').toLowerCase();
    let times = 0;

    for (const word of words) {
        if (word === searchTerm) times++;
    }
    return times;
}

// Με δυναμικό regex
function wordCount2 (text, str) {
    const pattern = new RegExp('\\b + str + \\b', 'gi');
    const matches = text.match(pattern);

    return matches === null ? 0 : matches.length;
}

// Άσκηση 6
// Μία συνάρτηση η οποία να παίρνει ως είσοδο τον αριθμό κάρτας
// πχ '1234 5678 2345 6543' και επιστρέφει masked όλα τα ψηφία
// εκτός από τα 4 τελευταία, πχ *************6543

function maskCardNumber (cardNumber) {
    if (!cardNumber.trim()) return;

    const digits = cardNumber.trim().split(' ').join('');
    const lastFourDigits = digits.slice(-4);
    const masked = '*'.repeat(digits.length - 4);

    return masked + lastFourDigits;
}
console.log(maskCardNumber(`1234 5678 2345 6543`));




 