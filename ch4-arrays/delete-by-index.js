const numbers = [ 1, 2, 3 ];

const indexToRemove = numbers.indexOf(2);

if (indexToRemove !== -1) {
    numbers.splice(indexToRemove, 1);
}

 console.log(numbers);