import React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'

import Rating from './page/rating'
import SubjectDetail from './page/subjectDetail'
import SubjectList from './page/subjectList'

import './style.css'

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
