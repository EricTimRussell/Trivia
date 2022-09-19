



export class Trivia {
  constructor(data) {
    this.category = data.category
    this.difficulty = data.difficulty
    this.question = data.question
    this.correct_answers = data.correct_answer
  }






  get QuestionTemplate() {
    return `
    <div class="col-md-8 border border-primary py-3 elevation-5 text-center">
    <div>
      <h1>Triva about Anything</h1>
      <h4 class="py-2">${this.question}</h4>
      <h6>Difficulty: ${this.difficulty}</h6>
      <h5> Hover below for Answer </h5>
    </div>
    <div class="hide">
      <h4 class="py-3">${this.correct_answers}</h4>
    </div>
  </div>
    `
  }


}
