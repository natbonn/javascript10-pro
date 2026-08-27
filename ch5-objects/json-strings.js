const jsObject = {
    id: 1,
    hobbies: [{id: 1, title: "gym"}, {id: 2, title: "music"}, ]
}


// Serialization
const jsonString = JSON.stringify(jsObject);
console.log(jsonString);


// Deserialize
const jsObject2 = JSON.parse(jsonString);
console.log(jsObject2);

const jsonStr = `[{"id": "prod1"}, {"id": "prod2"}, {"id": "prod3"}, {"id": "prod4"}]`

console.log(JSON.parse(jsonStr));