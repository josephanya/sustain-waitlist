var formModal = document.getElementById("form-modal");
var openBtn = document.getElementById("open-form");

// Get the <span> element that closes the modal
var closeBtn= document.getElementsByClassName("close-modal")[0];

// When the user clicks on the button, open the modal 
openBtn.onclick = function () {
    formModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
    formModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == formModal) {
        formModal.style.display = "none";
    }
}