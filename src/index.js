import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { render } from 'react-dom'

import Rating from './component/rating'
import SubjectDetail from './component/subjectDetail'
import SubjectList from './component/subjectList'

const Index = () => (
  <nav
    style={{
      position: 'fixed',
      right: '8px',
      border: '1px solid magenta',
      display: 'flex',
      flexDirection: 'column',
      padding: '8px'
    }}
  >
    <b>subject</b>
    <Link to="/s/nok">subject not found</Link>
    <Link to="/s/sss">subject</Link>
    <hr />
    <b>rating</b>
    <Link to="/s/nok/r/">subject not found</Link>
    <Link to="/s/sss/r/nok">rating not found</Link>
    <Link to="/s/sss/r/">new rating</Link>
    <Link to="/s/sss/r/XUwVl58mwca6RZrlDqRoS">rating</Link>
  </nav>
)

const NotFound = () => '404'

const App = () => (
  <Router>
    <Route path="/" component={Index} />
    <Switch>
      <Route exact path="/s/:subjectId/r/:ratingId?" component={Rating} />
      <Route exact path="/s/:subjectId" component={SubjectDetail} />
      <Route exact path="/" component={SubjectList} />
      <Route exact component={NotFound} />
    </Switch>
  </Router>
)

render(<App />, document.getElementById('root'))
