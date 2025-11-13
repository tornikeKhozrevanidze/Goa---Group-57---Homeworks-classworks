// 1)შექმენი ობიექტი ტქვენს შესახებ,უნდა გქონდეთ ინფორმაცია --> სახელი , გვარი , ასაკი , მისამართი, სიმაღლე , სასწავლებელი ადგილი,ამის შემდეგ კონსოლში გამოიტანეთ თითოეული value

const person = {
    name : 'tornike',
    surname : 'khozrevanidze',
    age : 18,
    adress : 'tbilisi',
    height : 171,
    uni : 'BTU'
};
console.log(person.name, person.surname, person.age, person.adress, person.height, person.uni );





   


// 2)შექმენით ობიექტი ,სადაც გექნებათ თავიდან 3 property(თქვენ რაზეც გინდათ) , ამის შემდეგ ამ ობიექტში დაამატეთ კიდევ 2 property ,(დააკონსოლლოგეთ ობიექტი რომ ნახოთ ჩაემატა თუ არა) ,ამის შემდეგ ამოშალეთ ობიექტიდან თავიდან თქვენს მოერ შექმნილი 3 property და დატოვეთ მხოლოდ ჩამატებულები, დააკონსოლლოგეთ ობიექტი რომ ნახოთ შედეგი ამოიშალა თუ არა 

const person2 = {
    name : 'nika',
    surname : 'abramia',
    age : 13,
};

person2.adress = 'tbilisi';
person2.height = 150;

console.log(person2);

delete person2.name;
delete person2.surname;
delete person2.age;

console.log(person2);