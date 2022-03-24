// import

const form = document.getElementById('form');
const plusOneButton = document.querySelector('#option-one-plus');
const minusOneButton = document.querySelector('#option-one-minus');
const plusTwoButton = document.querySelector('#option-two-plus');
const minusTwoButton = document.querySelector('#option-two-minus');
const endPollButton = document.querySelector('#end-poll-button');       
const optionOneVotesEl = document.querySelector('#option-one-votes');
const optionTwoVotesEl = document.querySelector('#option-two-votes');
const optionOneTextEl = document.querySelector('#option-one-text');
const optionTwoTextEl = document.querySelector('#option-two-text');
const questionTextEl = document.querySelector('#question-text');


//State

let pollQuest = '';
let optOneInput = '';
let optTwoInput = '';
let optOneVotes = 0;
let optTwoVotes = 0;


plusOneButton.addEventListener('click', () => {
    optOneVotes++;

    optionOneVotesEl.textContent = optOneVotes;
});

minusOneButton.addEventListener('click', () => {
    optOneVotes--;
    optionOneVotesEl.textContent = optOneVotes;
});

plusTwoButton.addEventListener('click', () => {
    optTwoVotes++;
    optionTwoVotesEl.textContent = optTwoVotes;
});

minusTwoButton.addEventListener('click', () => {
    optTwoVotes--;
    optionTwoVotesEl.textContent = optTwoVotes;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const pollData = new FormData(form);
    pollQuest = pollData.get('poll-question');
    optOneInput = pollData.get('option-one');
    optTwoInput = pollData.get('option-two');


    //will be a display poll function
    // questionTextEl.textContent = pollQuest;
    // optionOneTextEl.textContent = optOneInput;
    // optionTwoTextEl.textContent = optTwoInput;
    // optionOneVotesEl.textContent = optOneVotes;
    // optionTwoVotesEl.textContent = optTwoVotes;

    form.reset();

});