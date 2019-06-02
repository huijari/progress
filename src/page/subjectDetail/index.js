import React, { Fragment } from 'react'
import { Link } from '@reach/router'

import useSubjectDetail from './useSubjectDetail'
import ScoreChart from '../../component/scoreChart'

import './style.css'

const SubjectNotFound = () => <span>subject not found</span>

const scoreString = (score, total) => {
  const value = score ? score.toFixed(0) : '?'
  return `${value}/${total.toFixed(0).padStart(2, '0')}`
}

const SubjectDetail = props => {
  const { subjectNotFound, id, name, ratings } = useSubjectDetail(props)

  if (subjectNotFound) return <SubjectNotFound />

  return (
    <div>
      <div className="subjectDetail__figure">
        <ScoreChart ratings={ratings} />
      </div>
      <div className="subjectDetail__content">
        <h1 className="subjectDetail__header">{name}</h1>
        <div className="subjectDetail__grid">
          {ratings.map(rating => (
            <Fragment key={rating.id}>
              <Link
                className="subjectDetail__rating"
                to={`/s/${id}/r/${rating.id}`}
              >
                {rating.name}
              </Link>
              <span className="subjectDetail__ratingScore">
                {scoreString(rating.score, rating.total)}
              </span>
            </Fragment>
          ))}
        </div>
        <Link className="subjectDetail__button" to={`/s/${id}/r/`}>
          add rating
        </Link>
      </div>
    </div>
  )
}

export default SubjectDetail
