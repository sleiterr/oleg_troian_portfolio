const gallery = document.querySelector(".gallery-img");

let galleryImages = [
  {
    src: "../img/card-img/card-1.jpg",
    title: "Le gout infini",
    caption: "Osteria Francescana in Modena.",
    url: "#",
  },
  {
    src: "../img/card-img/card-2.jpg",
    title: "Bjarke Ingels",
    caption: "The cultural mediator.",
    url: "#",
  },
  {
    src: "../img/card-img/card-3.jpg",
    title: "Italian Cuisine",
    caption:
      "Italian cuisine is more than just food; it's art, tradition, and love.",
    url: "#",
  },
  {
    src: "../img/card-img/card-4.jpg",
    title: "Halloween",
    caption: "Cutest Pumpkin.",
    url: "#",
  },
];

galleryImages.forEach((item, index) => {
  const formattedIndex = (index + 1).toString().padStart(2, "0");

  gallery.innerHTML += `
    <div class="gallery-item">
     <img src="${item.src}" alt='${item.caption}' class='img'>
     <a href='${item.url}' class="overlay" target='_blank'>
     <p class='card-number'>${formattedIndex}</p>
     <h3 class='card-title'>${item.title}</h3>
     </a>
     <p class='img-caption'>${item.caption}</p>
    </div>
    `;
});
