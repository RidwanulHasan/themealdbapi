const student = {
    name:{name:'hridoy', id: 2222, address: "bottola"},

    price : [4000,3000,20000],

    student : function() {

        return this.price[0] + this.price[1] + this.price[2] ;



    },
    
    school : "ideal preparatory and high school",
    earn : 50000
}

const studentResult = student.student();

console.log(studentResult);

const templateString = `Name : ${student.name.name} and Price : ${student.price[1]}` ;

console.log(templateString);


const arrowFunction = () => {
    return 89;
}

const result = arrowFunction();

console.log(result);

const modulas = num =>{
    return num % 17 ;
}

const resultModulas = modulas(100);
console.log(resultModulas);


const addModulas =(num1,num2)=>{
    const add = num1 + num2;

    return add % 2 ;
}

const addModulasResult = addModulas(10,20);
console.log(addModulasResult);


const addNumber = (num1 , num2) => {

    return  num1+7+num2+7;

}

const resultAddNumber = addNumber(10,20);
console.log(resultAddNumber);


const array = [10,20,30,40,50];

const resultArray = array.map( x => x % 7);

console.log(resultArray);

