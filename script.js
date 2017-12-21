const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// to get time 'now' pulling date, time and time zone pulled off the browser
var date = new Date(); //date object

//get hour, minutes and seconds from date object
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

// each hour moves 30deg (360/12)
// each minute moves 6deg (360/60)
// each second moves 6deg (360/60)
let hrPosition = (hr*30)+(min*6/12); // moves hr hand gradually as minutes pass dividing 1 hour segment by
let minPosition = (min*6)+(sec*6/60); // moves minute hand gradually as seconds pass
let secPosition = sec*6;
//that's current time set, but it's static.

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
