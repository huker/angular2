/**
 * Created by huk on 17/5/16.
 */

//析构表达式
function foo(){
    return{
        name:'huk',
        age:12,
        job:{
            com:'yiliao'
        }
    }
}

var {name:namex,age,job:{com}} = foo();

console.log(namex,age,com);

var arr1 = [1,2,3,4];
var arr2 = [1,2,3,4,5,6];

var [,,n1,n2] = arr1;
var [n3,...others] = arr2;
// console.log(n1,n2);
// console.log(others);

function foo3([n3,...others]){
    console.log(n3);
    console.log(others);
}

foo3(arr2);