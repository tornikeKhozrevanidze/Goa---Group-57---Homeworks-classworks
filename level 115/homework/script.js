// 1)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე მისი მთელი ნაწილი Math.floor()-ის გამოყენებით.

let i = Number(prompt('enter number: '));
console.log(Math.floor(i));

console.log('------------------------');







// 2)მომხმარებელს შემოატანინე ათწილადი და გამოიტანე მისი მომდევნო მთელი რიცხვი Math.ceil()-ის გამოყენებით.

let u = Number(prompt('შეიყვანე ათწილადი: '));
console.log(Math.ceil(u));

console.log('------------------------');







// 3)შექმენი ორი ცვლადი — a და b, მიენიჭე მათ რიცხვები და გამოიტანე რომელი მათგანი უფრო დიდია Math.max()-ის გამოყენებით.

let a = 4;
let b = 5;
let c = 3;
console.log(Math.max(a, b))

console.log('------------------------');








// 4)შექმენი სამი ცვლადი და შეინახე სამივეში რიცხვი --> გამოიტანე მათგან მინიმალური მნიშვნელობა Math.min()-ის გამოყენებით.

console.log(Math.min(a, b, c))

console.log('------------------------');









// 5)დააგენერირე შემთხვევითი რიცხვი 0-დან 1-მდე Math.random()-ის გამოყენებით.

console.log(Math.random());

console.log('------------------------');







// 6)დააგენერირე შემთხვევითი  (მთელი) რიცხვი 1-დან 10-მდე, Math.random()-ისა და Math.floor()-ის კომბინაციით.

console.log(Math.floor(Math.random() * 10));

console.log('------------------------');






// 7)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე მისი კვადრატული ფესვი Math.sqrt()-ის გამოყენებით.

console.log(Math.sqrt(i));

console.log('------------------------');







// 8)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე მისი ხარისხი (მაგ. კვადრატი ან კუბი) Math.pow()-ის გამოყენებით.

console.log(Math.pow(i, 2));

console.log('------------------------');






// 9)დააგენერირე 5 შემთხვევითი მთელი რიცხვი 1-დან 100-მდე და იპოვე ამ რიცხვებიდან
// მინიმალური და მაქსიმალური მნიშვნელობა Math.random(), Math.floor(), Math.min() და Math.max()-ის გამოყენებით.

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let num3 = Math.floor(Math.random() * 100);
let num4 = Math.floor(Math.random() * 100);
let num5 = Math.floor(Math.random() * 100);

console.log(num1, num2, num3, num4, num5);

console.log('------------------------');






// 10)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე:

// მისი კვადრატი (Math.pow()),

// ფესვი (Math.sqrt()),

// დამრგვალებული მნიშვნელობა (Math.round()).
// ყველა შედეგი ცალ-ცალკე გამოიტანე console.log()-ით.

console.log(Math.pow(i, 2));
console.log(Math.sqrt(i));
console.log(Math.round(i));

console.log('------------------------');





// 11)შექმენი პატარა “მათემატიკური თამაში”:
// დააგენერირე შემთხვევითი რიცხვი 1-დან 10-მდე.
// მომხმარებელს შემოატანინე რიცხვი.
// თუ მომხმარებლის რიცხვი დაემთხვა დაგენერირებულს — გამოიტანე "სწორია!",
// სხვა შემთხვევაში "ცდები!".

let num = Math.floor(Math.random() * 10);
let number = Number(prompt('enter num: '));

if(num === number){
    console.log("სწორია!");
}else{
    console.log("ცდები!");
}

