/**
 * Created by huk on 17/5/16.
 */
//析构表达式
function foo() {
    return {
        name: 'huk',
        age: 12,
        job: {
            com: 'yiliao'
        }
    };
}
var _a = foo(), namex = _a.name, age = _a.age, com = _a.job.com;
console.log(namex, age, com);
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4, 5, 6];
var n1 = arr1[2], n2 = arr1[3];
var n3 = arr2[0], others = arr2.slice(1);
// console.log(n1,n2);
// console.log(others);
function foo3(_a) {
    var n3 = _a[0], others = _a.slice(1);
    console.log(n3);
    console.log(others);
}
foo3(arr2);
//# sourceMappingURL=fun2.js.map