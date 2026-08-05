const students = [ 'Alice', 'Andreas', 'Andreas', 'Bob', 'Costas' ];

students.forEach(function(val, index, arr) {
    console.log(index, val, arr);
})

students.forEach(function(value) {
    console.log(value);
})

students.forEach(function(_, index) {    // _intentionally ignored
    console.log(index);
})