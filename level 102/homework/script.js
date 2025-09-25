// 1)ფუნქციამ მიიღოს ორი რიცხვი (start, end) და while loop–ით გადაუაროს ამ დიაპაზონს.

// თითო რიცხვისთვის შეამოწმეთ if else-ით:

// თუ ლუწია → დაბეჭდოს "ლუწია"

// თუ კენტია → "კენტია". გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

let evenOrOdd = (start, end)=>{
    for(let i = start; i <= end; i ++){
        if(i % 2 == 0){
            console.log(`${i} is even`);
        }else{
            console.log(`${i} is odd`);
        }
    }
}

evenOrOdd(2,5)

console.log('----------------------------------------');









// 2)ფუნქციამ მიიღოს სამი რიცხვი (a, b, c) და if else-ებით განსაზღვროს რომელი არის ყველაზე დიდი.

// დააბრუნოს შედეგი.


let biggest = (a, b, c)=>{
    if(a > b & a > c){
        return a
    }else if(b > c & b > a){
        return b
    }else if(c > a & c > b){
        return c
    }
};


console.log(biggest(1, 4, 3));

console.log('----------------------------------------');










// 3)ფუნქციამ მიიღოს პაროლი (პარამეტრი).

// while loop-ში მომხმარებელს (prompt) მოსთხოვოს პაროლი.

// სანამ შეყვანილი პაროლი არ დაემთხვევა სწორ პარამეტრს, მოსთხოვე თავიდან.

// თუ დაემთხვა → "წარმატებით!".

let password = (password)=>{
    let p;
    while(p != password){
        p = prompt('enter password: ');
    };
    alert('sucsessful')
}

password('oe')

console.log('----------------------------------------');













// 4)ფუნქციამ მიიღოს სამი ქულა(პარამეტრი) ---> (p1, p2, p3).

// შეკრიბეთ ეს ქულები.

// იპოვოს საშუალო და შეინახხეთ ცვლადში

// შემდეგ --> if else ით შეამოწმეთ

// თუ  საშუალო ≥ 51 → "დადებითი შედეგი".

// სხვა შემთხვევაში → "უარყოფითი შედეგი".

let sashualo = (p1, p2, p3)=>{
    let sashualo = (p1 + p2 + p3) / 3;
    if(sashualo < 51){
        return 'უარყოფითი შედეგი'
    }else{
        return 'დადებითი შედეგი'
    }
}

console.log(sashualo(60, 100, 30));

console.log('----------------------------------------');















// 5)ფუნქციამ მიიღოს სამი  რიცხვი (პარამეტრი) , შენი დავალებაა რომ იპოვო ამ სამი რიცხვის ნამრავლი 

// გამოიძახე ფუნქცია 5 ჯერ და არგუმენტად გადაეცი სხვადასხვა მნიშვნელობები

let namravli = (n1, n2, n3)=>{
    return n1 * n2 * n3
};

console.log(namravli(1, 2, 9));
console.log(namravli(5, 23, 3));
console.log(namravli(6, 1, 31));
console.log(namravli(3, 4, 2));
console.log(namravli(1, 7, 1));

console.log('----------------------------------------');












// 6)ფუნქციამ მიიღოს ორი რიცხვი (start, end).

// for loop-ით შეკრიბოს ყველა რიცხვი ამ დიაპაზონში.

// თუ ჯამი > 100 → "დიდი ჯამი"

// სხვაგვარად → "პატარა ჯამი".

let sum = (start, end)=>{
    let sum = 0;
    for(let i = start; i <= end; i ++){
        sum += i
    };
    if(sum > 100){
        return 'big sum'
    }else{
        return 'small sum'
    };
};

console.log(sum(1, 20))

console.log('----------------------------------------');












// 7)ფუნქციამ მიიღოს ორი რიცხვი (start, end) და for loop-ით შეაჯამოს მხოლოდ კენტი რიცხვები.

// თუ ჯამი > 50 → "დიდი ჯამი"

// სხვაგვარად → "პატარა ჯამი".

let oddSum = (start, end)=>{
    let sum = 0;
    for(let i = start; i <= end; i ++){
        if(i % 2 != 0){
            sum += i
        }
    };
    if(sum > 50){
        return 'big sum'
    }else{
        return 'small sum'
    };
};

console.log(oddSum(1, 10))

console.log('----------------------------------------');










// 8)ფუნქციამ მიიღოს რიცხვი(პარამეტრი) , while loop ის გამოყენებით შენი დავა;ებაა 1 დან პარამეტრშ გადაცემულ რიცხვამდე დაითვალო ყველა კენტი რიცხვის და ასევე ყველა ლუწი რიცხვის რაოდენობა ცალ ცალკე,გამოიძახე ფუნქცია რამდენჯერმე გადაეცი განსხვავებული მნიშვნელობები

let counter = (num)=>{
    let i = 0;
    let odd = 0;
    let even = 0;
    while(i <= num){
        if(i % 2 == 0){
            even ++
        }else{
            odd ++
        }
        i ++
    };
    return `odd = ${odd}, even = ${even}`
}

console.log(counter(6))