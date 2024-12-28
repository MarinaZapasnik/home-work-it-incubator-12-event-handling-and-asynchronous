const items = document.querySelectorAll('.item')
let isTimerStarted = false
let timerId

// for (let i = 0; i < items.length; i ++) {
//     const item = items[i];
//     item.addEventListener('click', function () {
//         item.classList.toggle('done')
//     })
// }
// данные о произошедшем событии в объект ( event, e, ev)
const form = document.querySelector('.form')
form.addEventListener('submit', function (event) {    // событие, которое происходит при нажатии кнопки, в качестве параметра
    event.preventDefault()                            //предотвратить дефолтное поведение, то есть отправку данных
    const input = document.querySelector(".input")
    const text = input.value
    input.value = ''
    
    const item = document.createElement('li')
    item.textContent = text
    item.classList.add('item')
    // item.addEventListener('click', function () {
    //     item.classList.toggle('done')
    // })
    
    const list = document.querySelector('.list')
    list.append(item)

})

const list = document.querySelector('.list')
list.addEventListener('click', function (event) {
    const target = event.target //узнаем свойство в которое попал пользователь
    if (target.tagName === 'LI' ) {   //если попадут именно по тегу 'li'
        target.classList.toggle('done')
    }
})



const resetBtn = document.getElementById('reset-button')
resetBtn.addEventListener('click', function () {
    
    if (isTimerStarted) {
        clearTimeout(timerId)
        resetBtn.textContent = 'Сброс ✖'
        isTimerStarted = false
    } else {
        isTimerStarted = true
        resetBtn.textContent = 'Отмена'
        timerId = setTimeout(function () {
            for (let i = 0; i < items.length; i ++){
            items[i].classList.remove('done')
            }
            resetBtn.textContent = 'Сброс ✖'
            isTimerStarted = false
    }, 3000);
    
    }
    
})