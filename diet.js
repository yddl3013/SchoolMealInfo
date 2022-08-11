let today = new Date();

let currentDate = document.getElementsByClassName("currentDate");

let todayYear = today.getFullYear();
let todayMonth = today.getMonth();
let todayDay = today.getDay();


function insertDate() {
    return `${todayYear}/${todayMonth+1}/${todayDay}`
};

currentDate[0].textContent = insertDate();