import useForm from '@uneksija/useform'
import { navigate } from '@reach/router'
import { useEffect, useState } from 'react'

import Local from '../../service/local'

function validate({ name, total }) {
  const errors = {}
  if (name === undefined || name === '') errors.name = 'Required'
  if (total === undefined) errors.total = 'Required'
  return errors
}

function useRating({ subjectId, ratingId }) {
  const [subject, setSubject] = useState()
  const [rating, setRating] = useState()

  useEffect(() => {
    setSubject(Local.get('subjects', subjectId))
  }, [subjectId])
  useEffect(() => {
    setRating(Local.get('ratings', ratingId))
  }, [ratingId])

  const onSubmit = values => {
    if (values.score === '') values.score = undefined
    Local.save('ratings', values)
    if (ratingId === undefined) {
      subject.ratings.push(values.id)
      Local.save('subjects', subject)
    }
    navigate(`/s/${subjectId}`)
  }

  const initialValues = rating || {
    id: undefined,
    name: 'Rating',
    total: 1,
    score: ''
  }

  const props = useForm({
    initialValues,
    validate,
    onSubmit
  })

  if (subject === undefined) return { subjectNotFound: true }
  if (
    ratingId !== undefined &&
    (rating === undefined || !subject.ratings.includes(ratingId))
  )
    return { ratingNotFound: true }

  return props
}

export default useRating
