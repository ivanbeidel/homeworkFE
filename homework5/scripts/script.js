// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
let numb = +prompt('Enter number')
let ten_ps = numb *0.1
console.log(ten_ps);

// Написать программу, которая получает два числа и выводит наименьшее
let numb1 = +prompt('Enter the first number')
let numb2 = +prompt('Enter the second number')
if(numb1>numb2){
    console.log(`The smallest number ${numb2}`);
}
else if(numb1<numb2){
    console.log(`The smallest number ${numb1}`);
}
else if(numb1==numb2)
{
    console.log(`Error. Enter the different number`);
}

//Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

let numb3 = +prompt('Enter the number')
if(numb3<100){
    console.log(`Number<100`);
}
else if(numb3>100){
    console.log(`Number>100`);
}
else if(numb3==100)
{
    console.log(`Number=100`);
}

//Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.
let user_name = prompt('Enter your Name');
let user_age = +prompt('Enter your age');
if(user_age<18){
    console.log(`Hi, ${user_name}`);
}
else if(user_age>18)
    console.log(`Hello, ${user_name}`);