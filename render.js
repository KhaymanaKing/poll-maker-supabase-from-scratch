export function renderPoll(poll){
    const div = document.createElement('div');
    const questionDiv = document.createElement('h2');
    const optionOneDiv = document.createElement('h3');
    const oneVotes = document.createElement('p');
    const optionTwoDiv = document.createElement('h3');
    const twoVotes = document.createElement('p');

    div.classList.add('polls');

    questionDiv.textContent = poll.question;
    optionOneDiv.textContent = poll.option_one;
    optionTwoDiv.textContent = poll.option_two;
    oneVotes.textContent = poll.option_one_votes;
    twoVotes.textContent = poll.option_two_votes;

    div.append(
        questionDiv,
        optionOneDiv,
        optionTwoDiv,
        oneVotes,
        twoVotes
    );
    return div;
}