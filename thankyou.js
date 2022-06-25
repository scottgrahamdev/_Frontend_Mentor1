const mainContainer = document.querySelector("body");
const sumbitButton = document.querySelector(".card-btn");

function thanksContent() {
    mainContainer.innerHTML = `
    <section class="main-bg">
    <div class="card position-absolute top-50 start-50 translate-middle">
      <div class="card-body w-500 h-500 text-center">
        <img class="pt-5" src="images/illustration-thank-you.svg" alt="thank you image">
        <h1 class="thanks-title pt-5">Thank you!</h1>
        <p class="thanks-txt pt-3">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </div>
  </section>
    `
}

sumbitButton.addEventListener("click", thanksContent);
