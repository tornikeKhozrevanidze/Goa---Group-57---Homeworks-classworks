// 1)მომხმარებელს შემოატანინე რაიმე რიცხვი,1 დან მომხმარებლის შემოტანილ რიცხვამდე დათვალე თუ რამდენი ლუწი და რამდენი კენტი რიცხვია
let odd = 0;
let even = 0;
let num = Number(prompt('enter number: '));
for(let i = 0; i <= num; i ++){
    if(i % 2 == 0){
        even ++
    }else{
        odd ++
    }
}
console.log(even);
console.log(odd)


console.log('-------------------------------------------');




// 2)მომხმარებელს შემოატანინე ორი რიცხვი,მომხმარებლის მიერ შემოტანილი პირველი რიცხვიდან მეორე რიცხვამდე იპოვეთ ყველა ლუწი რიცხვის ჯამი
let num2 = Number(prompt('enter second number: '));
let evenSum = 0;
for(let i = num; i <= num2; i ++){
    if(i % 2 == 0){
        evenSum += i;
    }
};
console.log(evenSum)


console.log('-------------------------------------------');













// 3)მომხმარებელს შემოატანინეთ რაიმე რიცხვი,სანამ მომხმარებელი არ შემოიტანს 0 იანს იქამდე გაუმეორეთ რომ თავიდან შემოიტანოს რიცხვი
let mustZero = Number(prompt("enter any number: "));
if(mustZero != 0){
    alert('The number must be zero');
    console.log('The number must be zero')
}else{
    console.log(mustZero)
}
console.log('-------------------------------------------');








// 4)მომხმარებელს შემოატანინეთ სტრინგი,სანამ მომხმარებელი არ შემოიტანს თქვენს სახელს იქამდე გაუმეორეთ რომ თავიდან შემოიყვანოს სახელი,ასევე დაითვალეთ ცდების რაოდენობა თუ რამდენჯერ სცადა მომხმარებელმა შემოტანა,ამისთვის დაგჭრდებათ თავიდან შექმნათ ცვლადი და გაუტოლოთ 0 ს,და ყოველ ჯერზე როცა მომხმარებელი შეიყვანს არასწორ ინფოს განაახლოთ ამ ცვლადის მნიშვნელობა,ბოლოს როცა გაარტყავს და შემოიყვანს თქვენს სახელს დაუკონსოლლოგეთ --> "you guessed my name and your attempts is : ...
let attempts = 0;
let myName = prompt('enter my Name: ');
attempts ++

while(myName != 'tornike'){
    attempts ++

    myName = prompt('enter my Name: ');
}
console.log(attempts);
console.log('-------------------------------------------');











// 5)შექმენი ცვლადი სადაც მომხმარებელს შემოატანინებ სტრინგს(პაროლს),ასევე შექმენი ცვლადი სადაც შეინახავ პაროლს,შემდეგ შეამოწმე,თუ მომხმარებლის შემოტანილი პაროლი არის იგივე პაროლი რაც შენ შეინახე ცვლადში,დაუპრინტე --> "you guessed" , სხვა შემთხვევაში დაგჭირდებათ ვაილ ლუპი რომელიც გააკეთებს შემოდეგ მოქმედებას --> სანამ მომხმარებლის პაროლი არ იქნება თქვენს მიერ შენახული პაროლისა,იქამდე გაუმეორეთ რომ თავიდან შემოიყვანოს მომხმარებელმა პაროლი,თუ პაროლი გაარტყა მაშინ აქაც დაუკონსოლლოგეთ --> "you guessed"

let password = 'karalemonizaptorologiuri';
let guessPasword = prompt('enter password: ');
if(guessPasword == password){
    console.log("you guessed")
}
while(guessPasword != password){
    guessPasword = prompt('enter password: ');
    if(guessPasword == password){
    console.log("you guessed")
    }
}


console.log('-------------------------------------------');












// 6)მომხმარებელს შემოატანინე რიცხვი,სანამ მომხმარებელი არ შემოიტანს 0 იანს იქამდე  შეამოწმეთ -->თუ მომხმარებლის შემოტანილი რიცხვი არის უარყოფითი დაუკონსოლლოგეთ --> "negative number" , თუ მომხმარებელმა შემოიტანა დადებითი რიცხვი დაუკონსოლლოგეთ --> "You entered posotive number" ,ამის შემდეგ კი თავიდან მოსთხოვეთ რომ შშემოიტანოს რიცხვი მომხმარებელმა,თუ შემოიტანა მომხმარებელმა 0 ეს იმას ნიშნავს რომ ვაილ ლუპი არ იმუშავებს და ქვემოთ მის გარეთ დაუკონსოლლოგეთ -- > "you guessed the number,the loop is over" 
let mustZero2 = Number(prompt('enter last number: '));
if(mustZero2 == 0){
    console.log("you guessed the number,the loop is over" );
};
while(mustZero2 != 0){
    if(mustZero2 < 0){
        console.log("negative number");
    }else if(mustZero2 > 0){
        console.log("possitive number")
    };
    mustZero2 = Number(prompt('enter last number: '))
}
console.log("you guessed the number,the loop is over" );