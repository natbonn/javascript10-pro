const user = {
    id: 1,
    firstname: "Alice"
}

// Άσκηση 1
// Μία συνάρτηση getPropertyValue(obj, propertyName)
// που επιστρέφει την τιμή της ιδιότητας με αυτό το όνομα

// function getProperty(obj, propertyName) {
//     // return obj.propertyName      // λάθος, θα αναμέναμε μέσα στο obj να υπάρχει "propertyName" (κυριολεκτικό)
//     return obj[propertyName]
// }

// console.log(getProperty(user, "id"))      // την τιμή του id



// Άσκηση 1b
// Μία συνάρτηση getPropertyValue(obj, propertyName)
// που επιστρέφει την τιμή της ιδιότητας με αυτό το όνομα
// και λαμβάνει υπόψη την περίπτωση το obj να είναι null/undefined

function getProperty2(obj, propertyName) {
    return obj?.[propertyName]      // optional chaining - error handle me ?. - αλλιώς syntax error
}

console.log(getProperty(null, "id"))


// Άσκηση 1c
// Μία συνάρτηση getPropertyValue(obj, propertyName)
// που επιστρέφει την τιμή της ιδιότητας με αυτό το όνομα
// και λαμβάνει υπόψη την περίπτωση το obj να είναι null/undefined
// ή και το propertyName να μην υπάρχει

function getProperty2(obj, propertyName) {
    if (obj == null || obj == undefined) {    // έλεγχος με guard - truthy/false
        return undefined
    } 

    // return obj.hasOwnProperty       // παλιό - έχει αντικατασταθεί
    return Object.hasOwn(obj, propertyName)   // new way με τριαδικό
        ? obj[propertyName]
        : undefined
}

// Άσκηση 2
// Μία συνάρτηση που αθροίζει τις τιμές των ιδιοτήτων
// ενός object
// { Jan: 100, Feb: 300}

function sumValues(obj) {
    let sum = 0

    for (const value of Object.values(obj)) {       // επιστρέφει πίνακα με values
        sum += value
    }

    return sum
}

function sumValues2(obj) {
    return Object.values(obj).reduce((sum, value) => sum + values, 0)
}


// Άσκηση 3
// Μία συνάρτηση που να εκτυπώνει τα key, values ενός obj

function printEntries(obj) {
    for (const [key, value] of Object.entries(obj)) {
        console.log(key + ": " + value)
    }
}

function printEntries2(obj) {
    Object.entries(obj).forEach(([key, value]) => console.log(key + ": " + value))
}


