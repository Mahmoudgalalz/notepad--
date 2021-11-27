let key = "#";
let n = document.querySelector(".pad");
let g = document.querySelector(".notepad");

let now = new Date();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let timeString = `${weekdays[now.getDay()]}, ${months[
  now.getMonth()
]} ${now.getDate()}`;
let broadTime =
  now.getHours() < 12
    ? "morning, Vios"
    : now.getHours() > 17 ? "evening, Vios" : "afternoon, Vios";

g.innerHTML = `Good ${broadTime}. It is ${timeString}.`;

n.innerHTML = localStorage.getItem(key);

n.addEventListener("input", e => {
  localStorage.setItem(key, n.value);
});
