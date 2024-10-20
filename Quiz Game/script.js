const homeMenu = document.getElementById('home-menu');
const quizContainer = document.getElementById('quiz-container');
const howMade = document.getElementById('how-made');
const startQuizBtn = document.getElementById('start-quiz-btn');
const howMadeBtn = document.getElementById('how-made-btn');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');

let currentQuestion = 0;
let score = 0;

const questions = [
    {
        word: "Adverse",
        question: "What does the word \"adverse\" mean?",
        options: ["Harmful or unfavorable", "Highly beneficial", "Completely neutral", "Exciting and thrilling"],
        correctAnswer: 0
    },
    {
word: "Arid",
question: "What does the word \"arid\" mean?",
options: [
"Extremely dry",
"Flooded with water",
"Cold and damp",
"Windy and stormy"
],
correctAnswer: 0
},
{
word: "Assailant",
question: "Who is an \"assailant\"?",
options: [
"Someone who attacks another",
"A person who helps others",
"A peaceful observer",
"A defender of justice"
],
correctAnswer: 0
},
{
word: "Billow",
question: "What does \"billow\" mean?",
options: [
"To rise or swell in waves",
"To stay flat and still",
"To sink quickly",
"To become hard and rigid"
],
correctAnswer: 0
},
{
word: "Confront",
question: "What does it mean to \"confront\" someone?",
options: [
"To face someone or something boldly",
"To run away from a situation",
"To ignore completely",
"To encourage from afar"
],
correctAnswer: 0
},
{
word: "Constrain",
question: "What does the word \"constrain\" mean?",
options: [
"To restrict or limit",
"To free from limitations",
"To encourage growth",
"To allow full flexibility"
],
correctAnswer: 0
},
{
word: "Contemporary",
question: "What does the word \"contemporary\" refer to?",
options: [
"Belonging to the same period",
"From a distant past",
"Pertaining to the future",
"Ancient and outdated"
],
correctAnswer: 0
},
{
word: "Depict",
question: "What does it mean to \"depict\" something?",
options: [
"To represent or show in a picture or description",
"To destroy or erase",
"To hide from view",
"To change its form completely"
],
correctAnswer: 0
},
{
word: "Disinterested",
question: "What does \"disinterested\" mean?",
options: [
"Impartial or unbiased",
"Extremely enthusiastic",
"Fully invested",
"Completely unaware"
],
correctAnswer: 0
},
{
word: "Encompass",
question: "What does the word \"encompass\" mean?",
options: [
"To include or surround completely",
"To exclude or reject",
"To divide into parts",
"To reduce in size"
],
correctAnswer: 0
},
{
word: "Groundless",
question: "What does it mean if something is \"groundless\"?",
options: [
"Without a valid reason or basis",
"Fully supported by evidence",
"Based on solid proof",
"Clearly justified"
],
correctAnswer: 0
},
{
word: "Hypocrite",
question: "What is a \"hypocrite\"?",
options: [
"Someone who pretends to have beliefs they don't follow",
"A person who consistently follows their beliefs",
"A person who openly admits their mistakes",
"Someone who is honest and transparent"
],
correctAnswer: 0
},
{
word: "Incomprehensible",
question: "What does the word \"incomprehensible\" mean?",
options: [
"Impossible to understand",
"Easy to grasp",
"Clear and concise",
"Readily explainable"
],
correctAnswer: 0
},
{
word: "Manipulate",
question: "What does it mean to \"manipulate\" someone or something?",
options: [
"To control or influence cleverly",
"To leave untouched",
"To follow passively",
"To avoid getting involved"
],
correctAnswer: 0
},
{
word: "Maximum",
question: "What does the word \"maximum\" mean?",
options: [
"The greatest possible amount",
"The smallest possible amount",
"A moderate amount",
"An average value"
],
correctAnswer: 0
},
{
word: "Mimic",
question: "What does it mean to \"mimic\" someone?",
options: [
"To imitate or copy",
"To avoid interacting with",
"To strongly oppose",
"To ignore their actions"
],
correctAnswer: 0
},
{
word: "Ruffle",
question: "What does it mean to \"ruffle\" something?",
options: [
"To disturb the smoothness",
"To calm and smooth out",
"To solidify its shape",
"To polish to a shine"
],
correctAnswer: 0
},
{
word: "Serene",
question: "What does the word \"serene\" mean?",
options: [
"Calm, peaceful, and untroubled",
"Chaotic and unpredictable",
"Fast-paced and energetic",
"Loud and disruptive"
],
correctAnswer: 0
},
{
word: "Sheepish",
question: "What does it mean to feel \"sheepish\"?",
options: [
"Embarrassed or shy",
"Extremely confident",
"Angry and defiant",
"Overjoyed and excited"
],
correctAnswer: 0
},
{
word: "Stamina",
question: "What does the word \"stamina\" mean?",
options: [
"The ability to sustain physical or mental effort",
"The ability to recover quickly",
"The inability to endure",
"A short burst of energy"
],
correctAnswer: 0
}
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    shuffleArray(questions);
    currentQuestion = 0;
    score = 0;
    homeMenu.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        questionEl.textContent = question.question;
        optionsEl.innerHTML = '';
        resultEl.textContent = '';
        nextBtn.style.display = 'none';  // Hide the next button initially

        let shuffledOptions = [...question.options];
        shuffleArray(shuffledOptions);

        shuffledOptions.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.addEventListener('click', () => selectOption(index, shuffledOptions.indexOf(question.options[question.correctAnswer])));
            optionsEl.appendChild(button);
        });
    } else {
        finishQuiz();
    }
}

function selectOption(selectedIndex, correctIndex) {
    const options = optionsEl.getElementsByClassName('option');

    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;  // Disable all buttons after selection
        if (i === correctIndex) {
            options[i].classList.add('correct');
        } else if (i === selectedIndex) {
            options[i].classList.add('incorrect');
        }
    }

    if (selectedIndex === correctIndex) {
        resultEl.textContent = 'Correct!';
        score++;
    } else {
        resultEl.textContent = 'Incorrect. The correct answer is: ' + options[correctIndex].textContent;
    }

    currentQuestion++;
    updateScore();
    nextBtn.style.display = 'block';  // Show the next button
    nextBtn.removeEventListener('click', nextQuestion);  // Remove previous listener if exists
    nextBtn.addEventListener('click', nextQuestion);     // Add new listener for next question
}

function updateScore() {
    scoreEl.textContent = `Score: ${score}/${currentQuestion}`;
}

function finishQuiz() {
    questionEl.textContent = 'Quiz completed!';
    optionsEl.innerHTML = '';
    resultEl.textContent = `Your final score is ${score}/${questions.length}`;
    const percentage = (score / questions.length) * 100;
    scoreEl.textContent = `You got ${percentage.toFixed(2)}% correct.`;
    nextBtn.textContent = 'Restart Quiz';
    nextBtn.style.display = 'block';
    nextBtn.removeEventListener('click', nextQuestion);
    nextBtn.addEventListener('click', startQuiz);  // Restart the quiz on clicking "Restart Quiz"
}

startQuizBtn.addEventListener('click', startQuiz);
howMadeBtn.addEventListener('click', () => {
    homeMenu.classList.add('hidden');
    howMade.classList.remove('hidden');
});
backBtn.addEventListener('click', () => {
    howMade.classList.add('hidden');
    homeMenu.classList.remove('hidden');
});
