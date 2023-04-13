const secondHands = document.querySelectorAll(".second-hand");
const minsHands = document.querySelectorAll(".min-hand");
const hourHands = document.querySelectorAll(".hour-hand");

function setDate() {
  //local time
  const yourTime = new Date();

  const seconds = yourTime.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHands[0].style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = yourTime.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHands[0].style.transform = `rotate(${minsDegrees}deg)`;

  const hour = yourTime.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHands[0].style.transform = `rotate(${hourDegrees}deg)`;

  //NYC
  const newYorkDate = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  const secondsNYC = newYorkDate.getSeconds();
  const secondsDegreesNYC = (secondsNYC / 60) * 360 + 90;
  secondHands[1].style.transform = `rotate(${secondsDegreesNYC}deg)`;

  const minsNYC = newYorkDate.getMinutes();
  const minsDegreesNYC = (minsNYC / 60) * 360 + (secondsNYC / 60) * 6 + 90;
  minsHands[1].style.transform = `rotate(${minsDegreesNYC}deg)`;

  const hourNYC = newYorkDate.getHours();
  const hourDegreesNYC = (hourNYC / 12) * 360 + (minsNYC / 60) * 30 + 90;
  hourHands[1].style.transform = `rotate(${hourDegreesNYC}deg)`;

  //London
  const londonDate = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/London" })
  );

  const secondsLDN = londonDate.getSeconds();
  const secondsDegreesLDN = (secondsLDN / 60) * 360 + 90;
  secondHands[2].style.transform = `rotate(${secondsDegreesLDN}deg)`;

  const minsLDN = londonDate.getMinutes();
  const minsDegreesLDN = (minsLDN / 60) * 360 + (secondsLDN / 60) * 6 + 90;
  minsHands[2].style.transform = `rotate(${minsDegreesLDN}deg)`;

  const hourLDN = londonDate.getHours();
  const hourDegreesLDN = (hourLDN / 12) * 360 + (minsLDN / 60) * 30 + 90;
  hourHands[2].style.transform = `rotate(${hourDegreesLDN}deg)`;
}

setInterval(setDate, 1000);

setDate();

const clock = document.querySelectorAll(".clock");

function toggleOpen() {
  this.classList.toggle("open");
  setHeight();
}

clock.forEach((panel) => panel.addEventListener("click", toggleOpen));

function setHeight(){
    clock.forEach(panel => {
        const clockWidth = panel.offsetWidth;
        panel.style.height = clockWidth + "px";
    })
}