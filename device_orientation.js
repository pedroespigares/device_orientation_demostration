const ball = document.querySelector(".ball");
const background = document.querySelector(".background");
const output = document.querySelector(".output");

const maxX = background.clientWidth - ball.clientWidth;
const maxY = background.clientHeight - ball.clientHeight;

function handleOrientation(event) {
  let x = event.beta; // In degree in the range [-180,180)
  let y = event.gamma; // In degree in the range [-90,90)

  output.textContent = `beta : ${x}\n`;
  output.textContent += `gamma: ${y}\n`;

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x > 90) {
    x = 90;
  }
  if (x < -90) {
    x = -90;
  }

  // To make computation easier we shift the range of
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  ball.style.top = `${(maxY * y) / 180 - 10}px`;
  ball.style.left = `${(maxX * x) / 180 - 10}px`;
}

window.addEventListener("deviceorientation", handleOrientation);
