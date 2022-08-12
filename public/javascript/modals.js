const loginModal = document.querySelector('#login-modal');
const signUpModal = document.querySelector('#sign-up-modal');


  async function loginModalActive(event) {
    event.preventDefault();
    loginModal.classList.add('is-active');
  }

  async function signUpModalActive(event) {
    event.preventDefault();
    signUpModal.classList.add('is-active');
  }

  async function loginModalClose(event) {
    event.preventDefault();
    loginModal.classList.remove('is-active');
  }

  async function signUpModalClose(event) {
    event.preventDefault();
    signUpModal.classList.remove('is-active');
  }


document.querySelector('#login').addEventListener('click',loginModalActive);
document.querySelector('#sign-up').addEventListener('click',signUpModalActive);
document.querySelector('#close-sign-up').addEventListener('click',signUpModalClose);
document.querySelector('#close-login').addEventListener('click',loginModalClose);
// document.querySelector('#login-complete').addEventListener('click', loginModalClose);
// document.querySelector("#sign-up-complete").addEventListener('click', signUpModalClose);