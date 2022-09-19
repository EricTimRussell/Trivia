import { appState } from "../AppState.js"
import { Trivia } from "../Models/Trivia.js"
import { triviaServer } from "./OpenTrivia-api.js"

class TriviaService {

  async getTriviaQuestions() {
    const res = await triviaServer.get('/api.php', {
      params: {
        amount: 1,
      }
    })
    appState.trivia = res.data.results
      .filter(t => !t.type.includes('boolean'))
      .map(rawData => new Trivia(rawData))

  }
}








export const triviaService = new TriviaService()