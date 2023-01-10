// Analog + digital clock + date
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const secondChart = document.querySelector('.second-chart');
const minuteChart = document.querySelector('.minute-chart');
const hourChart = document.querySelector('.hour-chart');
const digitalClock = document.querySelector('.digital-clock');

function setTime() {

  const date = new Date();

  let seconds = date.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  if (seconds < 10) seconds = "0" + seconds;
  secondChart.innerHTML = seconds;
  digitalClock.children[2].innerHTML = seconds;

  let minutes = date.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  if (minutes < 10) minutes = "0" + minutes;
  minuteChart.innerHTML = minutes;
  digitalClock.children[1].innerHTML = minutes;

  let hours = date.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  const hoursMinutesDegrees = hoursDegrees + minutes / 2
  hourHand.style.transform = `rotate(${hoursMinutesDegrees}deg)`;
  if (hours < 10) hours = "0" + hours;
  hourChart.innerHTML = hours;
  digitalClock.children[0].innerHTML = hours;

  let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  let day = days[date.getDay()];
  digitalClock.children[3].innerHTML = day;

  let dateDay = date.getDate();
  digitalClock.children[4].innerHTML = dateDay;

  let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  let month = months[date.getMonth()];
  digitalClock.children[5].innerHTML = month;

  let year = date.getFullYear();
  digitalClock.children[6].innerHTML = year;

  // Charts
  let hoursAmPm = (hours > 12) ? hours - 12 : hours;
  const offsetHour = circumference - (hoursAmPm * (100 / 12)) / 100 * circumference;
  circleHour.style.strokeDashoffset = offsetHour;

  const offsetMinute =  circumference - (minutes * (100 / 60)) / 100 * circumference;
  circleMinute.style.strokeDashoffset = offsetMinute;

  const offsetSecond =  circumference - (seconds * (100 / 60)) / 100 * circumference;
  circleSecond.style.strokeDashoffset = offsetSecond;
}

const circleHour = document.querySelector('.progress-hour__circle');
const circleMinute = document.querySelector('.progress-minute__circle');
const circleSecond = document.querySelector('.progress-second__circle');

const radius = circleHour.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circleHour.style.strokeDasharray = `${circumference} ${circumference}`;
circleHour.style.strokeDashoffset = circumference;
circleMinute.style.strokeDasharray = `${circumference} ${circumference}`;
circleMinute.style.strokeDashoffset = circumference;
circleSecond.style.strokeDasharray = `${circumference} ${circumference}`;
circleSecond.style.strokeDashoffset = circumference;

//Smoth appearance

const analogClock = document.querySelector('.analog-face')
analogClock.classList.add('show');
const charts = document.querySelector('.charts')
charts.classList.add('show');
digitalClock.classList.add('show');

//Changing theme

const themeButton = document.querySelector('.theme-button');
themeButton.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  
  if (html.classList.contains('dark')){
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark theme';
    document.documentElement.style.setProperty('--background-color', 'white');
    document.documentElement.style.setProperty('--color', '#252525');
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light theme';
    document.documentElement.style.setProperty('--background-color', '#252525');
    document.documentElement.style.setProperty('--color', 'white');
  }
});
  

setInterval(setTime, 1000);
