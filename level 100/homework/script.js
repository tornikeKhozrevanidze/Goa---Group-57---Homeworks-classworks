// 1)დავალება 1 – ლუწი/კენტი მთვლელი

// მომხმარებელს prompt–ით შეეკითხე ორი რიცხვი: start და end.

// გამოიყენე for ციკლი, რომ გაიარო ყველა რიცხვი start-იდან end-მდე.

// დაითვალე ცალ–ცალკე რამდენია ლუწი და რამდენია კენტი.

// ბოლოს დაბეჭდე: "ლუწების რაოდენობა: X, კენტების რაოდენობა: Y".

let start = Number(prompt('enter start number: '));
let end = Number(prompt('enter end number: '));

let even = 0;
let odd = 0;
console.log(start, end)
for(let i = start; i <= end; i ++){
    if(i % 2 == 0){

        even ++
    }else{
        odd ++
    }
}

console.log(`number of even: ${even}, number of odd: ${odd}`);








// 2)მომხამრებელს შემოატანინე ორი რიცხვი start და end ი ,შემდეგ დაატიალეთ ფორ ციკლი start იდან end ის ჩათცლით და ამ გაიგე ამ რიცხვების ჯამი,შეინახე ეს ჯამი ცვლადში და შემდეგ გამოთვალეთ საშაუალო არითმეტიკული და გამოიტანეთ კონსოლში
let start2 = Number(prompt('enter start number: '));
let end2 = Number(prompt('enter end number: '));

let sum = 0

for(let i = start2; i <= end2; i ++){
    sum += i;
}

let arithmetic = sum / (end2 - start2);
console.log(arithmetic)












// 3)მომხმარებელს prompt–ით შეეკითხე რიცხვი.

// თუ რიცხვი > 0 → დაბეჭდე "დადებითია".

// თუ რიცხვი < 0 → დაბეჭდე "უარყოფითია".

// თუ 0 → დაბეჭდე "ნულია".

let num = Number(prompt('enter number: '))

if(num > 0){
    console.log('greater then zero')
}else if(num < 0){
    console.log('less then zero')
}else{
    console.log('it is zero')
}










// 4)მომხმარებელს შეეკითხე ქულა (0–100).

// თუ ქულა < 50 → "ჩაიჭერი".

// თუ 50–69 → "საშუალო".

// თუ 70–89 → "კარგი".

// თუ 90–100 → "ძალიან კარგი".

// თუ სხვა რიცხვი შეიყვანა → "არასწორი მონაცემი".

let number = Number(prompt('enter number: '));

if(number < 50){
    console.log('ჩაიჭერი')
}else if(number >= 50 && number <= 69 ){
    console.log('საშუალო')
}else if(number >= 70 && number <= 89 ){
    console.log('კარგი')
}else if(number >= 90 && number <= 100 ){
    console.log('ძალიან კარგი')
}else{
    console.log('error')
}







// 5)prompt–ით მომხმარებელს შეეკითხე სამი რიცხვი.

// გამოიყენე if/else რომ იპოვო:

// ყველაზე დიდი რიცხვი

// ყველაზე პატარა რიცხვი

// შემდეგ შეამოწმე:

// თუ ყველაზე დიდი რიცხვი ლუწია → დაბეჭდე "ყველაზე დიდი რიცხვი ლუწია"

// თუ კენტია → "ყველაზე დიდი რიცხვი კენტია"


let num1 = Number(prompt('enter first number: '));
let num2 = Number(prompt('enter second number: '));
let num3 = Number(prompt('enter third number: '));

let biggest;

if(num1 > num2 && num1 > num3){
    console.log('num1 is biggest');
    biggest = num1;
}else if(num2 > num1 && num2 > num3){
    console.log('num2 is biggest');
    biggest = num2;
}else if(num3 > num1 && num3 > num2){
    console.log('num3 is biggest');
    biggest = num3;
}


if(num1 < num2 && num1 < num3){
    console.log('num1 is lowest');
}else if(num2 < num1 && num2 < num3){
    console.log('num2 is lowest');
}else if(num3 < num1 && num3 < num2){
    console.log('num3 is lowest');
}

if(biggest % 2 == 0){
    console.log('buggest number is even');
}else{
    console.log('biggest number is odd')
}