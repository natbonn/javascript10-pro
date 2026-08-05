const students = [ 'Alice', 'Andreas', 'Andreas', 'Bob', 'Costas' ];

const users = [
    {id:1, firstname: 'Alice', email: 'alice@aueb.gr', isActive: true},
    {id:2, firstname: 'Bob', email: 'bob@aueb.gr', isActive: false},
    {id:3, firstname: 'Costas', email: 'costas@aueb.gr', isActive: true},
];


// for-each
students.forEach(function(val, index, arr) {
    console.log(index, val, arr);
})

students.forEach(function(value) {
    console.log(value);
})

students.forEach(function(_, index) {    // _intentionally ignored
    console.log(index);
})

// filter
const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);

// map
const emails = users.map(user => user.email);

const summaries = users.map(user => ({
    id: user.id,
    label: `${user.firstname} ${user.email}`
}));
console.log(summaries);

// reduce
const products = [
    {title: 'laptop', price: 1000, stock: 10},
    {title: 'mouse', price: 50, stock: 0},
    {title: 'keyboard', price: 80, stock: 20},
];

const totalStock = products.reduce((total, item) => total + item.stock, 0);
console.log(totalStock);

// find - return object(value)
const user = users.find(user => user.email === 'alice@aueb.gr');
const userIndex = users.findIndex(user => user.email === 'alice@aueb.gr');
console.log(user, userIndex);

// some & every
const isOutOfStock = products.some(item => item.stock === 0);
const isAllOutOfStock = products.every(item => item.stock === 0);

console.log(isOutOfStock);
console.log(isAllOutOfStock);

// flatmap
const posts = [
    {title: 'post1', tags: ['js', 'web']},
    {title: 'post2', tags: ['node.js', 'backend']},
    {title: 'post3', tags: ['react', 'frontend']},
];

const allTags = posts.flatMap(post => post.tags);
console.log(allTags);