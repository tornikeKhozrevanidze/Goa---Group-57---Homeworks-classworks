// 1)შექმენი ობიექტი person, რომელსაც ექნება ველები: name, age, city.
// კონსოლში გამოიტანე მხოლოდ name და city.
const person = {
    name : 'toka',
    age : 18,
    city : 'tbilisi'
}

console.log(person.name);
console.log(person.city);



console.log('------------------------------------');


// 2)შექმენი ობიექტი book რომელსაც ექნება key ები: title, author, pages.
// გამოიტანე მხოლოდ author-ის მნიშვნელობა.

const book = {
    title : 'Harry Potter',
    author : 'JK',
    pages : 200
}
console.log(book.author)


console.log('------------------------------------');







// 3)შექმენი ობიექტი student, რომელსაც ექნება key ები: firstName, lastName, grade, age.
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value.

const student = {
    firstName : 'nika'
    , lastName : 'abciauri'
    , grade : 7
    , age : 12
}

console.log(Object.values(student))



console.log('------------------------------------');







// 4)შექმენი ობიექტი book ველებით: title, author, pages.
// Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key.
// ასევე
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value.

console.log(Object.keys(book));
console.log(Object.values(book));

console.log('------------------------------------');






// 5)შექმენი ობიექტი movie ველებით: name, genre, rating.
// Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key ცალ ცალკე ხაზზე (for loop)
// ასევე
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value ცალ ცალკე ხაზზე (for loop)

const movie = {
    name : 'interstelar',
    genre : 'scientific', 
    rating : 9
}

for(let i in movie){
    console.log(i, '=', movie[i])
}

console.log('------------------------------------');






// 6)შექმენი ობიექტი student = {name: "Gio", age: 16, grade: "A"}
// წაშალე age და grade ფროფერთიები

const student2 = {name: "Gio", age: 16, grade: "A"}

console.log(student2)

delete student2.age;
delete student2.grade;

console.log(student2)


console.log('------------------------------------');






// 7)შექმენი ობიექტი car = {brand: "Toyota", model: "Camry", year: 2020}
// წაშალე model და დაბეჭდე კონსოლში მხოლოდ დარჩენილი ობიექტი(რომ დაწრუნდე მართლა ამოიშალა თუარა)

const car = {brand: "Toyota", model: "Camry", year: 2020};

console.log(car);

delete car.model;

console.log(car);

console.log('------------------------------------');





// 8)შექმენი ობიექტი book = {title: "1984", author: "Orwell", pages: 328}
// წაშალე pages  და კონსოლში დაბეჭდე ის  ქიები რომლებიც დარჩა ობიექტში.

const book2 = {title: "1984", author: "Orwell", pages: 328};

console.log(book2);

delete book2.pages;

console.log(book2);


console.log('------------------------------------');






// 9)შექმენი ობიექტი person = {name: "Ana", age: 20}
// დაამატე ახალი key 
// სახელად city მნიშვნელობით "Tbilisi".
// ასევე დაამატე height მნიშვნელობით --> 1.90

const person2 = {name: "Ana", age: 20};

console.log(person2);

person2.city = 'tbilisi';
person2.height = 1.9;

console.log(person2);

console.log('------------------------------------');






// 10)შექმენით ობიექტი რომელიც იქნება ცარიელი,შენი დავალებაა რომ ამ ობიექტშ დაამატო 5 property,შემდეგ დააკონსოლლოგეთ(რომ შეამოწმოთ შეივსო(დაემატა)თუ არა ,და ამის შემდეგ ამოშალოთ 2 property (ბოლოს დააკონსოლლოგეთ რომ ნახოთ ამოიშალა თუარა)

const empty = {

};

console.log(empty);

empty.first = 1;
empty.second = 2;
empty.third = 3;
empty.fourth = 4;
empty.fifth = 5;

console.log(empty);

delete empty.fifth;
delete empty.fourth;

console.log(empty);

console.log('------------------------------------');




// 11)შექმენი ობიექტი phone = {brand: "Apple"}
// დაამატე model და price ველები, შემდეგ ტერმინალში გამოიტანეთ ყველა value სიის სახით და ასევე ყველა key სიის სახით

const phone = {brand: "Apple"};

phone.model = '17 pro';
phone.price = 5000;

console.log(Object.keys(phone));
console.log(Object.values(phone));

console.log('------------------------------------');







// 12)შექმენი ობიექტი --> car = {"car brand" : "bmw" , "car model" ; "g30" , "car year" : "2013" }
// ცონსოლში გამოიტანე ცალ ცალკე ყველა value გამოიყენეთ მეორე გზა რომელიც ვისწავლეთ ობიექტიდან ელემენტის წამოსაღებად

const car2 = {"car brand" : "bmw" , "car model" : "g30" , "car year" : "2013" };

for(let i in car2){
    console.log(car2[i])
}

console.log('------------------------------------');





// 13)აუცილებლად
// გადახედეთ რესურსებს

console.log('check!')