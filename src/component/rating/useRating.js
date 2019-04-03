import useForm from '@uneksija/useform'

import RatingService from '../../service/rating'
import SubjectService from '../../service/subject'

function validate({ name, total }) {
  const errors = {}
  if (name === undefined || name === '') errors.name = 'Required'
  if (total === undefined) errors.total = 'Required'
  return errors
}

function useRating({
  match: {
    params: { subjectId, ratingId }
  },
  history
}) {
  const subject = SubjectService.getOne(subjectId)
  if (subject === undefined) return { subjectNotFound: true }

  const rating = RatingService.getOne(ratingId)
  if (
    ratingId !== undefined &&
    (rating === undefined || !subject.ratings.includes(ratingId))
  )
    return { ratingNotFound: true }

  const onSubmit = values => {
    if (values.score === '') values.score = undefined
    RatingService.save(values)
    if (ratingId === undefined) {
      subject.ratings.push(values.id)
      SubjectService.save(subject)
    }
    history.push(`/s/${subjectId}`)
  }

  const initialValues = rating || {
    id: undefined,
    name: 'Rating',
    total: 1,
    score: ''
  }

  return useForm({
    initialValues,
    validate,
    onSubmit
  })
}

export default useRating
