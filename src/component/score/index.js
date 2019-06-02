import React from 'react'

import ScoreStats from '../../service/scoreStats'

import './style.css'

const colorClass = (earned, lost) => {
  if (lost >= 40) return 'red'
  if (earned >= 60) return 'green'
  return 'blue'
}

const Score = ({ ratings }) => {
  const { earned, lost } = ScoreStats(ratings)
  const className = `Score--${colorClass(earned, lost)}`
  const percentage = earned.toFixed(0).padStart(2, '0')
  return <span className={className}>{percentage}%</span>
}

export default Score
