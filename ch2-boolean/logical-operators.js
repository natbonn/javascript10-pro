// Scenario: booleans
const cartTotal = 50;
const isMember = true;

const hasFreeShipping = (cartTotal > 40) && isMember;

console.log(hasFreeShipping);

const hasDiscount = cartTotal > 100 || isMember;

console.log(hasDiscount);   

// Τα && και || δεν επιστρέφουν πάντα boolean.
// Μπορεί να επιστρέφουν μία από τις τιμές.
const username = '';
const displayName = username || 'Guest';    // Guest

console.log(displayName);

const user = {name: 'Alice'};      // truthy
const helloName = user && user.name;