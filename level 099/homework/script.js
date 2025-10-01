// hw1. მომხმარებელს შემოატანინეთ სტრინგი,თქვენი დავალებაა შეამოწმო,თუ მომხმარებლის მიერ შემოყვანილი სახელის პირველი ასო არის "g" მაშინ დაუკონსოლლოგე რომ შენ ხარ "chad" სხვა შემთხვევაში დააკონსოლლოგე რომ "still chad"(ყვემ უნდა იცოდეთ გახსენების გარეშე თუ როგორ მიწწვდეთ სტრინგშ რომელიმე ასოს ცალკე თუ არა და მოიძიეთ)


let name = prompt('enter your name: ');
if(name[0] === 'g'){
    console.log('you are a chad')
}else{
    console.log('you are still chad')
}







// hw2. მომხმარებელს შემოატანინეთ სახელი და რიცხვი,შემდეგ შეამოწმეთ,თუ მომხმარებლის მიერ შემოტანილი სახელი არის "გიორგი" და მომხმარებლის მიერ შემოტანილი რიცხვი არის 18 ზე მეტი მაშნ დაუკონსოლლოგეთ "your name is giorgi and you are adult" თუ მომხმარებლის მიერ შემოტანილი სახელი არის ნიკა და ასაკი არის 18 ზე ნაკლები და 11 ზე მეტი დაუკონსოლლოგეთ რომ "your name is nika and you are younger" თუ მომხმარებლის მიერ შემოტანილი სახელი არის "saba" ან "irakli" და ასაკი არის 11 ზე ნაკლები და 5 ზე მეტი მაშინ დაუკონსოლლოგეთ რომ "you have nice name but you are too young" სხვა შემთხვევაში დაუპრინტე რომ you are not born yet D

let n = prompt('enter your name: ');
let age = parseInt(prompt('enter your age: '));

if(n === 'giorgi' & age > 18){
    console.log("your name is giorgi and you are adult")
}else if(n === 'nika' & age < 18){
    console.log("your name is nika and you are younger")
}else if(n === 'nika' & age < 18 & age > 11){
    console.log("your name is nika and you are younger")
}else if(n === 'irakli' || n === 'saba' & age < 11 & age > 5){
    console.log("you have nice name but you are too young")
}else{
    console.log('you are not born yet')
}





// hw3. დაატრიალეთ ფორ ციკლი 1 დან 60 ჩათვლით,შენი დავალებაა კონსოლში გამოიტანო მხოლოდ ისეთი რიცხვების ჯამი რომელიც უნაშთოდ იყოფა 3 ზეც და 5 ზეც ერთად, მაგალითად ასეთრიცხვებია 15 , 30 ...
for(let i = 0; i <= 60; i ++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i)
    }
}






// hw4. დაატრიალეთ for loop 40 დან 1 მდე უკუღმა(სცადეთთუ არა და მოიძიეთ)
for(let i = 40; i >= 0; i --){
    console.log(i)
}






// hw5. მომხმარებელს შემოატანინეთ რაიმე რიცხვი(მაგრამ ეს რიცხვია არ ვიცით სტრინგია თუ ნამბერი) შენი დავალებაა შეამოწმო თუ მომხმარებლის მიერ შემოტანილი რიცხვის ტიპი არის სტრინგი მაშინ დაუკონსოლლოგე რომ "you entered string number,so you are wrong" სხვა შემთხვევაში ანუ თუ მომხმარებელმა შემოიტანა რიცხხვი რომლის ტიპი არის number მაშინ დაატრიალეთ ფორ ციკლი 1 დან ამ რიცხვამდე და გამოიტანეთ ყველა კენტი რიცხვი კონსოლში(წინაზე ვისაუბრეთ ფუნქციაზე რომელიც იგებდა ელემენტის ტიპს,გაიხსენეთ თუა რადა მოიძიეთ,მე არ მომწეროთ არ დაგეხმარებით იჭყლიტეთ თავები ამ დავალებებზე,you will gain skill of looking up something by yourself <3 :D

let num = Number(prompt('enter number: '));

if(isNaN(num)){
    console.log("you entered string number,so you are wrong")

}else{
    for(let i = 0; i <= num; i ++){
        console.log(i)
    }
}