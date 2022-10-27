
// compare two object 


const first = {a:2,b:3,c:5};

const second = {a:2,b:3,c:5};

const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

console.log(firstString,secondString);


const compareObjects = (first,second) =>{
    const firstkeys = Object.keys(first);
    const secondkeys = Object.keys(second);

    if(firstkeys.length === secondkeys.length){
        
       for (const key of firstkeys){
        if(first[key]!==second[key]){
            return false;
        }
    }
    return true;
        
    }

    else{

        console.log('different')
        
    }

}


const output = compareObjects(first,second);

console.log(output);



