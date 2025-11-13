// 1)შექმენი ობიექტი person, რომელსაც ექნება შემდეგი ველები: "first name", "last name", "age".
// კონსოლში გამოიტანე "first name" და "age".
const person = {
    'first name' : 'nika',
    'last name' : 'gorgadze',
    'age' : 10
}
console.log(person["first name"]);
console.log(person["age"]);


console.log('------------------------------------')




// 2)შექმენი ობიექტი car, რომელსაც ექნება "car brand", "model name" და "year".
// კონსოლში გამოიტანე "car brand" და "model name" მნიშვნელობები.

let car = {
    'year' : 1999,
    'model' : 'GL', 
    'brand' : 'mescedes'
}

console.log(car['model']);
console.log(car['brand']);


console.log('------------------------------------')









// 3)შექმენი ობიექტი book, რომელსაც ექნება "book title", "author name" და "page count".
// კონსოლში გამოიტანე "book title" და "author name".

const book = {
    "book title" : 'harry potter', 
    "author name" : 'Jk',
    "page count" : 3000
}

console.log(book["book title"]);
console.log(book["author name"])

console.log('------------------------------------');






// 4)შექმენი ობიექტი student, რომელსაც ექნება "full name", "grade level" და "favorite subject".
// კონსოლში გამოიტანე "favorite subject" მნიშვნელობა.

const student = {
    "full name" : 'nana nanari', 
    "grade level" : 9, 
    "favorite subject" : 'math'
}

console.log(student["favorite subject" ])

console.log('------------------------------------');








// 5)შექმენი ობიექტი movie, რომელსაც ექნება "name, "release year" და "main actor".
// კონსოლში გამოიტანე name და "main actor" მნიშვნელობები.

const movie  = {
    "name" : 'harry potter',
    "release year" : 2007,
    "main actor" : 'harry'
}

console.log(movie["main actor"])

console.log('------------------------------------');






// 6)შექმენი ობიექტი person, რომელსაც ექნება "name", "age" და "city".
// for...in ციკლით გამოიტანე თითოეული key და მისი value.

const person2 = {
    "name" : 'luki', 
    "age" : 22, 
    "city" : 'gori'
}

for(let i in person2){
    console.log(i, '=', person2[i])
}

console.log('------------------------------------');









// 7)შექმენი ობიექტი car, რომელსაც ექნება "brand", "model" და "year".
// for...in ციკლით კონსოლში დაწერე:
// 👉 "brand: BMW" — მსგავსი ფორმატით (ანუ key: value). გამოიყენეთ სტრინგ ფორმატი(f string) რომ ვიყენებდით ხოლმე პითონში ეგრე რესურსებში ჩაგდებულია ბოლოს და შეამოწმეთ

for(let i in car){
    console.log(i + ':', car[i])
}

console.log('------------------------------------');









// 8)შექმენი ობიექტი student, რომელსაც ექნება "age", "grade", "height", "score" ყველა მათგანს ვალუებად მიანიჭეთ მხოლოდ ნამბერ ტიპის მონაცემები.
// for...in ციკლით გადაუარე ამ ობიექტს და კონსოლში გამოიტანე მხოლოდ ის ვალუები რომელიც მეტია 50 ზე 

const student2 = {
    "age" : 10, "grade" : 3, "height" : 130, "score" : 8
}

for(let i in student2){
    if(student2[i] > 50){
        console.log(i, '=', student2[i])
    }
}

console.log('------------------------------------');







// 8)შექმენი ობიექტი movie, რომელსაც ექნება "title", "genre", "rating", "year" და ყველას მიანიჭეთ სტრინგ ტიპის მონაცემი.
// for...in ციკლით გადაუარეთ ობიექტს და გამოიტანეთ მხოლოდ ის სტრინგები რომელთა სიგრძე ნაკლებია 4 ზე

for(let i in movie){
    if(movie[i].length > 4){
        console.log(i, '=', movie[i])
    }
}


console.log('------------------------------------');








// 9)შექმენი ობიექტი fruit, რომელსაც ექნება "name", "color", "taste", "size".
// ყველას მიანიჭე სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც იწყება ასო "a"-ზე.

const fruit = {
    "name" : 'vashlatama', "color" : 'iasamnisferi', "taste" : 'ugemrielesi', "size" : 'didi'
}

for(let i in fruit){
    if(fruit[i][0] == 'a'){
        console.log(i)
    }
}


console.log('------------------------------------');







// 10)შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName", "class", "id".
// ყველა იყოს სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომელთა სიგრძე ტოლია 3-ის.

for(let i in student){
    if(student[i].length == 3){
        console.log(i, '=', student[i])
    }
}


console.log('------------------------------------');








// 11)შექმენი ობიექტი book, რომელსაც ექნება "title", "author", "genre", "lang".
// ყველა მიანიჭე სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც შეიცავენ ასო "o"-ს.

for(let i in book){
    if(i.includes('o')){
        console.log(i)
    }
}


console.log('------------------------------------');









// 12)შექმენი ობიექტი person, რომელსაც ექნება "name" და "age".
// ობიექტში დაამატე ფუნქცია სახელად showInfo, რომელიც კონსოლში გამოიტანს:`ჩემი სახელია ... და მე ვარ ... წლის ,გამოიყენე this keyword ი` ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი


const person3 = {
    name : 'guga',
    age : 20,
    showInfo(){
        return `my name is ${this.name}`
    }
}

console.log(person3.showInfo())

console.log('------------------------------------');






// 13)შექმენი ობიექტი car, რომელსაც ექნება "brand" და "model".
// ობიექტში დაამატე ფუნქცია სახელად fullName, რომელიც დააბრუნებს შემდეგნაირ ტიპის ტექსტს ---> `მე მყავს ... რომლის მოდელიც არის ...` ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

const car2 = {
    brand : 'toyota',
    model : 'supra',
    fullName(){
        return `i have ${this.brand}, the model is ${this.model}`
    }
}

console.log(car2.fullName())

console.log('------------------------------------');






// 14)შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName" და ფუნქცია სახელად getFullName(),
// რომელიც დააბრუნებს შემდეგნაირ ტექსტს --> `ჩემი სახელია ... და ჩემი გვარია ...` ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

const student3 = {
    f : 'nika',
    l : 'antadze',
    getFullName(){
        return `ჩემი სახელია ${this.f} და ჩემი გვარია ${this.l}`
    }
}

console.log(student3.getFullName())

console.log('------------------------------------');








// 15)შექმენი ობიექტი book, რომელსაც ექნება "title" და "author".ობიექტში დაამატე ფუნქცია სახელად info(),რომელიც დაარეთურნებს შემდეგ ტექსტს --> `ამ წიგნის ავტორი არის ... და ამ წიგნს ქვია ...`  ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

const book2 = {
    title : 'harry potter', 
    author : 'Jk',
    info(){
        return `ამ წიგნის ავტორი არის ${this.author} და ამ წიგნს ქვია ${this.name}`  
    }
}

console.log(book2.info())