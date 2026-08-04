const arr = [];
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 'Alice', 3.4, true];
const sparseArr = [1, , 3];         // sparse array
const arr3 = [,,,];                 // length is 3

// Array is constructor function
const arr4 = Array(3);              // length 3 with empty elements
const arr5 = Array(2, 3, 5, 8);     // 4 elements
const grid = [ [1, 2], [3, 4], [5, 6] ];
const objArr = [ {id: 1}, {id: 2}, {id: 3}]  // keyvalues pairs

console.log(arr1[0]);               // 1

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

for (const item of arr1) {
    console.log(item);
}

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j]);
    }
}

for (const row of grid) {
    for (const item of row) {
        console.log(item);
    }
}

