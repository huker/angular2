/**
 * Created by huk on 17/5/12.
 */
class Student{
    fullName:string;
    constructor(public firstName,public lastName){
        this.fullName = firstName+' '+lastName;
    }
}

interface Person{
    firstName:string,
    lastName:string
}

function greeter(person:Person){
    return "hi,"+person.firstName+person.lastName;
}

var student = new Student('hu','yeqing');

var a  = greeter(student);

console.log(a)