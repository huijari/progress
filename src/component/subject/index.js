import React from 'react'
import { Link } from '@reach/router'

import RatingService from '../../service/rating'
import ScoreChart from '../scoreChart'

const Subject = ({ id, name, ratings }) => {
  const ratingList = RatingService.get(ratings)
  return (
    <div>
      <b>{name}</b>
      <Link to={`/s/${id}`}>edit</Link>
      <ScoreChart ratings={ratingList} />
    </div>
  )
}

export default Subject
