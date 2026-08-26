const book = { author: {firstname: "", lastname: ""}}
const book2 = {}

let book2Author = book2.author.lastname;

if (book2) {
    if (book2.author) {
        authorLast = book2.author.lastname;
    }
}

authorLast = book2?.author?.lastname;          // returns undefined

// Nullish coalescing operator -- elvis operator
authorLast = book2?.author?.lastname ?? "Unknown";

if (book.hasOwnProperty('author')) {
    console.log(book.author);
}