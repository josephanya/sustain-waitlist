const formModal = document.getElementById("form-modal");
const openBtn = document.getElementById("open-form");
const closeBtn = document.getElementsByClassName("close-modal")[0];

const joinBtn = document.getElementById("join-button");
const successModal = document.getElementById("success-modal");

openBtn.addEventListener('click', () => formModal.style.display = "block");
closeBtn.addEventListener('click', () => formModal.style.display = "none");
window.addEventListener('click', (event) => {
    if (event.target == formModal) {
        formModal.style.display = "none";
    }
});
