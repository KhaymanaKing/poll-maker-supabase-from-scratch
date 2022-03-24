// import

const form = document.getElementById('form');
const plusOneButton = document.querySelector('.option-one-plus');
const minusOneButton = document.querySelector('.option-one-minus');
const plusTwoButton = document.querySelector('.option-two-plus');
const minusTwoButton = document.querySelector('.option-two-minus');
const endPollButton = document.querySelector('.end-poll-button');       


let question = '';
let optOneInput = '';
let optTwoInput = '';
let optOneVotes = 0;
let optTwoVotes = 0;


plusOneButton.addEventListener('click', () => {
    optOneVotes++;
});

minusOneButton.addEventListener('click', () => {
    optOneVotes--;
});

plusTwoButton.addEventListener('click', () => {
    optTwoVotes++;
});

minusTwoButton.addEventListener('click', () => {
    optTwoVotes--;
});