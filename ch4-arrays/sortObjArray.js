const objArr = [
    {id: 1, firstname: 'Νίκος', age: 25},
    {id: 2, firstname: 'Ανδρέας', age: 40},
    {id: 3, firstname: 'Κώστας', age: 20},
    {id: 4, firstname: 'Κώστας', age: 18},
]

// Sort by age
objArr.sort((a, b) => a.age - b.age);
console.log(objArr);

objArr.sort(function(a, b) {
    if (a.firstname === b.firstname) {
        return a.age - b.age;
    }
    return a.firstname.localeCompare(b.firstname, 'el-GR')
})

console.log(objArr);

// εν συντομία το sort με if (υπονοείται με το ||)
objArr.sort((a, b) => a.firstname.localeCompare(b.firstname, 'el-GR') || a.age - b.age); 