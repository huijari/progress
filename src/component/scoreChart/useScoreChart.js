function calculateIndividual({ score, total }) {
  if (score !== null)
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

function useScoreChart(ratings) {
  const stats = ratings.reduce(
    (stats, rating) => {
      const { earned, lost, unknown } = calculateIndividual(rating)
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

export default useScoreChart
