// 1.
console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));

console.log('----------------------');





// 2.

console.log(Math.round(4.7));
console.log(Math.floor(9.1));
console.log(Math.ceil(-3.6));


console.log('----------------------');






// 3.

console.log(Math.pow(3, 5));
console.log(Math.pow(5, 2));
console.log(Math.pow(2, 1));



console.log('----------------------');





// 4.

console.log(Math.sqrt(25));
console.log(Math.sqrt(144));
console.log(Math.sqrt(2));




console.log('----------------------');





// 5.

console.log(Math.abs(-8.3));
console.log(Math.abs(5 - 12));




console.log('----------------------');






// 5.

const calculate = function(num){
    console.log(Math.pow(num, 2));
    console.log(Math.sqrt(num));
    console.log(Math.floor(num));
}

calculate(5.5)



console.log('----------------------');






// 5.

const pythagoras = function(a, b){
    let n = Math.pow(a, 2) + Math.pow(a, 2);
    return Math.sqrt(n);
}

console.log(pythagoras(2, 2))



console.log('----------------------');