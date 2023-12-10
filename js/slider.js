// let images = [...document.querySelectorAll(".project__card .img")];
// let slider = document.querySelector(".slider");
// let sliderWidth;
// let imageWidth;
// let isDragging = false;
// let startX;
// let offsetX = 0;
// let current = 0;
// let target = 0;
// let ease = 0.04;

// window.addEventListener("resize", init);

// images.forEach((img, idx) => {
//   img.style.backgroundImage = `url(./images/${idx + 1}.jpg)`;
// });

// function lerp(start, end, t) {
//   return start * (1 - t) + end * t;
// }

// function setTransform(el, transform) {
//   el.style.transform = transform;
// }

// function init() {
//   sliderWidth = slider.getBoundingClientRect().width;
//   imageWidth = sliderWidth / images.length;
//   slider.style.width = `${imageWidth * images.length}px`;
//   const sliderHeight = sliderWidth - (window.innerWidth - window.innerHeight);
//   document.body.style.height = `${Math.max(
//     sliderHeight,
//     window.innerHeight
//   )}px`;

//   slider.addEventListener("mousedown", (e) => {
//     isDragging = true;
//     startX = e.clientX;
//     offsetX = current;
//     e.preventDefault();
//   });

//   slider.addEventListener("mouseup", () => {
//     isDragging = false;
//   });

//   document.addEventListener("mousemove", (e) => {
//     if (isDragging) {
//       const mouseX = e.clientX;
//       const dragDistance = mouseX - startX;
//       target = offsetX - dragDistance;
//       e.preventDefault();
//     }
//   });

//   window.addEventListener("resize", () => {
//     sliderWidth = slider.getBoundingClientRect().width;
//     imageWidth = sliderWidth / images.length;
//     slider.style.width = `${imageWidth * images.length}px`;
//     document.body.style.height = `${
//       sliderWidth - (window.innerWidth - window.innerHeight)
//     }px`;
//   });
// }

// function animate() {
//   let maxScroll =
//     sliderWidth - window.innerWidth + (window.innerWidth * 4.16) / 100;
//   if (target > maxScroll) target = maxScroll;

//   current = lerp(current, target, ease);
//   setTransform(slider, `translateX(-${current}px)`);
//   animateImages();
//   requestAnimationFrame(animate);
// }

// function animateImages() {
//   let ratio = current / imageWidth;
//   let intersectionRatioValue;

//   images.forEach((image, idx) => {
//     intersectionRatioValue = ratio - idx * 0.001;
//     setTransform(image, `translateX(${intersectionRatioValue * 70}px)`);

//     // Supposons que chaque image a un élément 'project__info__container'
//     let infoContainer = image.querySelector(".project__info__container");
//     if (infoContainer) {
//       // Appliquer une transformation inverse à 'project__info__container'
//       setTransform(
//         infoContainer,
//         `translateX(${-intersectionRatioValue * 70}px)`
//       );
//     }
//   });
// }

// document.addEventListener("mouseup", () => {
//   isDragging = false;
// });

// init();
// animate();

let images = [...document.querySelectorAll(".project__card .img")];
let slider = document.querySelector(".slider");
let sliderWidth;
let imageWidth;
let isDragging = false;
let startX;
let offsetX = 0;
let current = 0;
let target = 0;
let ease = 0.04;

window.addEventListener("resize", init);

images.forEach((img, idx) => {
  img.style.backgroundImage = `url(./images/${idx + 1}.jpg)`;
});

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function setTransform(el, transform) {
  el.style.transform = transform;
}

function init() {
  sliderWidth = slider.getBoundingClientRect().width;
  imageWidth = sliderWidth / images.length;
  slider.style.width = `${imageWidth * images.length}px`;

  // Remplacez la ligne existante qui définit la hauteur du `body`
  document.body.style.height = `${window.innerHeight}px`;

  slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    offsetX = current;
    e.preventDefault();
  });

  slider.addEventListener("mouseup", () => {
    isDragging = false;
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const mouseX = e.clientX;
      const dragDistance = mouseX - startX;
      target = offsetX - dragDistance;
      e.preventDefault();
    }
  });

  window.addEventListener("resize", () => {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    slider.style.width = `${imageWidth * images.length}px`;

    // Remplacez la ligne existante qui définit la hauteur du `body`
    document.body.style.height = `${window.innerHeight}px`;
  });
}

function animate() {
  let maxScroll =
    sliderWidth - window.innerWidth + (window.innerWidth * 4.16) / 100;
  if (target > maxScroll) target = maxScroll;

  current = lerp(current, target, ease);
  setTransform(slider, `translateX(-${current}px)`);
  animateImages();
  requestAnimationFrame(animate);
}

function animateImages() {
  let ratio = current / imageWidth;
  let intersectionRatioValue;

  images.forEach((image, idx) => {
    intersectionRatioValue = ratio - idx * 0.001;
    setTransform(image, `translateX(${intersectionRatioValue * 70}px)`);

    // Supposons que chaque image a un élément 'project__info__container'
    let infoContainer = image.querySelector(".project__info__container");
    if (infoContainer) {
      // Appliquer une transformation inverse à 'project__info__container'
      setTransform(
        infoContainer,
        `translateX(${-intersectionRatioValue * 70}px)`
      );
    }
  });
}

document.addEventListener("mouseup", () => {
  isDragging = false;
});

init();
animate();
