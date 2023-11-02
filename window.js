var name = "Salam";
function add(num1, num2){
    const result = num1 + num2;
    console.log(name);
    function double(num){
        return num * 2;
    }
    var total = double(result);
    return total;
}

console.log(name);
const back = add(5, 6);
console.log(back);