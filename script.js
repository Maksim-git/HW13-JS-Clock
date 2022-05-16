const time = document.querySelector(".time");

function TimeDisplay(classTime) {
  this.isClicked = true;
  classTime.addEventListener("click", () => {
    this.isClicked = !this.isClicked;
  });
  this.fullTimeFormat = function () {
    classTime.innerHTML = new Date().toLocaleTimeString();
  };
  this.shortTimeFormat = function () {
    classTime.innerHTML = new Date()
      .toTimeString()
      .split(" ")[0]
      .substring(0, 5);
  };
  setInterval(() => {
    if (this.isClicked) {
      this.fullTimeFormat();
    } else {
      this.shortTimeFormat();
    }
  }, 1000);
}

const objectTime = new TimeDisplay(time);
