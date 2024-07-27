document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const successMsg = document.querySelector(".success_msg");
    const errorMsg = document.querySelector(".error_msg");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then((response) => {
        if (response.ok) {
          successMsg.style.display = "block";
          form.reset();
        } else {
          errorMsg.style.display = "block";
        }
      })
      .catch((error) => {
        errorMsg.style.display = "block";
      });
  });
