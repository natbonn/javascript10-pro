const cities = [ 'Paris', 'London', 'Berlin', 'Athens' ];
const numbers = [ 10, 101, 103, 77, 99, 690, 590 ];

cities.sort( (a, b) => a.localeCompare(b, 'en') );     // sorts in-place

// Numeric sort
numbers.sort(function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
});

// Ascending
numbers.sort((a, b) => a - b);
numbers.sort(function(a, b) {
    return a - b;
})

// Descending
numbers.sort((a, b) => b - a);