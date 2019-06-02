import React, { Fragment } from 'react'
import { Link } from '@reach/router'

import './style.css'

const Subject = ({ id, name, ratings }) => (
  <Fragment>
    <span>34%</span>
    <Link className="Subject__link" to={`/s/${id}`}>
      {name}
    </Link>
  </Fragment>
)

export default Subject
