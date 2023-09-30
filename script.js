let modal__button = document.querySelector('.modal__button');
let close = document.querySelector('.close');
let modal = document.querySelector('.fixed-overlay');
let application = document.querySelector('.application');
function toggleClass() {
    modal.classList.toggle('modal-active');
}
close.addEventListener('click', toggleClass);
application.addEventListener('click', toggleClass);

// const button = document.getElementById("modal-button");
// button.innerHTML = "Ваша заявка отправлена";

