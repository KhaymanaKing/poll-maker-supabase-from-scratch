// import
import { getPoll, createPoll } from '../fetch-utils.js';

import { renderPoll } from '../render.js';

const pollForm = document.querySelector('.form');
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
const currentPollEl = document.querySelector('#current-poll');
const previousPollsEl = document.querySelector('#previous-polls');


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

pollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const pollData = new FormData(pollForm);

    pollQuest = pollData.get('poll-question');
    console.log(pollQuest);
    optOneInput = pollData.get('option-one');
    optOneVotes = pollData.get('option-one-votes');
    optTwoInput = pollData.get('option-two');
    optTwoVotes = pollData.get('option-two-votes');

    
    questionTextEl.textContent = pollQuest;
    optionOneTextEl.textContent = optOneInput;
    optionTwoTextEl.textContent = optTwoInput;
    optionOneVotesEl.textContent = optOneVotes;
    optionTwoVotesEl.textContent = optTwoVotes;


    // displayCurrentPoll();
    //will be a display poll function


    pollForm.reset();

});
// function displayCurrentPoll(){

// }

endPollButton.addEventListener('click', async () => {
    await 
    displayAllPolls();
});

async function displayAllPolls(){
    const polls = await getPoll();

    previousPollsEl.textContent = '';

    for (let poll of polls) {
        const newPollEl = renderPoll(poll);

        previousPollsEl.append(newPollEl);
    }
}

// displayCurrentPoll();