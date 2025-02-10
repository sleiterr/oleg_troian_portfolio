export function handleFormSubmit() {
  document.querySelector("#form-data").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.currentTarget;
    const user = form.elements.Name.value.trim();
    const email = form.elements.email.value.trim();

    const label = document.querySelector(".input-title-email");
    const message = document.querySelector(".mesg");

    message.innerHTML = "";
    message.style.visibility = "hidden";
    label.style.display = "block";

    if (user === "" || email === "") {
      showAlert("All form fields must de filled in");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      label.style.display = "none";
      message.innerHTML = "not valid email";
      //   message.style.color = "black";
      message.style.visibility = "visible";
      return;
    }

    form.style.display = "none";
    label.innerHTML = "We will contact you";

    const formData = {
      name: user,
      email: email,
    };

    console.log(formData);
    form.reset();
  });
}

//? Modal-window

function showAlert(message) {
  const modal = document.querySelector("#custom-alert");
  const alertMessage = document.querySelector("#modal-message");
  const closeBtn = document.querySelector("#close-modal");

  alertMessage.textContent = message;
  modal.style.display = "flex";

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
}
