let bag = new Set()

bag.add('Java')
bag.add('JavaScript')
bag.delete('Java')

if (bag.has('JavaScript')) 
    console.log('Has JavaScript')

// Μετατροπή πίνακα σε Set
function addSet(set, ...values) {
    values.forEach(value => set.add(value))
}

// Μπορεί να γίνει και με constructor αν δεν υπάρχει Set
function createSet(...elements) {
    return new Set(elements)
}

// Παίρνουμε πίνακα με διπλότυπα και μετατρέπουμε σε άλλο χωρίς διπλότυπα
const cities = [
    {id: 1, city: 'Athens'}, 
    {id: 2, city: 'Athens'}
]

function getUniqueCities(arr) {
    return [...new Set(arr.map(cityObj => cityObj.city))]    
}

// Το ίδιο με πάνω πιο απλό
function getUniqueCities2(arr) {
    return [...new Set(cities)]    
}

// Πράξεις σε Set (σε σύνολα δηλαδή)




