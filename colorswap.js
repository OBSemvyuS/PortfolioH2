let leftCtrl = false;
let rightCtrl = false;
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
  if (event.code === "ControlLeft") {
    leftCtrl = true;
  } else if (event.code === "ControlRight") {
    rightCtrl = true;
  }

  if (leftCtrl && rightCtrl) {
    changeBackgroundColor();
  }
});

document.addEventListener("keyup", function (event) {
  if (event.code === "ControlLeft") {
    leftCtrl = false;
  } else if (event.code === "ControlRight") {
    rightCtrl = false;
  }
});
// document.addEventListener("keydown", function (event) {
//   if (event.code === "ControlLeft") {
//     leftCtrl = true;
//   } else if (event.code === "ControlRight") {
//     rightCtrl = true;
//   }

//   if (leftCtrl && rightCtrl) {
//     let randomColor = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.backgroundColor = randomColor;
//     document.querySelector(".nav__bar ul").style.backgroundColor = randomColor;
//   }
// });

// document.addEventListener("keyup", function (event) {
//   if (event.code === "ControlLeft") {
//     leftCtrl = false;
//   } else if (event.code === "ControlRight") {
//     rightCtrl = false;
//   }
// });
