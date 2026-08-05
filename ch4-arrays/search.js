const cities = [ 'Athens', 'Londod', 'NY' ];

if (cities.indexOf('Athens') === -1) {
    console.log('Not found');
} else {
    console.log('Found');
}

// Modern
if (cities.includes('Athens')) {
    console.log('Found');
} else {
    console.log('Not found');
}