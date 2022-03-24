export function renderPoll(poll){
    const div = document.createElement('div');
    const questionDiv = document.createElement('h2');
    const optionOneDiv = document.createElement('h3');
    const oneVotes = document.createElement('p');
    const optionTwoDiv = document.createElement('h3');
    const twoVotes = document.createElement('p');

    div.classList.add('polls');

    questionDiv.textContent = poll.pollQuest;
    optionOneDiv.textContent = poll.optOneInput;
    optionTwoDiv.textContent = poll.optTwoInput;
    oneVotes.textContent = poll.optOneVotes;
    twoVotes.textContent = poll.optTwoVotes;

    div.append(
        questionDiv,
        optionOneDiv,
        optionTwoDiv,
        oneVotes,
        twoVotes
    );
    return div;
}