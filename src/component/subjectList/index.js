import React from 'react'
import { Link } from '@reach/router'

import Local from '../../service/local';
import Subject from '../subject'

const SubjectList = () => {
  const subjects = Local.get('subjects')

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
