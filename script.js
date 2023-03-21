const questions = [
  {
    question: "When was the second world war?",
    A: "1820-1822",
    B: "1310-1450",
    C: "1939-1945",
    D: "1940-1852",
    correctAnswer: "C",
  },
  {
    question: "Who is the prime minister of the USA?",
    A: "Viktor Orbán",
    B: "Barack Obama",
    C: "Joe Biden",
    D: "Donald Trump",
    correctAnswer: "C",
  },
  {
    question: "What is the biggest animal on the planet?",
    A: "Giraffe",
    B: "Blue whale",
    C: "Lion",
    D: "Elephant",
    correctAnswer: "B",
  }
];
var step = 0;
document.getElementById('container').innerHTML = questions[step].question
document.getElementById('answer_a').innerHTML = questions[step].A
document.getElementById('answer_b').innerHTML = questions[step].B
document.getElementById('answer_c').innerHTML = questions[step].C
document.getElementById('answer_d').innerHTML = questions[step].D

document.getElementById('answer_a').onclick = function(){
    if(questions[step].correctAnswer === 'A'){
        alert('Correct')
        if(step === questions.length){
            alert('Game Over!')
            step = 0;
        }else{
            step = step + 1;
        }
    }else{
        alert('Not correct!Try again!')
    }
}
document.getElementById('answer_b').onclick = function(){
    if(questions[step].correctAnswer === 'B'){
        alert('Correct!')
        if(step === questions.length){
            alert('Game Over!')
            step = 0;
        }else{
            step = step + 1;
        }
    }else{
        alert('Not correct!Try again!')
    }
}
document.getElementById('answer_c').onclick = function(){
    if(questions[step].correctAnswer === 'C'){
        alert('Correct')
        if(step === questions.length){
            alert('Game Over!')
            step = 0;
        }else{
            step = step + 1;
        }
    }else{
        alert('Not correct!Try again!')
    }
}
document.getElementById('answer_d').onclick = function(){
    if(questions[step].correctAnswer === 'D'){
        alert('Correct')
        if(step === questions.length){
            alert('Game Over!')
            step = 0;
        }else{
            step = step + 1;
        }
    }else{
        alert('Not correct!Try again!')
    }
}
