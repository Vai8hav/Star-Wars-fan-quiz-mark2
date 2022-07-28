let readlineSync = require('readline-sync');


let intro = readlineSync.question('Hello, What is your name? \nYour name: ');
console.log("Nice to meet you " + intro + '!\n\n-----Let us start the quiz-----\n');

let score = 0;

function play(question, answer) {
    let answ = readlineSync.question(question);
    if(answ === answer) {
        score++;
        console.log('You are correct \nCurrent score: ' + score);
    }
    else {
        score--;
        console.log('You are wrong \nCurrent score: ' + score);
    }
    console.log('---------');
}


let quesOne = {
    ques: 'Luke Skywalker was raised on which planet? ',
    ans: 'Tatooine'
}

let quesTwo = {
    ques: 'What colored lightsaber is preferred by the Sith? ',
    ans: 'Red'
}

let quesThree = {
    ques: 'In which film does Luke find out Darth Vader is his father? ',
    ans: 'Return of the Jedi'
}

let quesFour = {
    ques: 'How old was Yoda when he died? (years) ',
    ans: '900'
}

let quesFive = {
    ques: 'Anakin Skywalker grew up to be who? ',
    ans: 'Darth Vader'
}



let highScores = [
    {
        name: 'Ajay',
        score: 5
    },
    {
        name: 'Shikha',
        score: 4
    },
    {
        name: 'Rohan',
        score: 3
    },
    {
        name: 'Sumit',
        score: 3
    },
    {
        name: 'Anushka',
        score: 2
    }
]


let questions = [quesOne, quesTwo, quesThree, quesFour, quesFive];

for(let i=0; i<questions.length; i++) {
    play(questions[i].ques, questions[i].ans);
} 


function showScores() {
  console.log("Your Final score: ", score);

  console.log("\nLeaderboard: (reach out if you think you should be there)");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

showScores();