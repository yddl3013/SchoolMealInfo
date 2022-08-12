let get = new Date();

let currentDate = document.getElementsByClassName("currentDate");

let getYear = get.getFullYear();
let getMonth = get.getMonth();
let getDate = get.getDate();
let getDay = get.getDay();
let currentDay = '';

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
    case 3:
        currentDay = '토'
        break;
}

function insertDate() {
    return `${getYear}/${getMonth+1}/${getDate}/${currentDay}`
};

currentDate[0].textContent = insertDate();

