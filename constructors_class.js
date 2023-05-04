

// You are working on a web application for a car rental company. They want to keep track
// of their car inventory and rental information. Your task is to create a JavaScript class or
// function constructor for representing cars in their inventory and another one for
// representing rental information.


class Car{
    constructor(make, model, year, isAvailable){
       this.make = make;
       this.model = model;
       this.year = year;
       this.isAvailable = isAvailable
    }

    toggleAvailability(){
        let changes = this.isAvailable=!this.isAvailable
        console.log(changes)
    }
}
let car = new Car('Toyota', 'Camry', 2020, true)
console.log({car});
car.toggleAvailability();



// Create a Rental class or function constructor that has the following properties:
// ● car (Car object): The car that has been rented.
// ● renterName (string): The name of the person who rented the car.
// ● rentalStartDate (Date object): The start date of the rental period.
// ● rentalEndDate (Date object): The end date of the rental period.
// The Rental class or function constructor should also have a method called
// calculateRentalDuration that returns the rental duration in days.


class Rental extends Car{
    constructor(make, model, year, isAvailable, renterName, rentalStartDate, rentalEndDate){
        super(make, model, year, isAvailable);
        this.renterName = renterName
        this.rentalStartDate = rentalStartDate
        this.rentalEndDate = rentalEndDate
    }
    calculateRentalDuration(){
    }

}

let rental = new Rental(car,'James', new Date('2023-05-01'), new Date('2023-05-05'))


// You are building a simple quiz app that contains multiple-choice questions. Your task is
// to create two JavaScript classes: Question and Quiz. The Question class will represent
// individual questions, and the Quiz class will manage a collection of questions and the
// user's progress.

class Question{
    constructor(text,option,correctAnswer){
        this.text = text;
        this.option = option;
        this.correctAnswer = correctAnswer;
    }
    checkAnswer(TrueAnswer){
        TrueAnswer = 15;
        return TrueAnswer === this.correctAnswer;
    }
}
let question = new Question("How many day in a week",[1,2,3,4,5,6,7],7)
console.log({question})
question.checkAnswer()


// Create a Quiz class with the following properties:
// ● questions(array):An array of Question objects.
// ● currentQuestionIndex(number): The index of the current question in the
// questions array.
// ● score(number): The user’s current score.
// The Quiz class should have the following methods:

class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    addQuestion(question) {
      this.questions.push(question);
    }
  
    nextQuestion() {
      this.currentQuestionIndex++;
    }
  
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
      }
    }
  }

























//   lass Rental{
//     constructor(car,renterDate,rentalStartDate,rentalEndDate){
//         this.car=car;
//         this.renterDate=renterDate;
//         this.rentalStartDate=rentalStartDate;
//         this.rentalEndDate=rentalEndDate;
//     }
//     calculateRentalDuration(){
//         const ONE_DAY_IN_MILLISECONDS = 86400000;
//         const rentalDurationInMilliseconds = this.rentalEndDate - this.rentalStartDate;
//         return Math.round(rentalDurationInMilliseconds / ONE_DAY_IN_MILLISECONDS);

//     }
// }
// const rental = new Rental(car, 'John Doe', new Date('2023-05-01'), new Date('2023-05-05'));
// const rentalDurationInDays = rental.calculateRentalDuration();
// console.log(rentalDurationInDays);






 