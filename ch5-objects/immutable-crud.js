const user = { 
    id: 1, 
    firstname: "Alice" 
}

// Mutable add
// obj.lastname = "W."

// Immutable add -- Fresh Copy
// const addToObj = (obj, field, value) => ({ ...obj, [field]: value})
// const newObj = addToObj(user, "lastname", "W.")
// console.log(user)
// console.log(newObj)


// Mutable update
// user.firstname = "Maria"
// console.log(user)

// Immutable -- Fresh Copy
// const updateObj = (obj, field, newVal) => ({...obj, [field]: newVal})
// const updatedObj = updateObj(user, "firstname", "Maria2")
// console.log(user)
// console.log(updatedObj)

// Immutable delete
const deleteFromObj = (obj, field) => {
    const { [field]: _, ...objToReturn } = obj
    return objToReturn
}

const objFromDelete = deleteFromObj(user, "id")
console.log(objFromDelete)