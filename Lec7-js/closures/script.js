// Closures
function makeMultiplier(multiplier){ // var multiplier = 2;
    var a = 5;
    return (
        function (x){
            return multiplier * x * 5;
        }
    )
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));