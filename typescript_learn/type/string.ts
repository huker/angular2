/**
 * Created by huk on 17/5/16.
 */
let content = `iiii
nnnnnn
ccccc`;

var str1 = "huk";

var getName = function () {
    return "huk"
};

console.log(`hi ${str1}`);
console.log(`hi ${getName()}`);

console.log(`<div>
<span>${str1}</span>
</div>
`);