// 1) კომენტარის სახით ჩამოწერეთ თუ რა სიის ფუნქციები ვისწავლეთ და ახსენით რომელი რას აკეთებს

// push - სიის ბოლოში ჩამატება
// pop - სიის ბოლო წევრის ამოშლა
// shift - სიის თავში წაშლა
// unshift - სიის თავში ჩამატება








// 2)გადახედეთ რესურსებს

// 2)
// push----
// ფუნქციამ მიიღოს სია და ახალი ელემენტი. ახალი ელემენტი დაამატოს სიის ბოლოს და დააბრუნოს განახლებული სია.

const newElement = (arr, newElement)=>{
    arr.push(newElement);
    return arr
}
console.log(newElement([1,2,3], 4));






// ფუნქციამ მიიღოს სია და სტუდენტის სახელი. დაამატოს სტუდენტი სიის ბოლოს და დაბეჭდოს: "სტუდენტი დამატებულია!".

const newStudent = (arr, newStudent)=>{
    arr.push(newStudent);
    return 'new student added'
}

console.log(newStudent(['nika', 'gio'], 'luka'))






// pop----
// ფუნქციამ მიიღოს სია. სიის ბოლო ელემენტი წაშალოს და დააბრუნოს წაშლილი ელემენტი.

const pop = (arr)=>{
    let a = arr.pop();
    return a
}

console.log(pop([1,2,3]))






// ფუნქციამ მიიღოს სია (მაგ. პროდუქტების). ამოიღოს ბოლო პროდუქტი და დაბეჭდოს: "გაყიდული პროდუქტი იყო: ..."

const products = (arr)=>{
    let a = arr.pop();
    return `selled product - ${a}`
}

console.log(products([1,2,3]))







// unshift----
// ფუნქციამ მიიღოს სია და ახალი ელემენტი. ახალი ელემენტი დაამატოს სიის დასაწყისში და დააბრუნოს განახლებული სია.

const unshift = (arr, neww)=>{
    arr.unshift(neww);
    return arr;
};

console.log(unshift([1,2,3], 0))







// ფუნქციამ მიიღოს სია და ქალაქის სახელი. დაამატოს ეს ქალაქი სიის დასაწყისში და დააბრუნოს სია.

const city = (arr, city)=>{
    arr.unshift(city);
    return arr;
};

console.log(city(['gori'], 'tbilisi'))





// shift----
// ფუნქციამ მიიღოს სია. წაშალოს პირველი ელემენტი და დააბრუნოს განახლებული სია.

const shift = (arr)=>{
    arr.shift();
    return arr;
};

console.log(shift([1,2,3]))







// length----
// ფუნქციამ მიიღოს სია და დააბრუნოს ტექსტი: "სიაში არის N ელემენტი".

const lenght = (arr)=>{
    return `there is ${arr.length} elements in the array`;
};

console.log(lenght([1,2,3]))






// concat----
// ფუნქციამ მიიღოს ორი სია და დააბრუნოს ახალი სია, სადაც გაერთიანებულია ორივე.

const concat = (arr1, arr2)=>{
    arr1 = arr1.concat(arr2);
    return arr1;
};

console.log(concat([1,2,3], [4,5,6]))






// ფუნქციამ მიიღოს ორი სია: სახელების სია და გვარების სია. გააერთიანოს ისინი და დააბრუნოს სრული სია.

const names = (arr1, arr2)=>{
    arr1 = arr1.concat(arr2);
    return arr1;
};

console.log(names(['nika', 'gio'], ['miqeladze', 'samsiani']))









// push + pop----
// ფუნქციამ მიიღოს სია.

// დაამატოს "test" ბოლოში,

// შემდეგ მოაშოროს ბოლო ელემენტი.
// ბოლოს დააბრუნოს მიღებული სია.

const func = (arr)=>{
    arr.push('test');
    arr.pop();
    return arr
};

console.log(func([1,2,3]))









// unshift + shift----
// ფუნქციამ მიიღოს სია.

// დასაწყისში ჩასვას "hello",

// შემდეგ წაშალოს პირველი ელემენტი.
// დააბრუნოს მიღებული სია.

const func2 = (arr)=>{
    arr.unshift('hello');
    arr.shift();
    return arr
};

console.log(func2([2,3,4]))







// concat + length----
// ფუნქციამ მიიღოს ორი სია. გააერთიანოს და დაბეჭდოს გაერთიანებული სიის სიგრძე.

const func3 = (arr1, arr2)=>{
    let neww = arr1.concat(arr2);
    return neww.length;
};

console.log(func3([1,2], [3,4]))







// ყველა ერთად----
// ფუნქციამ მიიღოს სია.

// დასაწყისში ჩასვას "A"

// ბოლოში ჩასვას "Z"

// წაშალოს პირველი ელემენტი

// წაშალოს ბოლო ელემენტი

// სხვა მეორე სიასთან გააერთიანოს(შექმენით თქვენით ახალი სია)

// დაბეჭდოს: "საბოლოო სიის სიგრძე არის: ... და საბოლოო სიაა ..."

const func4 = (arr1, arr2)=>{
    arr1.pop();
    arr1.shift();
    arr1.push('Z');
    arr1.unshift('A');
    arr1 = arr1.concat(arr2);
    console.log(arr1);
    console.log(arr1.length)
};

func4([1,2,3], [1,2,3])