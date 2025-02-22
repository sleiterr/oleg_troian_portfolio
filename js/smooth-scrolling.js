//* Smooth scrolling animation */

export function SmoothScrol() {
  const allLinks = document.querySelectorAll("a");
  // console.log(allLinks);

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href") || '';

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
}
