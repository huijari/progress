import React from 'react'
import { VictoryPie } from 'victory-pie'

import useScoreChart from './useScoreChart'

const colors = ['#32CCBC', '#90F7EC', '#CE9FFC', 'white']

const ScoreChart = ({ ratings }) => {
  const { earned, unknown, remaining, lost } = useScoreChart(ratings)
  const data = [
    { x: 'Earned', y: earned },
    { x: 'Unknown', y: unknown },
    { x: 'Remaining', y: remaining },
    { x: 'Lost', y: lost }
  ]
  return (
    <div style={{ width: 64, height: 64 }}>
      <VictoryPie
        data={data}
        colorScale={colors}
        innerRadius={70}
        labels={[]}
      />
    </div>
  )
}

export default ScoreChart
