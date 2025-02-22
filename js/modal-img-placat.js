//* MODAL-IMAGE-PLACAT

export function imagePlacat() {
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
    modalImage.src = "./img/Placat Le goût infini/Le-goût-infini-1.jpg";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
