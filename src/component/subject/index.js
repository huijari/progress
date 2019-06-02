import React, { Fragment } from 'react'
import { Link } from '@reach/router'

import Local from '../../service/local'
import Score from '../score'

import './style.css'

const Subject = ({ id, name, ratings }) => {
  const ratingList = Local.get('ratings', ratings)

  return (
    <Fragment>
      <Score ratings={ratingList} />
      <Link className="Subject__link" to={`/s/${id}`}>
        {name}
      </Link>
    </Fragment>
  )
}

export default Subject
