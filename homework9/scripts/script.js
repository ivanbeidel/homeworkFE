// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

const squareDiv = document.createElement("div")
const RedButton = document.createElement("button")
squareDiv.style.width = "200px"
squareDiv.style.height = "200px"
squareDiv.style.backgroundColor = "red"
RedButton.innerText = "Нажми меня"
RedButton.style.width = "100px"
RedButton.style.height = "20px"
document.body.append(squareDiv)
document.body.append(RedButton)
RedButton.addEventListener("click", function () {
    squareDiv.style.backgroundColor = "green"
    squareDiv.style.width = "100px"
    squareDiv.style.height = "100px"
  })

//Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.

const squareSecond = document.createElement("div")
const PinkButton = document.createElement("button")
squareSecond.style.width = "200px"
squareSecond.style.height = "200px"
squareSecond.style.backgroundColor = "pink"
PinkButton.innerText = "Нажми меня"
PinkButton.style.width = "100px"
PinkButton.style.height = "20px"
document.body.append(squareSecond)
document.body.append(PinkButton)
PinkButton.addEventListener("click", function () {
    squareSecond.style.backgroundColor = "blue"
    console.log(`Новый цвет фона - синий`)
  })

//Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
const squareThird = document.createElement("div")
const Button = document.createElement("button")
squareThird.style.width = "150px"
squareThird.style.height = "150px"
squareThird.style.border = "1px solid black"
Button.innerText = "Нажми меня"
Button.style.width = "100px"
Button.style.height = "20px"
document.body.append(squareThird)
document.body.append(Button)
Button.addEventListener("click", function () {
    squareThird.style.width = "170px"
    squareThird.style.height = "170px"
    //Я пытался как-то прибавить 20px, но у меня ничего не вышло.
  })

//   Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
const rootDiv = document.querySelector(".root")
const fourthBotton = document.querySelector(".fourth")
fourthBotton.addEventListener("click", function () {
    const paragraph = document.createElement("p")
    paragraph.innerText = "Текст синего цвета"
    paragraph.style.color = "blue"
    rootDiv.append(paragraph)
  })

//   Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
const root2Div = document.querySelector(".root")
const fifthBotton = document.querySelector(".fifth")
let colors = ['blue', 'green']
let FirstColor = 0
fifthBotton.addEventListener("click", function () {
    const paragraph = document.createElement('p')
    paragraph.textContent = 'Синий/зелёный параграф'
    paragraph.style.color = colors[FirstColor]
    root2Div.append(paragraph)
    FirstColor = (FirstColor + 1) % colors.length
})