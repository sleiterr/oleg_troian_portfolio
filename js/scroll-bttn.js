//* change-window listener vw-mob

export function scrillingBttn() {
  document.addEventListener("DOMContentLoaded", function () {
    const formInputs = document.querySelectorAll(".form input, .form textarea");
    let isKeyboardVisible = false;
    const scrollArrow = document.getElementById("arrowTop");

    formInputs.forEach((input) => {
      input.addEventListener("focus", function () {
        if (window.innerWidth <= 425) {
          document.body.style.overflow = "hidden";
          scrollArrow.style.display = "none";
          isKeyboardVisible = true;
        }
      });

      input.addEventListener("blur", function () {
        //   console.log("input blurred:", input.name);
        if (isKeyboardVisible) {
          setTimeout(() => {
            if (
              document.activeElement.tagName !== "INPUT" &&
              document.activeElement.tagName !== "TEXTAREA"
            ) {
              document.body.style.overflow = "auto";
              scrollArrow.style.display = "";
              isKeyboardVisible = false;
            }
          }, 300);
        }
      });
    });
  });

  //? scroll
  arrowTop.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", function () {
    arrowTop.hidden = window.scrollY < document.documentElement.clientHeight;
  });
}
