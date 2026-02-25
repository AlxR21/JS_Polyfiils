Array.prototype.myEvery = function(callback){
    let res = true;

    for(let i = 0; i < this.length; i++){
        if(!callback(this[i])){
            res = false
        }
    }

    return res;
}
console.log([2, 4, 6 , 9].myEvery((item) => item % 2 == 0));
