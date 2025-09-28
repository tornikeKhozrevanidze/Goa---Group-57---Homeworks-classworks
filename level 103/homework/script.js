// 1)შექმენი ფუნქცია sumArray(arr), რომელიც მიიღებს რიცხვების სიას პარამეტრად და დააბრუნებს სიაში მყოფი რიცხვების  ჯამს.

const sumArray = (arr)=>{
    let sum = 0;
    for(let i of arr){
        sum += i
    };
    return sum
}

console.log(sumArray([1, 2, 3, 4]));

console.log('--------------------')








// 2)დაწერე ფუნქცია countEvenOdd(arr), რომელიც მიიღებს რიცხვების სიას და დაბეჭდავს რამდენია ლუწი და რამდენი კენტი.

const countEvenOdd = (arr)=>{
    let odd = 0;
    let even = 0;
    for(let i of arr){
        if(i % 2 == 0){
            even ++
        }else{
            odd ++
        }
    };
    return `there is ${odd} odd and ${even} even`
}

console.log(countEvenOdd([1, 2, 3, 4, 5]))

console.log('--------------------')










// 3)შექმენი ფუნქცია findMax(arr) – მიიღოს სია და დააბრუნოს უდიდესი რიცხვი. (შეგიძლიათ მოიძიოთ და გააკეთოთ, საჭროა ლოგიკის დაწერა რომ ეს დავალება შეასრულოთ)

const findMax = (arr)=>{
    let max = arr[0];
    for(let i of arr){
        if(i > max){
            max = i
        };
    };
    return max
}

console.log(findMax([11, 2, 44, 3]))

console.log('--------------------')









// 4)შექმენი ფუქნცია findMin(arr) – მიიღოს სია და დააბრუნოს ყველაზე პატარა რიცხვი. (შეგიძლიათ მოიძიოთ და გააკეთოთ, საჭროა ლოგიკის დაწერა რომ ეს დავალება შეასრულოთ)


const findMin = (arr)=>{
    let min = arr[0];
    for(let i of arr){
        if(i < min){
            min = i
        };
    };
    return min
}

console.log(findMin([11, 2, 44, 3]))

console.log('--------------------')









// 5)შექმენით ფუნქცია average(arr) – მიიღოს რიცხვების სია და დააბრუნოს მათი საშუალო (ჯამი / რაოდენობა).

const average = (arr)=>{
    let sum = 0;
    let count = 0;
    for(let i of arr){
        sum += i;
        count ++
    }   
    return sum / count
}

console.log(average([1, 2, 3, 4]))

console.log('--------------------')










// 6)შექმენით ფუნქცია რომელსაც გადასცემთ არგუმენტად სიას --> ["გიორგი" , 14 , "საბა" , 90.5 , "ირაკლი" , true]


// ----შენი დავალებაა რომ ამ სიაში მყოფი მესამე ინდექსზე მდგომი ელემენტი შეცვალო --> 10.89 ით

// ----შენი დავალებაა რომ ამ სიაში მყოფი მეხუთე ინდექსზე მდგომი ელემენტი შეცვალო ---> false ით

// ---შენი დავალებაა რომ ამ სიაში მყოფი პირველ ინდექსზე მდგომი ელემენტი შეცვალო ---> "ირაკლი" ით

// --- ამ ყველა ელემენტის შეცვლის შემდეგ დააკონსოლლოგეთ საბოლოო სია 

const arr = ["გიორგი" , 14 , "საბა" , 90.5 , "ირაკლი" , true];

const change = (arr)=>{
    arr[3] = 10.89;
    arr[5] = false;
    arr[1] = 'irakli'
}

change(arr)

console.log(arr)

console.log('--------------------')














// 7)შექმენი ფუნქცია რომელსაც არგუმენტად გადაეცემა სია,შენი დავალებაა რომ ამ სიიდან გამოიტანო თითეული ელემენტი ცალ ცალკე,გამოიყენე for loop/while loop

const unknownFunc = (arr)=>{
    for(let i of arr){
        console.log(i)
    }
}

unknownFunc([1, 2, 3, 4])

console.log('--------------------');














// 8)შექმენი ფუქნცია რომელსაც გადაეცემა არგუმენტად სია,სადაც მოთავსებული იქნება განსხვავებული მონაცემთა ტიპის ელემენტები,შენი დავალეაბა რომ --> დაითვალო ამ სიაში სტრინგ ტიპის მონაცემების რაოდენობა და ინტეჯერ ტიპის მონაცემების ჯამი, ანუ სიაში უდნა დათვალო რამდენი სტრინგია,და ინტეჯერის შემთხვევაში უნდა გაიგო სიაში მყოფი ინტეჯერების(ნამბერების) ჯამი

const sums = (arr)=>{
    let strs = 0;
    let intSum = 0;
    for(let i of arr){
        if(typeof i == 'string'){
            strs ++;
        }else if(typeof i == 'number'){
            intSum += i;
        };
    }
    return `${strs} strings. ${intSum} - sum of the numbers`
}

console.log(sums(['tt', 3, 5, 6]))


console.log('--------------------');













// 9)შექმენი ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია,შენი დავალებაა რომ გაიგო ამ სიაში მყოფი ლუწი რიცხვების რაოდენობა და კენტი რიცხვების ჯამი

const evenOddCounter = (arr)=>{
    let evenCount = 0;
    let oddSum = 0;
    for(let i of arr){
        if(i % 2 == 0){
            evenCount ++;
        }else{
            oddSum += i;
        }
    }
    return `${evenCount} evens. ${oddSum} - sum of the odds`
}

console.log(evenOddCounter([8, 3, 5, 6]))


console.log('--------------------');









// 10)შექმენი ფუნქცია რომელსაც გადაეცემა სტრინგები და ინტეჯერები,შენი დავალებაა რომ თუ სიაში მყოფი რომელიმე ელემენტი არის სტრინგ ტიპის,ასეთი ელემენტი ჩაანაცვლო true - ით

const changeToBool = (arr)=>{
    for(let i = 0; i < arr.length; i ++){
        if(typeof arr[i] == 'string'){
            arr[i] = true
        }
    };

}

let newArr = ['weew', 6, 7, 3]

changeToBool(newArr)

console.log(newArr)