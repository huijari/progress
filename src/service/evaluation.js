import nanoid from 'nanoid'

const EvaluationService = {
  /**
   * Returns all the evaluations
   */
  getAll: () => JSON.parse(localStorage.getItem('evaluations')) || [],

  /**
   * Return the evaluation for the provided id
   */
  getOne: id =>
    EvaluationService.getAll().find(evaluation => evaluation.id === id),

  /**
   * Saves a new evaluation or update an existing one if there's an id
   */
  save: evaluation => {
    const evaluations = EvaluationService.getAll()

    if (evaluation.id === undefined) {
      evaluation.id = nanoid()
      evaluations.push(evaluation)
    } else {
      const target = evaluations.findIndex(evaluation => evaluation.id === id)
      evaluations[target] = evaluation
    }

    localStorage.setItem('evaluations', JSON.stringify(evaluations))
  }
}

export default EvaluationService
