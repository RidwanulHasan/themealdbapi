const ages = [12,13,24,56];

//console.log(ages);

for (const age of ages){
    //console.log(age);
}


const students = {name:"hridoy", id:1111, class : 7 , position : 1};

console.log(students);

// const keys = Object.keys(students);

// three way to find key values

 // 1. object.propertyname;
// 2. object['propertyname'];
// 3. object[propertyname];

// for (const key of keys){
//     console.log(key , students[key]);
// }


for (const student in students){
    console.log(student , students[student]);
}
