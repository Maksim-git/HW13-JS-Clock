const time = document.querySelector(".time");

function RealTime(tag) {
  this.isClicked = true;
  tag.addEventListener("click", () => {
    this.isClicked = !this.isClicked;
  });
  this.fullTime = function () {
    tag.innerHTML = new Date().toTimeString().split(" ")[0];
  };
  this.shotTime = function () {
    tag.innerHTML = new Date().toTimeString().split(" ")[0].substring(0, 5);
  };
  setInterval(() => {
    if (this.isClicked) {
      this.fullTime();
    } else {
      this.shotTime();
    }
  }, 1000);
}

const constructorTime = new RealTime(time);
