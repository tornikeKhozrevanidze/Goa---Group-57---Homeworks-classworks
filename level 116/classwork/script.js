// 1)Math.random() ის გამოუენებით დააგენერირეთ რიცხვები 0 დან 1 მდე

console.log(Math.random());






// 2))Math.random() ის გამოუენებით დააგენერირეთ რიცხვები 0 დან 20 მდე

console.log(Math.floor(Math.random() * 20) );





// 3)Math.random() ის გამოუენებით დააგენერირეთ რიცხვები 1 დან 20 ჩათვლით

console.log(Math.floor(Math.random() * 20) ) + 1;







// 4)შექმენით 4 ცალი h2 და ჩაწერე შიგნით რაიმე მტექსტები,შენი დავალებაა რომ წამოიღო ჯავასკრიპტში ეს ელემენტები TagName ის გამოყენებით და შეინახო ცვლადში,შენი დავალებაა რომ თითეული h2 გამოიტანო კონსოლში ინდექსების გამოყენებით

let h2 = document.getElementsByTagName('h2');

console.log(h2[0]);
console.log(h2[1]);
console.log(h2[2]);
console.log(h2[3]);
