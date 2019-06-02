function individualStats({ score, total }) {
  if (score !== undefined)
    return {
      earned: score,
      lost: total - score,
      unknown: 0
    }
  return {
    earned: 0,
    lost: 0,
    unknown: total
  }
}

function ScoreStats(ratings) {
  const stats = ratings.reduce(
    (stats, rating) => {
      const { earned, lost, unknown } = individualStats(rating)
      return {
        earned: earned + stats.earned,
        lost: lost + stats.lost,
        unknown: unknown + stats.unknown
      }
    },
    {
      earned: 0,
      lost: 0,
      unknown: 0
    }
  )
  const remaining = 100 - stats.earned - stats.lost - stats.unknown

  return {
    ...stats,
    remaining
  }
}

export default ScoreStats
