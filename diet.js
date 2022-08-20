//전역변수
let get = new Date()

let currentDate = document.getElementsByClassName("currentDate")

let getYear = get.getFullYear()
let getMonth = get.getMonth() + 1
let getDate = get.getDate()
let getDay = get.getDay()
let currentDay;

let previousDate = document.getElementsByClassName('previousDate')
let nextDate = document.getElementsByClassName('nextDate')


//함수
function calDay() {
    if (getDay == -1) {
        getDay = 6
    }
    if (getDay == 7) {
        getDay = 0
    }
    switch (getDay) {
        case 0:
            currentDay = '일'
            break;
        case 1:
            currentDay = '월'
            break;
        case 2:
            currentDay = '화'
            break;
        case 3:
            currentDay = '수'
            break;
        case 4:
            currentDay = '목'
            break;
        case 5:
            currentDay = '금'
            break;
        case 6:
            currentDay = '토'
            break;
    }
    return currentDay
}

function inputDate() {
    return `${getYear}/${getMonth}/${getDate}/${calDay()}`
}

function calPreDate() {
    getDate -= 1
    getDay -= 1
    calDay()
    if (getDate == 0) {
        getMonth -= 1
        let calDate = new Date(getYear, getMonth, 0)
        getDate = calDate.getDate()
    }
    getAPI()
    return inputDate()
}

function calNexDate() {
    getDate += 1
    getDay += 1
    calDay()
    if (getDate > new Date(getYear, getMonth, 0).getDate()) {
        getMonth += 1
        getDate = 1
    }
    getAPI()
    return inputDate()
}

async function removeChild() {
    diet_arr = []
    while (parentElement.hasChildNodes()) {
        parentElement.removeChild(
          parentElement.firstChild
        )
      }
}
  

// 웹 적용 코드
currentDate[0].textContent = inputDate();


previousDate[0].addEventListener('click', async function(event) {
    removeChild()
    currentDate[0].textContent = calPreDate()
})

nextDate[0].addEventListener('click', async function(event) {
    removeChild()
    currentDate[0].textContent = calNexDate()
})