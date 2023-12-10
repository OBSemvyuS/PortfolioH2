
var offset = 100;

function getDocumentTop(element) {
  var rect = element.getBoundingClientRect();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop;
}

document.querySelectorAll("nav div")[0].addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll("nav div")[1].addEventListener("click", function () {
  var elementPosition = getDocumentTop(
    document.querySelector("main > section")
  );
  window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
});

document.querySelectorAll("nav div")[2].addEventListener("click", function () {
  var elementPosition = getDocumentTop(
    document.querySelectorAll("main > section")[1]
  );
  window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
});

document.querySelectorAll("nav div")[3].addEventListener("click", function () {
  var elementPosition = getDocumentTop(document.querySelector("footer"));
  window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
});
