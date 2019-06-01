import React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'

import Rating from './component/rating'
import SubjectDetail from './component/subjectDetail'
import SubjectList from './component/subjectList'

const NotFound = () => '404'

const App = () => (
  <Router>
    <Rating path="/s/:subjectId/r/:ratingId?" />
    <SubjectDetail path="/s/:subjectId" />
    <SubjectList path="/" />
    <NotFound default />
  </Router>
)

render(<App />, document.getElementById('root'))
