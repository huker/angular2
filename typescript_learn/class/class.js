/**
 * Created by huk on 17/5/12.
 */
var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hi," + person.firstName + person.lastName;
}
var student = new Student('hu', 'yeqing');
var a = greeter(student);
console.log(a);
//# sourceMappingURL=class.js.map