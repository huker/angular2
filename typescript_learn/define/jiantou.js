/**
 * Created by huk on 17/5/16.
 */
// var sum = (arg1,arg2) => arg1+arg2;
var sum = function (n1, n2) {
    return n1 + n2;
};
var arr1 = [1, 2, 3, 4, 5];
// var filt = arr1.filter(value => value%2 ==1);
var filt = arr1.filter(function (value) {
    return value % 2 == 1;
});
console.log(filt);
//# sourceMappingURL=jiantou.js.map