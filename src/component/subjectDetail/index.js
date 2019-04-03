import React from 'react'
import { Link } from 'react-router-dom'

import Editable from '../editable'
import useSubjectDetail from './useSubjectDetail'

const SubjectNotFound = () => <span>subject not found</span>

const SubjectDetail = props => {
  const { subjectNotFound, id, name, changeName, ratings } = useSubjectDetail(
    props
  )

  if (subjectNotFound) return <SubjectNotFound />

  return (
    <div>
      <Editable value={name} onChange={changeName} />
      <ul>
        {ratings.map(rating => (
          <li>
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
