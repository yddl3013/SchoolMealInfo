//전역변수
let get = new Date()

let getYear = get.getFullYear()
let getMonth = get.getMonth() + 1
let getDate = get.getDate()
let getDay = get.getDay()

let copyYear = getYear
let copyMonth = getMonth
let copyDate = getDate
let copyDay = getDay

let currentDay;

let currentDate = document.getElementsByClassName("currentDate")
let previousDate = document.getElementsByClassName('previousDate')
let nextDate = document.getElementsByClassName('nextDate')


//함수
function getFullDate() {
    return `${getYear}/${getMonth}/${getDate}/${getDay}`
}

function calculateDate() {
    if (copyDate == 0) {
        copyMonth -= 1
        copyDate = new Date(copyYear, copyMonth, 0).getDate()
    }

    if (copyDate > new Date(copyYear, copyMonth, 0).getDate()) {
        copyMonth += 1
        copyDate = 1
    }

    if (copyMonth < 1) {
        copyYear -= 1
        let previousYearFullDate = new Date(copyYear, 12, 0)
        copyYear = previousYearFullDate.getFullYear()
        copyMonth = previousYearFullDate.getMonth() + 1
        copyDate = previousYearFullDate.getDate()
        copyDay = previousYearFullDate.getDay()

    }

    if (copyMonth > 12) {
        copyYear += 1
        let nextYearFullDate = new Date(copyYear, 0, 1)
        copyYear = nextYearFullDate.getFullYear()
        copyMonth = nextYearFullDate.getMonth() + 1
        copyDate = nextYearFullDate.getDate()
        copyDay = nextYearFullDate.getDay()
    }
}

function calculateDay() {
    if (copyDay == -1) {
        copyDay = 6
    }
    if (copyDay == 7) {
        copyDay = 0
    }
    switch (copyDay) {
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
    return `${copyYear}/${copyMonth}/${copyDate}/${calculateDay()}`
}

function calculatePreviousDate() {
    copyDate -= 1
    copyDay -= 1
    calculateDate()
    getAPI()
    return inputDate()
}

function calculateNextDate() {
    copyDate += 1
    copyDay += 1
    calculateDate()
    getAPI()
    return inputDate()
}

function removeChild() {
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
    currentDate[0].textContent = calculatePreviousDate()
})

nextDate[0].addEventListener('click', async function(event) {
    removeChild()
    currentDate[0].textContent = calculateNextDate()
})