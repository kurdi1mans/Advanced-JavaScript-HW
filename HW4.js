// create an array of characters that has these properties (name, height, gender, mass, eye color)
let list = [
    {name: "Mohammed", height:178, gender: "Male", mass: 77, eyeColor:"Black"},
    {name: "Omar", height:169, gender: "Male", mass: 80, eyeColor:"Green"},
    {name: "Norah", height:160, gender: "Female", mass: 101, eyeColor:"Blue"},
    {name: "Jaser", height:172, gender: "Male", mass: 65, eyeColor:"Red"},
    {name: "Khaled", height:168, gender: "Male", mass: 120, eyeColor:"Yellow"},
    {name: "Hadeel", height:158, gender: "Female", mass: 45, eyeColor:"Brown"},
    {name: "Shahad", height:163, gender: "Female", mass: 53, eyeColor:"Grey"}
];

// MAP
// Get array of objects with just name and height properties
console.log(list.map(({name,height}) => ({name,height})));

// Get array of all first names
console.log(list.map(item => item.name));

// REDUCE
// Get total mass of all characters
console.log(list.reduce((totalMass,currentItem) => totalMass+=currentItem.mass,0));

// Get total number of characters in all the character names
console.log(list.reduce((totalNumberOfCharacters,currentItem) => totalNumberOfCharacters+=currentItem.name.length,0));

// FILTER
// Get characters with mass greater than 100
console.log(list.filter(item => item.mass>100));

// Get all female characters
console.log(list.filter(item => item.gender==="Female"));

// SORT
// Sort by name
console.log(list.sort((a,b) => a.name.localeCompare(b.name)));

// Sort by gender
console.log(list.sort((a,b) => a.gender.localeCompare(b.gender)));

// EVERY
// Does every character have blue eyes?
console.log(list.every(item => item.eyeColor === "Blue"));
// Is every character male?
console.log(list.every(item => item.gender === "Male"));

// SOME
// Is there at least one male character?
console.log(list.some(item => item.gender === "Male"));
// Is there at least one character that has mass less than 50?
console.log(list.some(item => item.mass <50));
