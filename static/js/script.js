const SignInButton = document.getElementById('SignIn');
const SignUpButton = document.getElementById('SignUp');
var modalSignIn = document.getElementById('myModalSignIn');
var modalSignUp = document.getElementById('myModalSignUp');
var closeButtonSignIn = document.getElementsByClassName('close')[0];
var closeButtonSignUp = document.getElementsByClassName('close')[1];

function openModalUp() {
  modalSignUp.style.display = 'block';
}

SignUpButton.onclick = openModalUp;

function closeModalSignUp() {
  modalSignUp.style.display = 'none';
}

closeButtonSignUp.onclick = closeModalSignUp;
window.onclick = function(event) {
  if (event.target === modalSignUp) {
    closeModalSignUp();
  }
};

function openModalIn() {
  modalSignIn.style.display = 'block';
}

SignInButton.onclick = openModalIn;

function closeModalSignIn() {
  modalSignIn.style.display = 'none';
}

closeButtonSignIn.onclick = closeModalSignIn;
