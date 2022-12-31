const Start = document.querySelector("#Start");
let x = 900;
let y = 510;
const MIN_X = 575;
const MAX_X = 1220;
const MIN_Y = 250;
const MAX_Y = 530;
let angle = 0;

var currentBulletId = 0;
Start.addEventListener("click", () => {
  accelerateRocket();
});
function accelerateRocket() {
  // Get the current position of the rocket
  const rocket = document.getElementById("rocket");
  document.addEventListener("keydown", (event) => {
    // Attach keys to movement
    switch (event.key) {
      case "w":
        if (y - 10 < MIN_Y) {
          break;
        }
        y -= 10;

        break;
      case "a":
        if (x - 10 < MIN_X) {
          break;
        }
        x -= 10;
        // setTimeout(() => {
        //   interval = setInterval(() => {
        //     angle += 10;
        //     rocket.style.transform = `rotate(${angle}deg)`;
        //   }, 100);
        // }, 2000);

        break;
      case "s":
        if (y + 10 > MAX_Y) {
          break;
        }
        y += 10;
        break;
      case "d":
        if (x + 10 > MAX_X) {
          break;
        }
        x += 10;
        break;
    }

    rocket.style.left = x + "px";
    rocket.style.top = y + "px";
    if (event.code === "Space") {
      currentBulletId++;
      const tyvia = document.createElement("div");
      tyvia.id = `bullet${currentBulletId}`;
      document.body.appendChild(tyvia);
      const bullet = document.getElementById(`bullet${currentBulletId}`);
      bullet.style.position = "absolute";
      bullet.style.top = y - 45 + "px";
      bullet.style.left = x + 59 + "px";
      bullet.style.background = "red";
      bullet.style.height = "50px";
      bullet.style.width = "3px";
      let position = bullet.offsetTop;
      const interval = setInterval(function () {
        position -= 50;
        bullet.style.top = position + "px";

        if (position <= MIN_Y - 70) {
          bullet.remove();
          clearInterval(interval);
        }
      }, 100);
    }
  });
}
