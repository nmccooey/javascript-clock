const html = document.querySelector("html");
const body = document.querySelector("body");

// Create HTML in body.
body.innerHTML = '<div class="clock"><div class="clock-face"><div class="hand hour-hand"></div><div class="hand min-hand"></div><div class="hand second-hand"></div></div></div>';

// Style html.
html.style.fontSize = "10px";
html.style.textAlign = "center";

// Style body.
body.style.margin = "0px";
body.style.fontSize = "2rem";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.flex = "1";
body.style.minHeight = "100vh";
body.style.alignItems = "center";
body.style.backgroundColor = "#FFD89D";

// Add title and paragraph.
const title = document.createElement("h1");
title.innerText = "Pure JavaScript Clock";
title.style.textAlign = "center";
body.appendChild(title);

// Style and center clock on screen.
const clock = document.querySelector(".clock");
clock.style.width = "30rem";
clock.style.height = "30rem";
clock.style.margin = "50px auto";
clock.style.position = "relative"
clock.style.border = "20px solid black";
clock.style.borderRadius = "50%";
clock.style.padding = "2rem";

// Style clock face.
const clockFace = document.querySelector(".clock-face");
clockFace.style.width = "100%";
clockFace.style.height = "100%";
clockFace.style.position = "relative";
clockFace.style.transform = "translateY(-3px)";

// Style hand.
const hands = document.getElementsByClassName("hand");
for (let i = 0; i < hands.length; i++) {
    hands[i].style.width = "50%";
    hands[i].style.background = "black";
    hands[i].style.position = "absolute";
    hands[i].style.top = "50%";
    hands[i].style.transformOrigin = "100%";
    hands[i].style.transform = "rotate(90deg)";
    hands[i].style.transition = "all 0.05s";
    hands[i].style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
}

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Change height of hands to an appropriate height.
secondHand.style.height = "2px";
minsHand.style.height = "4px";
hourHand.style.height = "6px";

function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();