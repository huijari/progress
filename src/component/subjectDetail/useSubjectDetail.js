import { useState, useEffect } from 'react'

import SubjectService from '../../service/subject'
import RatingService from '../../service/rating'

function useSubjectDetail({ subjectId }) {
  const [subject, setSubject] = useState()

  useEffect(() => {
    setSubject(SubjectService.getOne(subjectId))
  }, [subjectId])

  if (subject === undefined) return { subjectNotFound: true }

  const changeName = newName => {
    subject.name = newName
    SubjectService.save(subject)
    setSubject(subject)
  }

  const ratings = RatingService.get(subject.ratings)

  return {
    changeName,
    ratings,
    id: subject.id,
    name: subject.name
  }
}

export default useSubjectDetail
