
const fridge = {name:'walton', price: 30000, capacity: 'better', isCleaned : true};

//console.log(fridge);

// const keys = Object.keys(fridge);
// console.log(keys);

// const values = Object.values(fridge);
// console.log(values);


// const entries = Object.entries(fridge);
// console.log(entries);


Object.seal(fridge);
fridge.name = "samsung";
//Object.freeze(fridge);
//delete fridge.name;
fridge.amount = 1000;


console.log(fridge);


