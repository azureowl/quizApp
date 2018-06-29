function startQuiz () {
    $('.js-start-quiz').click(function () {
        $('main').filter('.js-hidden').removeAttr('class');
        $('.initializer').addClass('js-hidden');
        renderQuiz();
    });
}

function renderQuiz () {
    let questionProgress = tracker.questionNumber;
    if (questionProgress <= 10) {
        $('.js-fun-fact').html('<p class="goal">Each correct answer awards you a rung for your ladder. Collect <span class="condition-win">8</span> or more to reach the jar of honey!</p>');
        renderQuestion();
        displayScore();
        displayQuestionsLeft();
    } else {
        displayFinalResult();
    }
}

function generateMultipleChoice (num) {
    let choices = DATAQ[num].choices.map((choice, i) => {
        return `
        <div>
            <input type="radio" name="q${num + 1}" id="a${i + 1}" value="${choice}" ${i === 0 ? "required" : ''}>
            <label for="a${i + 1}">${choice}</label>
        </div>
        `;
    });
   return `
      <div class="js-multiple-choice multiple-choice">
          ${choices.join('')}
      </div>`;
}

function generateQuestionTitle (questionIndex) {
    return `<legend class="js-question question-title">Question ${questionIndex + 1}: ${DATAQ[questionIndex].question}</legend>`;
}

function generateQuestionString () {
    let questionIndex = tracker.questionNumber - 1;
    let multipleChoices = generateMultipleChoice(questionIndex);
    let questionTitle = generateQuestionTitle(questionIndex);
    return html =
    `<fieldset>
        ${questionTitle}
        ${multipleChoices}
    </fieldset>
    <button class="js-next" type="submit">Next</button>`;
}

function renderQuestion () {
    let content = generateQuestionString();
    $('.js-form').html(content);
}

function trackScore (score) {
    tracker.score+=score;
}

function trackQuestionProgress () {
    tracker.questionNumber++;
}

function displayScore () {
    $('.js-score').html(tracker.score);
}

function displayQuestionsLeft () {
    $('.js-question-progress').html(tracker.questionNumber);
}

function handleFormSubmission () {
    $('.js-form').on('submit', function (e) {
        e.preventDefault();
        $('.js-next').text('Continue').addClass('js-continue continue');
        trackScore(checkIfAnswerIsCorrect(tracker.questionNumber));
        displayScore();
        giveFeedbackAfterEachQuestion(tracker.questionNumber);
        addRungToCanvasLadder();
        alertFeedbackUpdate();
        goToNextQuestion();
    });
}

function checkIfAnswerIsCorrect (questionNumber) {
    let questionIndex = questionNumber - 1;
    let userAnswer = DATAQ[questionIndex].userAnswer = $(`input[name="q${questionNumber}"]:checked`).val();
    $('input:not(:checked)').attr('disabled', 'disabled');
    if (userAnswer === DATAQ[questionIndex].correct) {
        return 1;
    }
    return 0;
}

function giveFeedbackAfterEachQuestion (questionNumber) {
    let questionIndex = questionNumber - 1;
    let question = DATAQ[questionIndex];
    let mark = question.userAnswer === question.correct ? "CORRECT" : "INCORRECT";
    let comment = `<p>
    <span class="mark ${mark.toLowerCase()}">${mark}</span> You answered: ${question.userAnswer}.</p>
    <p>${question.feedback}</p>`;
    $('.js-fun-fact').html(comment);
}

function addRungToCanvasLadder () {
    if (tracker.score > 0) {
        renderRung(tracker.score);
    }
}

function goToNextQuestion () {
    $('.js-continue').on('click', function () {
        trackQuestionProgress();
        $('.js-fun-fact').html('');
        $('.read-more button').removeClass('alert');
        $('.read-more button').text('Read More');
        renderQuiz();
    });
}

function displayFinalResult () {
    $('.js-continue').attr('disabled', 'disabled');
    $('.js-final-result').removeClass('js-hidden');
    $('.js-form, .js-form + div').addClass('js-hidden');
    $('.read-more button').text('How\'d I do?');
    $('.read-more button').attr('disabled', 'disabled');
    displayScore();
    if (tracker.score/10 >= 0.8) {
        $('.js-honey-acquired').html('You reached the honey jar! NOM, NOM, NOM!');
    } else if (tracker.score/10 === 0.7) {
        $('.js-honey-acquired').html('Your fingers brushed against the jar, but it was still out of reach.');
    } else {
        $('.js-honey-acquired').html('The honey jar is too high for you. You\'ll just have to try again!');
    }
}

function restartQuiz () {
    $('.js-restart').click(() => {
        $('main').addClass('js-hidden');
        $('.js-final-result').addClass('js-hidden');
        $('.js-form, .js-form + div').removeClass('js-hidden');
        $('.initializer').removeClass('js-hidden');
        $('.read-more button').text('Read More');
        $('.read-more button').removeAttr('disabled');
        tracker.score = 0;
        tracker.questionNumber = 1;
        clearCanvas();
        drawCanvas();
    });
}

function handleQuizApp () {
    startQuiz();
    handleFormSubmission();
    restartQuiz();
    drawCanvas();
}

$(handleQuizApp);
