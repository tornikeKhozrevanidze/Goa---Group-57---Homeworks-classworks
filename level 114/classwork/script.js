// 1)შექმენი ობიექტი შენს შესახებ,შენი დავალებაა რომ გამოიტანო კიები და ვალუები ცალ ცალკე for in ის გამოყენებით

const me = {
    name : 'tornike',
    surname : 'khozrevanidze',
    age : 18
}

for(let i in me){
    console.log(i);
    
}



// 2)შექმენი ობიექტი ავტომობილის შესახებ ,გქონდეს year , model , milage , color , შენი დავალებაა რომ შექმნა სია ვალუებისა,შემდეგ გადაუარო ამ სიას და გმაოიტანო ცალ ცალკე თითოეული value გამოიყენე for of

let car = {
    year : 1999,
    model : 'BMW', 
    milage : 2000, 
    color : 'black'
}

for(let i of Object.values(car)){
    console.log(i)
}