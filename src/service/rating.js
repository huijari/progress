import nanoid from 'nanoid'

const RatingService = {
  /**
   * Returns all ratings
   */
  getAll: () => JSON.parse(localStorage.getItem('ratings')) || [],

  /**
   * Return the ratings for the provided ids
   */
  get: ids => RatingService.getAll().filter(({ id }) => ids.includes(id)),

  /**
   * Returns the rating for the specified id
   */
  getOne: id => RatingService.getAll().find(rating => rating.id === id),

  /**
   * Saves a new rating or update an existing one if there's an id
   */
  save: rating => {
    const ratings = RatingService.getAll()
    if (rating.id === undefined) {
      rating.id = nanoid()
      ratings.push(rating)
    } else {
      const target = ratings.findIndex(({ id }) => id === rating.id)
      ratings[target] = rating
    }
    localStorage.setItem('ratings', JSON.stringify(ratings))
  }
}

export default RatingService
