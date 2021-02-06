var formModal = document.getElementById("form-modal");
var successModal = document.getElementById("success-modal");
var openBtn = document.getElementById("open-form");
var closeBtn= document.getElementsByClassName("close-modal")[0];

openBtn.onclick = function () {
    formModal.style.display = "block";
}

closeBtn.onclick = function () {
    formModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == formModal) {
        formModal.style.display = "none";
    }
}

const submitData = () => {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;

    var waitlistData = {
        'firstName' : firstName,
        'lastName' : lastName,
        'email' : email
    }    
}