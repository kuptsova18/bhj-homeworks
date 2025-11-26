var xhr = new XMLHttpRequest();
const card = document.querySelector('.card')
const poll = document.querySelector('.poll')
const pollTitle = document.querySelector('.poll__title')
const pollanswers = document.getElementById('poll__answers');


let currentPollId = null;
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const data = JSON.parse(xhr.responseText);
        const questions = data.data;
        currentPollId  = data.id;

        pollTitle.insertAdjacentHTML('afterbegin',
            `${questions.title}`);
        const answers = questions.answers;
        pollanswers.innerHTML = '';

        answers.forEach((answer,index)=> {
            const button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = answer;
            button.dataset.index = index;

            button.addEventListener('click', (e) => {
                alert('Спасибо, ваш голос засчитан!');
                sendVote(e.target.dataset.index);
            });

            pollanswers.appendChild(button);
        });
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);
xhr.send();

function sendVote(answerIndex) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
                const response = JSON.parse(xhr.responseText);
                console.log('Результаты голосования:', response.stat);
                // Здесь можно добавить отображение результатов
                showResults(response.stat);
        }
    })
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send(`vote=${currentPollId}&answer=${answerIndex}`);
}

function showResults(results){
    
    pollanswers.remove();
    const resultContainer = document.querySelector('poll__results');
    if(resultContainer){
        resultContainer,innerHeight = '';
    }
    poll.insertAdjacentHTML('beforeend', 
                `<div class="poll__results"></div>`);
    const totalVotes = results.reduce((sum, item) => sum + item.votes, 0);
    results.forEach(item =>{
        const pollResults = document.querySelector('.poll__results');
        const percentage = totalVotes > 0 ? (item.votes / totalVotes * 100).toFixed(2) : 0;
        pollResults.insertAdjacentHTML('beforeend', 
                `<div class="poll__item">
                <div> ${item.answer}:<b> ${percentage}%</b></div>
            </div>`);
    })
    

}