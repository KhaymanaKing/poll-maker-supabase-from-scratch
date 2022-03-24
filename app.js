// import functions and grab DOM elements
import { signUp } from './fetch-utils.js';
import { signIn } from './fetch-utils.js';

const signUpForm = document.querySelector('.sign-up');
const loginForm = document.querySelector('.login');
// let state

// set event listeners 

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const signUpData = new FormData(signUpForm);
    const email = signUpData.get('sign-up-email');
    const password = signUpData.get('sign-up-password');
    console.log(email);
    await signUp(email, password);

    window.location.href = './polls';
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const loginData = new FormData(signUpForm);
    const email = loginData.get('login-email');
    const password = loginData.get('login-password');
    await signIn(email, password);

    window.location.href = './polls';
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
