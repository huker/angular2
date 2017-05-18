/**
 * Created by huk on 17/5/16.
 */
function getStock() {
    var _this = this;
    this.name = 'ibm';
    setInterval(function () {
        console.log('stock is' + _this.name);
    }, 1000);
}
getStock();
//# sourceMappingURL=this.js.map