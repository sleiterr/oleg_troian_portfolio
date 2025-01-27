arrowTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", function () {
  arrowTop.hidden = window.scrollY < document.documentElement.clientHeight;
});
