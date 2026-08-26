const user = {
    id: 1,
    firstname: "Bob",
    lastname: "D."
}

let id = user.id;        // getter
user.id = 2;             // setter

// πιο ευέλικτος και χρήσιμος τρόπος
let userId = user['id'];
let firstname = user['firstname'];

let last = 'lastname';
let userLastname = user[last];