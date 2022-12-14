const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateclock () {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "Am";

if (h > 12) {
    h = h - 12;
    ampm = "Pm";
}

hourEl.innerText = h;
minuteEl.innerText = m;
secondEl.innerText = s;
ampm, (innerText = ampm);


}
updateclock()