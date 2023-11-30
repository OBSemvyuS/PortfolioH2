// var offset = 200;

// document.querySelectorAll("nav h5")[0].addEventListener("click", function () {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

// document.querySelectorAll("nav h5")[1].addEventListener("click", function () {
//   var elementPosition = document
//     .querySelector("main > section")
//     .getBoundingClientRect().top;
//   window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
// });

// document.querySelectorAll("nav h5")[2].addEventListener("click", function () {
//   var elementPosition = document
//     .querySelectorAll("main > section")[1]
//     .getBoundingClientRect().top;
//   window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
// });

// document.querySelectorAll("nav h5")[3].addEventListener("click", function () {
//   var elementPosition = document
//     .querySelector("footer")
//     .getBoundingClientRect().top;
//   window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
// });

var offset = 100;

function getDocumentTop(element) {
  var rect = element.getBoundingClientRect();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop;
}

document.querySelectorAll("nav h5")[0].addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll("nav h5")[1].addEventListener("click", function () {
  var elementPosition = getDocumentTop(
    document.querySelector("main > section")
  );
  window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
});

document.querySelectorAll("nav h5")[2].addEventListener("click", function () {
  var elementPosition = getDocumentTop(
    document.querySelectorAll("main > section")[1]
  );
  window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
});

document.querySelectorAll("nav h5")[3].addEventListener("click", function () {
  var elementPosition = getDocumentTop(document.querySelector("footer"));
  window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
});
