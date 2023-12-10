let colors = [
  "#4DC156",
  "#228AC2",
  "#FB7741",
  "#FFCB13",
  "#f80326",
  "#c3eec5",
  "#d7fc01",
];

function changeBackgroundColor() {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  document.querySelector(".nav__bar ul").style.backgroundColor = randomColor;
}

document.addEventListener("keydown", function (event) {
  if (event.code === "KeyQ") {
    changeBackgroundColor();
  }
});
