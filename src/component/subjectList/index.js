import React from 'react'
import { Link } from '@reach/router'

import Local from '../../service/local'
import Subject from '../subject'

import './style.css'

const SubjectList = () => {
  const subjects = Local.get('subjects')

  return (
    <div>
      <h1 className="subjectList__header">Subjects</h1>
      <div className="subjectList__grid">
        {subjects.map(({ id, name, ratings }) => (
          <Subject id={id} name={name} ratings={ratings} />
        ))}
      </div>
      <Link className="subjectList__button" to="/s/">
        add subject
      </Link>
    </div>
  )
}

export default SubjectList
