let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = new Date();
let day = today.getDay();

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

let convert = hour > 12 ? "PM" : "AM";

if (hour > 12 && hour < 24) {
  hour = hour - 12;
} else if (hour == 12 && minute == 0 && second == 0) {
  convert = "Noon";
} else if (hour == 24 && minute == 0 && second == 0) {
  convert = "Midnight";
  hour = 0;
}

console.log("Today is : " + dayNames[day]);
console.log(
  "Current Time : " + hour + " " + convert + " : " + minute + " : " + second
);


