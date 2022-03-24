// import functions and grab DOM elements
import { signUp } from './fetch-utils.js';


const signUpForm = document.getElementById('.sign-up');
const loginForm = document.getElementById('.login');
// let state

// set event listeners 

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const signUpData = new FormData(signUpForm);
    const email = signUpData.get('sign-up-email');
    const password = signUpData.get('sign-up-password');
    await signUp(email, password);

    window.location.href = './polls';
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
