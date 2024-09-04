
let headingOne = document.querySelector(".headingOne");
let headingTwo = document.querySelector(".headingTwo");
setInterval(() => {
    let data = new Date();
    let day = data.getUTCDate();
    let month = data.getMonth();
    let year = data.getFullYear();
    month < 10 ? (month = `0${month}`) : (month = month);
    day < 10 ? (day = `0${day}`) : (day = day);
    headingOne.innerHTML = `Date :-${day}:${month}:${year}`;
}, 1000);

setInterval(() => {
    let data = new Date();
    let second = data.getSeconds();
    let minute = data.getMinutes();
    let hour = data.getHours();
    second<10?second==0?second=60:second=`0${second}`:second=second
    minute<10?minute=`0${minute}`:minute=minute
    hour<10?hour==0?hour=12:hour=`0${hour}`:hour>12?hour>21?hour=hour-12:hour=`0${hour-12}`:hour=hour  

    headingTwo.innerHTML = `Time  :- ${hour}:${minute}:${second}`;
}, 1000);
