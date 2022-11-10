// (function() {
//   'use strict';

//   // YOUR CODE HERE
// })();
// create const variables for elements
const stopButton = document.querySelector('#stopButton');
const stopLight = document.querySelector("#stopLight");
const slowLight = document.querySelector('#slowLight');
const slowButton = document.querySelector('#slowButton');
const goLight = document.querySelector('#goLight');
const goButton = document.querySelector('#goButton');
// create click functions
function addListener(button, mouse, light, lightColor) {
  if(mouse === 'mouseenter') {
  button.addEventListener(mouse, function() {
    console.log(`"Entered ${button.textContent} button"`)
  })
} else if(mouse === "click") {
  button.addEventListener(mouse, function() {
    light.classList.toggle(lightColor);
  });
} else if(mouse === 'mouseleave') {
  button.addEventListener(mouse, function() {
    console.log(`"left ${button.textContent} button"`)
  })
}
}

//stop
addListener(stopButton, "click", stopLight, 'stop');
addListener(stopButton, 'mouseenter');
addListener(stopButton, 'mouseleave');
//slow

addListener(slowButton, "click", slowLight, 'slow');
addListener(slowButton, 'mouseenter');
addListener(slowButton, 'mouseleave');
//go

addListener(goButton, "click", goLight, 'go');
addListener(goButton, 'mouseenter');
addListener(goButton, 'mouseleave');