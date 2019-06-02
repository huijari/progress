import React from 'react'
import { VictoryPie } from 'victory-pie'

import ScoreStats from '../../service/scoreStats'

const colors = ['#333', '#666', '#999', 'transparent']

const ScoreChart = ({ ratings }) => {
  const { earned, unknown, remaining, lost } = ScoreStats(ratings)
  const data = [
    { x: 'Earned', y: earned },
    { x: 'Unknown', y: unknown },
    { x: 'Remaining', y: remaining },
    { x: 'Lost', y: lost }
  ]
  return (
    <div style={{ height: 200 }}>
      <VictoryPie
        data={data}
        colorScale={colors}
        innerRadius={70}
        labels={['Earned', 'Unknown', 'Remaining']}
      />
    </div>
  )
}

export default ScoreChart
