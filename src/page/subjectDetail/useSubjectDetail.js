import { useState, useEffect } from 'react'

import Local from '../../service/local'

function useSubjectDetail({ subjectId }) {
  const [subject, setSubject] = useState()

  useEffect(() => {
    setSubject(Local.get('subjects', subjectId))
  }, [subjectId])

  if (subject === undefined) return { subjectNotFound: true }

  const changeName = newName => {
    subject.name = newName
    Local.save('subjects', subject)
    setSubject(subject)
  }

  const ratings = Local.get('ratings', subject.ratings)

  return {
    changeName,
    ratings,
    id: subject.id,
    name: subject.name
  }
}

export default useSubjectDetail
