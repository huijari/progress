import React from 'react'
import { Link } from '@reach/router'

import SubjectService from '../../service/subject'
import Subject from '../subject'

const SubjectList = () => {
  const subjects = SubjectService.getAll()

  return (
    <div>
      <ul>
        {subjects.map(({ id, name, ratings }) => (
          <li key={id}>
            <Subject id={id} name={name} ratings={ratings} />
          </li>
        ))}
      </ul>
      <Link to="/s/">add subject</Link>
    </div>
  )
}

export default SubjectList
