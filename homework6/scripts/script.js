//Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
for(let index = 0; index <= 10; index = index + 2) {
console.log(index)
}

// Напишите цикл for, который выводит в консоль  все числа от 55 до 20
for(let index = 55; index >= 20; index--) {
    console.log(index)
    }
// Дан массив numbers. Вывести в консоль все числа из массива
// const numbers = [3, 5, 11, 2, 8, 1, 6];
// Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат
const numbers = [3, 5, 11, 2, 8, 1, 6];
console.log(numbers)
const numbers_squared = []
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] ** 2) 
        numbers_squared.push(numbers[index] ** 2);
        console.log(numbers_squared[index])
}
//Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)
let last_elem = numbers_squared[numbers_squared.length - 1];
console.log(last_elem);
// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’
const user = {
first_name: 'Ivan', 
last_name: 'Ivanov', 
age: 20, 
salary: 500
}
console.log(`User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`)
