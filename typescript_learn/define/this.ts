/**
 * Created by huk on 17/5/16.
 */

function getStock(){
    this.name = 'ibm';
    setInterval( ()=> {
        console.log('stock is'+this.name)
    },1000);
}

getStock();