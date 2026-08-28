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


// Άσκηση 4
// Έστω το παρακάτω bankAccount obj.
// προσθέστε δύο μεθόδους: deposit & withdraw

const bankAccount = {
    owner: "Alice",
    balance: 500,

    deposit(amount) {
        if (amount < 0) return 
        this.balance += amount;
    },
    withdraw(amount) {
        if (amount > this.balance)  return   // if truthy stop
        this.balance -= amount;              // else continue
    }
}


// Άσκηση 5
// Μία συνάρτηση που να επιστρέφει το product 
// με το max price
const products = [
    { name: 'mouse', price: 50 },
    { name: 'keyboard', price: 80 },
    { name: 'cpu', price: 800 }
]

// Δική μου λύση
function findMostExpensive(products) {
   const prices = products.map(p => p.price);
   const maxPrice = Math.max(...prices);
   return products.find(p => p.price === maxPrice);
}

console.log(findMostExpensive(products));


// Πιο επαγγελματική με .reduce και accumulator
function findMostExpensive2(products) {
    return products.reduce((acc, product) => {
        return product.price > acc.price ? product : acc
    });
};

console.log(findMostExpensive2(products));

// Του καθηγητή λύση
function findMostExpensive3(products) {
    if (!Array.isArray(products)) return;
    if (products.length === 0) return;

    let mostExpensive = products[0];

    for (const product of products) {
        if (product.price > mostExpensive) {
            mostExpensive = product
        };
    };

    return mostExpensive;
};




// Άσκηση 6
// Μία συνάρτηση που να επιστρέφει object με γκρουπάρισμα 
// ανά city των users

const users = [
    { firstname: 'Alice', city: 'Athens' },
    { firstname: 'Bob', city: 'Patra' },
    { firstname: 'Costas', city: 'Athens' },
    { firstname: 'Dimitris', city: 'Patra' },
    { firstname: 'Elon', city: 'Athens' },
    { firstname: 'Frank', city: 'Patra' },
] 

// { Athens: ['Alice', 'Costas', 'Elon'], Patra: ['Bob', 'Dimitris', 'Frank'] }

function groupByCity(users) {
    const groups = {}           // obj ως map για grouping

    for (const user of users) {
        if (!(user.city in groups)) {       // αν δεν υπάρχει
            groups[user.city] = []          // ειναι obj με 1 prop το city
        }                                   // αν υπάρχει τότε:
        groups[user.city].push(user.firstname)  // .push() για λίστα ονομάτων
    }

    return groups
}
 console.log(groupByCity(users));