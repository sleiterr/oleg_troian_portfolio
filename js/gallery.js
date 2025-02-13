const gallery = document.querySelector(".gallery-landing");
const jsprojectSection = document.querySelector(".js-gallery");

let galleryImages = [
  {
    src: "../img/card-img/card-1.jpg",
    title: "Le gout infini",
    caption: "Osteria Francescana in Modena.",
    category: "landing",
    url: "#",
  },
  {
    src: "../img/card-img/card-2.jpg",
    title: "Bjarke Ingels",
    caption: "The cultural mediator.",
    category: "landing",
    url: "#",
  },
  {
    src: "../img/card-img/card-3.jpg",
    title: "Italian Cuisine",
    caption:
      "Italian cuisine is more than just food; it's art, tradition, and love.",
    category: "landing",
    url: "#",
  },
  {
    src: "../img/card-img/сhildrens-toys.jpg",
    title: "To play is to live",
    caption:
      "Here at our store we have a large selection of high quality toys.",
    category: "landing",
    url: "#",
  },

  /* JS-PROJECTS */

  {
    src: "../img/card-img/card-4.jpg",
    title: "Halloween",
    caption: "Cutest Pumpkin",
    category: "js-project",
    url: "#",
  },
  {
    src: "../img/card-img/chose-your-style.jpg",
    title: "Chose your style",
    caption: "Style Product.",
    category: "js-project",
    url: "#",
  },
  {
    src: "../img/card-img/sweet-ice-cream.jpg",
    title: "Sweet ice cream",
    caption:
      "Discover a world of refined flavors with our exquisite ice selection.",
    category: "js-project",
    url: "#",
  },
  {
    src: "../img/card-img/to-do-list.jpg",
    title: "To do List",
    caption: "Time for big things.",
    category: "js-project",
    url: "#",
  },
];

const galleryItems = galleryImages.filter(
  (item) => item.category === "landing"
);
const jsProjectItems = galleryImages.filter(
  (item) => item.category === "js-project"
);

function renderProjects(items, section) {
  section.innerHTML = "";

  items.forEach((item, index) => {
    const formattedIndex = (index + 1).toString().padStart(2, "0");

    const porojectHTML = `
    <div class="gallery-item">
    <div class='gallery-content'>
    <img src="${item.src}" alt='${item.caption}' class='img'>
    <a href='${item.url}' class="overlay" target='_blank'>
    <p class='card-number'>${formattedIndex}</p>
       <h3 class='card-title head'>${item.title}</h3>
       </a>
       </div>
       <p class='img-caption'>${item.caption}</p>
       </div>
       `;
    section.innerHTML += porojectHTML;
  });
}

renderProjects(galleryItems, gallery);
renderProjects(jsProjectItems, jsprojectSection);
