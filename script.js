const currentDate = document.getElementById("current-date"),
daysTag = document.querySelector(".days"),
prev = document.getElementById("prev"),
next = document.getElementById("next");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

let months = ['January','February','March','April','May','June','July','August','September','October',
'November','December'];

const renderCalendar = () => {
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();//getting last day of the month
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();//getting last day of the month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let liTag = "";

for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    
}
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : ""       
         liTag += `<li class="${isToday}" >${i}</li>`;
        
    }

for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;

    
}
currentDate.innerHTML = `${months[currMonth]} ${currYear}`;
daysTag.innerHTML = liTag;
}
renderCalendar();

prev.addEventListener("click", () => {
currMonth--;
if(currMonth < 0 || currMonth > 11){
    date = new Date(currYear, currMonth);
    currYear = date.getFullYear();
    currMonth = date.getMonth();
}
else{
    date = new Date();
}
renderCalendar();
});
next.addEventListener("click", () => {
    currMonth++;
    if(currMonth < 0 || currMonth > 11){
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    }
    else{
        date = new Date();
    }
    renderCalendar();
});

