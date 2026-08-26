const person = {
    firstname: "Alice",
    lastname: "A.",
    city: "Athens",
    age: 20,
    isStudent: false
}

for (let prop in person) {          // το prop ειναι το key
    console.log(`${person[prop]}, ${person[key]}`)
}

for (const [key, value] of Object.entries(person)) {
    console.log(`${key}, ${value}`)
}

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}, ${value}`)
})

const keys = Object.keys(person);
keys.forEach(key => console.log(`${key}, ${person[key]}`))

const grades = { maths: 8, history: 7, tech: 10 }
const sum = Object.values(grades).reduce((sum, value) => sum + value, 0)
const avgStr = (sum / Object.values(grades).length).toFixed(2)
console.log(`Average: ${avgStr}`)