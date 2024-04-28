//Решить следующие задачи:
// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

function PrintMinNum(a, b) {
    if (a > b)
        console.log(a)
    else
        console.log(b)
}
PrintMinNum(17, 69)
console.log('===============');
// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

function PrintEven(a, b) {
    let start, end;
    if (a > b) {
        start = a;
        end = b;
    }
    else {
        start = b;
        end = a;
    }
    let evenNumbers = [];
    for (let i = start; i >= end; i--) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    console.log(evenNumbers);
}
PrintEven(-6, 5);
console.log('===============');

// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function power(a, b = 2) {
return  a ** b;
}
console.log(power(12));
console.log('===============');

// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

function ArgPlus(n) {
    let sum = 0;
    if(n>0)
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    else 
    for (let i = 1; i >= n; i--) {
        sum -= i;
    }
    return sum;
}
const result = ArgPlus(-5);
console.log(result);
console.log('===============');
// Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function Rechner (n, m) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            sumEven += i;
        } else {
            sumOdd += i;
        }
    }
console.log(`Сумма четных чисел ${sumEven}`);
console.log(`Сумма нечетных чисел ${sumOdd}`);
}
Rechner(-8, 17);
console.log('===============');
// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. Пример: [ 'one', 'two', 'three' ] => 'three'

function LongestMass(arr) {
    if (arr.length === 0) {
        return null;
    }
    let longest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
let arr = ['one', 'two', 'three'];
let res = LongestMass(arr);
console.log(res);