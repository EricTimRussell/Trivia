import { appState } from "../AppState.js";
import { triviaService } from "../Services/triviaService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTriviaQuestions() {
  let template = ''
  appState.trivia.forEach(t => template += t.QuestionTemplate)
  setHTML('trivia questions', template)
}



export class TriviaController {

  constructor() {
    appState.on('trivia', _drawTriviaQuestions)
    this.getTriviaQuestions()
  }

  async getTriviaQuestions() {
    try {
      await triviaService.getTriviaQuestions()
    } catch (error) {
      console.error('[getTriviaQuestions]', error)
    }
  }




}