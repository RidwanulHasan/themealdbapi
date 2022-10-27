

const student = {
    name : 'hridoy',
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

const result = student.exam('english');
//console.log(result);
const total = student.CostPerMonth(5000);

console.log(total);
