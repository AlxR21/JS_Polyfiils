Array.prototype.myFilter = function(callback){
    let result = [];

    for(let i = 0; i <= this.length; i++){
    if(callback(this[i])){
        result.push(this[i]);
    }
    else{
        continue;
    }
    }

    return result;
}

const arr = [1, 2, 3, 4, 5];
// function div2(item){
//     return (item%2==0);
// }

console.log(arr.myFilter((num) => num%2==0));
