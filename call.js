const student = {
    
    id : 1111,
    school : 'ideal preparatory and high school',
    AmountOfMe : 7000,

    exam : function(subject){
        return this.name + ` is participating in ${subject} exam`;
    },

    CostPerMonth : function (totalcost){
        this.exam();
        return `${this.AmountOfMe - totalcost}`;

    }

}

const student1 = {
    name : "hridoy"
}


const call = student.exam.call(student1,'Bangla');
console.log(call);

const apply = student.exam.apply(student1, ['english']);
console.log(apply);