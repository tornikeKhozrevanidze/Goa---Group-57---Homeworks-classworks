// 1)კომენტარის სახით ახსენით და განმარტეთ რა არის DOM და რაში გვეხმარება იგი

// document objext model - მთლიანი html-ს ობიექტის მოდელი მისი ყველა ელემენტის ჩათვლით ყველა





// 2)კომენტარის სახით ახსენით თუ რას გვიბრუნებს getElementByTagName("")

// ლისტს რომელშიც არის ყველა ელემეტი მოცემული თეგის








// 3)შექმენით 5 სათაური,შენი დავალებაა რომ ეს 5 სათაური წამოიღო ჯს ში tagName ის გამოყენებით და შეინახო ცვლადში,შემდეგ შენი დავალებაა რომ innerHTNL ის გამოყენებით შეცვალალო ყველა სათაურის შიგთავსი(ტექსტი) ცალ ცალკე(ინდექსების გამოყენებით რითიც თქვენ გინდათ, ამის შემდეგ როცა შეცვლით 5 ივე ს კონტენტს გამოიტანეთ 5 ივე სათაურის შიგთავსი კონსოლში გამოიყენეთ  innerHTML

let h1 = document.getElementsByTagName('h1');
h1[0].innerHTML = 5;
h1[1].innerHTML = 4;
h1[2].innerHTML = 3;
h1[3].innerHTML = 2;
h1[4].innerHTML = 1;

console.log(h1[0].textContent)

console.log(h1[1].textContent)

console.log(h1[2].textContent)

console.log(h1[3].textContent)

console.log(h1[4].textContent)

console.log('---------------------------');





// 4)გვერდზე გქონდეს სამი <p> ტეგი.
// JS-ით getElementsByTagName("p") გამოიტანე პირველი <p> და
// მისი textContent-ი შეცვალე --> "khachapuri" ით .გამოიყენე textCXontent

let p = document.getElementsByTagName('p');
p[0].textContent = 'khachapuri'








// 5)გვერდზე იყოს 5 <li>.
// მიწვდი მესამე li ს
// და textContent გააკეთე ცარიელი სტრინგი ანუ ამოშალე მასში მყოფი ტექსტი:

let li = document.getElementsByTagName('li');
li[0].textContent = ""









// 6)გვერდზე იყოს ორი <p>.
// JS-ით გაცვალე ერთმანეთის textContent-ები
// (პირველის ტექსტი გახდეს მეორის და პირიქით).

let a = p[3].textContent;
let b = p[4].textContent;

p[3].textContent = b;
p[4].textContent = a;






// 7)შექმენი 6 ცალი პარაგრაფი,წამოიღე ყველა პარაგრაფი tagName ის გამოყენებით და შეინახე ცვალადში,შემდეგ დააკონსოლლოგე იმ სიის სიგრძე რომელშიც ინახავ ყველა პარაგრაფს////ასევე ამ სიას გადაუარე for ციკლით და გამოიტანე თითოეული ელემენტის textContent ცალ ცალკე

console.log(p.length);

for(let i of p){
    console.log(i.textContent)
}

console.log('---------------------------');









// 8)შექმენი 5 ცალი i თეგი და მოათავსე რაიმე ტექსტი შიგნით,შენი დავცალებაა რომ წამოიღო ყველა i თეგი და შეინახო ცვლადში,შენი დავალებააა რომ ყველა i თეგში მყოფი ტექსტი textContent ის გამოყენებით შეცვალო --> "viri" ით /გამოიყენე while loop/for loop ორივე

let i = document.getElementsByTagName('i');
for(let b of i){
    b.textContent = 'viri'
}








// 9)დააგენერირე რენდომ მთელი რიცხვები 50 დან 100 ჩათვლით/////1 დან 10 ჩათვლით /// 5 დან 25 მდე///

let num = Math.floor(Math.random() * 51) +50;
console.log(num);

let num2 = Math.floor(Math.random() * 10) + 1;
console.log(num2);

let num3 = Math.floor(Math.random() * 21) + 5;
console.log(num3);

