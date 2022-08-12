const loginModal = document.querySelector('#login-modal');
const signUpModal = document.querySelector('#sign-up-modal');
const exitLogin = document.querySelector('#')

  async function loginModalActive(event) {
    event.preventDefault();
    loginModal.classList.add('is-active');
  }

  async function signUpModalActive(event) {
    event.preventDefault();
    signUpModal.classList.add('is-active');
  }

  async function loginModalActive(event) {
    event.preventDefault();
    loginModal.classList.add('is-active');
  }


document.querySelector('#login').addEventListener('click',loginModalActive);
document.querySelector('#sign-up').addEventListener('click',signUpModalActive);