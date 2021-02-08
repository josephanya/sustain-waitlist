const formModal = document.getElementById("form-modal");
const successModal = document.getElementById("success-modal");
const openBtn = document.getElementById("open-form");
const closeBtn = document.getElementsByClassName("close-modal")[0];
const joinBtn = document.getElementById("join-button");

openBtn.addEventListener('click', () => formModal.style.display = "block");
closeBtn.addEventListener('click', () => formModal.style.display = "none");
window.addEventListener('click', (event) => {
    if (event.target == formModal) {
        formModal.style.display = "none";
    }
});

joinBtn.addEventListener('click', submitData);

const submitData = () => {
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let waitlistData = {
        'firstName' : firstName,
        'lastName' : lastName,
        'email' : email
    }
    let token1 = atob("token1");
    let token2 = atob("token2");
    let token3 = atob("token3");
    let urL = `https://hooks.slack.com/services/${token1}/${token2}/${token3}`
    let payload = {"text": `${waitlistData.firstName} ${waitlistData.lastName} just joined the waitlist. Email: ${waitlistData.email}`}
    let otherParam = {
        method: 'POST',
        body: JSON.stringify(payload)
    }

    fetch(`https://cors-anywhere.herokuapp.com/${urL}`, otherParam)
    .then(res => {
        if(res.status == 200){

        }else{

        }
        return res.json()
    })
    .catch(error =>{ 
        console.log(error);
    })
}