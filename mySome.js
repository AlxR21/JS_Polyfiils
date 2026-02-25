Array.prototype.meSome = function(callback){
    
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            return true;
        }
    }
    return false;
}

console.log([2, 4, 6].meSome((item) => item%2==1))