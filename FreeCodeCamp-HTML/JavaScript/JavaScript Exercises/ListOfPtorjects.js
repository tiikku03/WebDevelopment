const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increaseButton");
const realTimeCounter = document.getElementById("realTimeCounter");
let counterValue = 0;

function increaseCounter() {
  counterValue += 1;
  realTimeCounter.innerText = counterValue;
}

function decreaseCounter() {
  if (counterValue >= 1) {
    counterValue -= 1;
    realTimeCounter.innerText = counterValue;
  } else {
    return 0;
  }
}

function resetCounter() {
  counterValue = 0;
  realTimeCounter.innerText = counterValue;
}

increaseButton.addEventListener("click", increaseCounter);
decreaseButton.addEventListener("click", decreaseCounter);
resetButton.addEventListener("click", resetCounter);

/*---------------------------Reviews information-------------------------- */
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const personImg = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const previousButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

let currentReview = 0;

function showPerson(person){
    let item = reviews[person]
    personImg.src = item.img
    author.innerText = item.author
    job.innerText = item.job
    info.innerText = item.text
}

function nextReview() {
  currentReview++;
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  showPerson(currentReview);
}

function previousReview() {
  currentReview--
  if (currentReview < 0){
    currentReview = reviews.length -1
  }
  showPerson(currentReview)

}

previousButton.addEventListener("click", previousReview);
nextButton.addEventListener("click", nextReview);


/*---------------------------Navigation Menu-------------------------- */

const navigationButton = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
const socialIcons = document.querySelector(".social-icons")


function showNavigationMenu() {
    links.classList.toggle("show-links");
}
navigationButton.addEventListener("click",showNavigationMenu )


/*------------------------------Side Bar-----------------------------------*/

const questionButton = document.querySelector(".question-btn")
const question = document.querySelector(".question-text")

question.style.display

questionButton.addEventListener("click", showQuestion)
questionButton.addEventListener("click", hideQuestion)