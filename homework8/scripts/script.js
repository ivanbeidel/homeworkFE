// Решить следующие задачи:
// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
let numsDiv = document.querySelector(".numbers")
for (let i = 100; i >= 50; i -= 10) {
    const numPar = document.createElement("p")
    numPar.innerText = i;
    numsDiv.append(numPar)
}
// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.
let strArray = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit']
let stringsContainer = document.querySelector(".strings_container")
for (let i = 0; i < strArray.length; i++) {
    let paragraph = document.createElement("p")
    paragraph.innerText = strArray[i]
    stringsContainer.appendChild(paragraph)
}

// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

let users = [
    {
        first_name: "John",
        last_name: "Doe",
        age: 25
    },
    {
        first_name: "Mary",
        last_name: "Smith",
        age: 18
    },
    {
        first_name: "Alex",
        last_name: "Johnson",
        age: 30
    }
]
let usersContainer = document.querySelector(".users_container")
for (let i = 0; i < users.length; i++) {
    let user = users[i]
    if (user.age >= 18) {
        let cardContent = document.createElement("p");
        cardContent.innerText = (`${user.first_name} ${user.last_name}, ${user.age} age`)
        usersContainer.append(cardContent)
    }
}