Array.prototype.myReduce = function(callback, initialValue){
    let result = initialValue;

    for(let i = 0; i < this.length; i++){
        result = callback(result, this[i]);
    }

    return result;
}

const arr = [1, 2, 3];
console.log(arr.myReduce((acc, item) => acc + item, 0));
