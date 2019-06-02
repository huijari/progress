import React from 'react'

import useRating from './useRating'

const SubjectNotFound = () => <span>Subject not found.</span>
const RatingNotFound = () => <span>Rating not found.</span>

const Rating = props => {
  const {
    subjectNotFound,
    ratingNotFound,
    values,
    errors = {},
    isValid,
    handleChange,
    handleSubmit
  } = useRating(props)

  if (subjectNotFound) return <SubjectNotFound />
  if (ratingNotFound) return <RatingNotFound />

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name
        <input
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        <i>{errors.name}</i>
      </label>
      <label>
        total
        <input
          name="total"
          type="number"
          min={1}
          value={values.total === undefined ? '' : values.total}
          onChange={handleChange}
        />
        <i>{errors.total}</i>
      </label>
      <label>
        score
        <input
          name="score"
          type="number"
          min={0}
          value={values.score === undefined ? '' : values.score}
          onChange={handleChange}
        />
        <i>{errors.score}</i>
      </label>
      <button disabled={!isValid}>save</button>
    </form>
  )
}

export default Rating
