//Liste mit allen Fragen
let questions = [
    {
        question: "Wie legt man eine unveränderliche Variable an?",
        answers: [
            { answer: "const", isCorrect: false },
            { answer: "let", isCorrect: false },
            { answer: "var", isCorrect: true },
            { answer: "con", isCorrect: false }
        ]
    },
    {
        question: "Wofür steht HTML?",
        answers: [
            { answer: "Hyper Tag Markup Language", isCorrect: false },
            { answer: "Hypertext Markup Language", isCorrect: true },
            { answer: "Hypertext Machine Learning", isCorrect: false },
            { answer: "Help The Machine Lives", isCorrect: false }
        ]
    },
    {
        question: "Wie viel Prozent der Programmierer verwenden JavaScript?",
        answers: [
            { answer: "15%", isCorrect: false },
            { answer: "32%", isCorrect: false },
            { answer: "86%", isCorrect: false },
            { answer: "65%", isCorrect: true }
        ]
    },
    {
        question: "Wofür steht CSS",
        answers: [
            { answer: "Cascading Style Sheets", isCorrect: true },
            { answer: "Casual Sick Script", isCorrect: false },
            { answer: "Nothing, its only a Script", isCorrect: false },
            { answer: "Code says soup", isCorrect: false }
        ]
    },
]

//Hier startet das Spiel
newQuestion();



function newQuestion() {
    let randomNumber = randInt(0, questions.length - 1);
    let question = questions[randomNumber];

    console.log(questions)
}

let questionBox = document.getElementByld("question");
questionBox.innerText = randomQuestion.question;

let answerBoxes = document.querySelectorAll(".answer");
for (let i = 0; i < randomQuestion.answers.length; i++) {
    answerBoxes[i].innerText = randomQuestion.answers[i].answer;
}



function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newQuestion() {
    //Speichern der ersten Frage in einer Variablen
    let newQ = questions[0];

    //Speichern der Fragebox aus dem HTML in einer Variablen
    let questionBox = document.getElementById("question");

    //Text in der Fragebox ändern
    questionBox.innerText = newQ.question;

    //Speichern aller Antwortboxen in einer Variablen
    let answerBoxes = document.getElementsByClassName("answer");

    let answers = newQ.answers;

    //Wir gehen durch alle Fragen
    let index = 0;
    for(let a of answers) {
        answerBoxes[index].innerText = a.answer;
        index++;
    }


} 
let isPlaying = false;
function playMusic() {
    var music = document.getElementById("music");
    if (isPlaying) {
        isPlaying = false;
        music.stop();
    } else {
        isPlaying = true;

        music.play
            ();
    }
}

