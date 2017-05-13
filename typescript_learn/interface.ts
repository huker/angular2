/**
 * Created by huk on 17/5/12.
 */
interface Person{
    firstName:string,
    lastName:string
}

function greeter(person:Person){
    return "hi,"+person.firstName+person.lastName;
}

var user = {
    firstName:'hu',
    lastName:'yeqing'
};

var user1 = greeter(user);

console.log(user1);