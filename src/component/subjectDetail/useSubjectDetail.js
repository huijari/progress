import { useState } from 'react'

import SubjectService from '../../service/subject'
import RatingService from '../../service/rating'

function useSubjectDetail({
  match: {
    params: { subjectId }
  }
}) {
  const subject = SubjectService.getOne(subjectId)
  if (subject === undefined) return { subjectNotFound: true }

  const [name, setName] = useState(subject.name)
  const changeName = newName => {
    subject.name = newName
    SubjectService.save(subject)
    setName(newName)
  }

  const ratings = RatingService.get(subject.ratings)

  return {
    name,
    changeName,
    ratings,
    id: subject.id
  }
}

export default useSubjectDetail
