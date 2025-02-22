/*
Write a function that takes a student's score (0-100) 
as input and returns their letter grade (A, B, C, D, or F). 
Use if/else if/else statements to determine the grade ranges. 
(A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60).
*/

let studentScore = 59

function scoreCalculator (score){
    if (score <= 59){
        console.log(score + " is your score so your grade is F")
    }
    else if (score >=60 && score <69) {
        console.log(score + " is your score so your grade is D")
    }
    else if (score >= 70 && score < 79){
        console.log(score + " is your score so your grade is C")
    }
    else if (score >= 80 && score < 89){
        console.log(score + " is your score so your grade is B")
    }
    else {
        console.log(score + " is your score so your grade is A")
    }
}

scoreCalculator(studentScore)