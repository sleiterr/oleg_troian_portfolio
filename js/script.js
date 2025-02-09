

// BURGER-BTTN

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".burger-btn");
  const navUL = document.querySelector(".nav-list");
  const bars = document.querySelectorAll(".bar");

  hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
    bars.forEach((element) => {
      element.classList.toggle("active");
    });
  });

  navUL.addEventListener("click", () => {
    navUL.classList.remove("show");
    bars.forEach((element) => {
      element.classList.remove("active");
    });
  });
});

//* Sticky navigation */

const sectionHeroEL = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewpoert
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEL);

//* Smooth scrolling animation */

const allLinks = document.querySelectorAll("a");
// console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    if (href !== "#" && !href.startsWith("#")) {
      return; // Дозволяє перейти за звичайним посиланням
    }

    e.preventDefault();

    // Scrol back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      // console.log(sectionEL);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    //  Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEL.classList.toggle("nav-open");
  });
});

// MODAL-IMAGE-PLACAT
const modal = document.getElementById("myModal");
const link = document.getElementById("myLink");
const span = document.getElementsByClassName("close")[0];
const modalImage = document.getElementById("modalImage");

modalImage.oncontextmenu = function (e) {
  e.preventDefault();
};

link.onclick = function (event) {
  event.preventDefault();
  modal.style.display = "block";
  modalImage.src = "../img/Placat Le goût infini/Le-goût-infini-1.jpg";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
