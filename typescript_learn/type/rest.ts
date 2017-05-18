/**
 * Created by huk on 17/5/16.
 */
function foo(...args){
    args.forEach(function (arg) {
        console.log(arg);
    })
}

foo(1,2,3,4,5);

function foo2(a,b,c){
    console.log(a,b,c);
}

var arg1 = [1,2];
var arg2 = [5,6,7,8,9];
foo2(...arg1);
foo2(...arg2);