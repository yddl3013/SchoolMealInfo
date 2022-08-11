let today = new Date();

let currentDate = document.getElementsByClassName("currentDate");

let todayYear = today.getFullYear();
let todayMonth = today.getMonth();
let todayDate = today.getDate();


function insertDate() {
    return `${todayYear}/${todayMonth+1}/${todayDate}`
};

currentDate[0].textContent = insertDate();