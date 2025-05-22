let questions = [
  {
    category: "animales",
    question: "cual es el animal mas grande?",
    choices: ["camello", "raton", "conejo"],
    answer: "elefante",
  },
  {
    category: "animales",
    question: "cual es el animal mas grande?",
    choices: ["elefante", "raton", "conejo"],
    answer: "elefante",
  },
  {
    category: "animales",
    question: "cual es el animal mas grande?",
    choices: ["elefante", "raton", "conejo"],
    answer: "elefante",
  },
  {
    category: "animales",
    question: "cual es el animal mas grande",
    choices: ["elefante", "raton", "conejo"],
    answer: "elefante",
  },
  {
    category: "animales",
    question: "cual es el animal mas grande",
    choices: ["elefante", "raton", "conejo"],
    answer: "elefante",
  },
];




function getRandomItem(array) {
    let randomIndex = Math.round(Math.random() * (array.length - 1))
  return array[randomIndex];
}

function getRandomQuestion(questionsObject){
    return questionsObject.question
}


function getRandomComputerChoice(questionsObject) {
    let randomIndex = Math.round(Math.random() * (questionsObject.choices.length - 1))
  return questionsObject.answer[randomIndex]
}

console.log(getRandomQuestion(getRandomItem(questions)));
console.log(getRandomComputerChoice(getRandomItem(questions)));






function getResults(question, answer) {


}

