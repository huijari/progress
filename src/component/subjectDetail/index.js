import React from 'react'
import { Link } from '@reach/router'

import Editable from '../editable'
import ScoreChart from '../scoreChart'
import useSubjectDetail from './useSubjectDetail'

const SubjectNotFound = () => <span>subject not found</span>

const SubjectDetail = props => {
  const { subjectNotFound, id, name, changeName, ratings } = useSubjectDetail(
    props
  )

  if (subjectNotFound) return <SubjectNotFound />

  return (
    <div>
      <ScoreChart ratings={ratings} />
      <Editable value={name} onChange={changeName} />
      <ul>
        {ratings.map(rating => (
          <li key={rating.id}>
            {rating.name}
            <Link to={`/s/${id}/r/${rating.id}`}>edit</Link>
          </li>
        ))}
      </ul>
      <Link to={`/s/${id}/r/`}>new rating</Link>
    </div>
  )
}

export default SubjectDetail
