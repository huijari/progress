import nanoid from 'nanoid'

const SubjectService = {
  /**
   * Returns all the subjects
   */
  getAll: () => JSON.parse(localStorage.getItem('subjects')) || [],

  /**
   * Return the subject for the provided id
   */
  getOne: id => SubjectService.getAll().find(subject => subject.id === id),

  /**
   * Saves a new subject or update an existing one if there's an id
   */
  save: subject => {
    const subjects = SubjectService.getAll()

    if (subject.id === undefined) {
      subject.id = nanoid()
      subjects.push(subject)
    } else {
      const target = subjects.findIndex(({ id }) => subject.id === id)
      subjects[target] = subject
    }

    localStorage.setItem('subjects', JSON.stringify(subjects))
  }
}

export default SubjectService
