import React from 'react'
import { Link } from '@reach/router'

import Local from '../../service/local';
import ScoreChart from '../scoreChart'

const Subject = ({ id, name, ratings }) => {
  const ratingList = Local.get('ratings', ratings)
  return (
    <div>
      <b>{name}</b>
      <Link to={`/s/${id}`}>edit</Link>
      <ScoreChart ratings={ratingList} />
    </div>
  )
}

export default Subject
