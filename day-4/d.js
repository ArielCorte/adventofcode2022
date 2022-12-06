const fs = require('fs')

const handleInput = (input) => {
  const pairs = input
    .split('\n')
    .map((pair) =>
      pair
        .split(',')
        .map((section) => section.split('-').map((str) => parseInt(str)))
    )
  const totalContains = pairs.reduce((sum, pair) => {
    const firstElfSections = pair[0]
    const secondElfSections = pair[1]
    if (
      (firstElfSections[0] <= secondElfSections[0] &&
        firstElfSections[1] >= secondElfSections[1]) ||
      (secondElfSections[0] <= firstElfSections[0] &&
        secondElfSections[1] >= firstElfSections[1])
    ) {
      return sum + 1
    }
    return sum
  }, 0)
  const totalOverlaps = pairs.reduce((sum, pair) => {
    const firstElfSections = pair[0]
    const secondElfSections = pair[1]
    if (
      firstElfSections[0] > secondElfSections[1] ||
      firstElfSections[1] < secondElfSections[0]
    ) {
      return sum
    }
    return sum + 1
  }, 0)
  return totalOverlaps
}

fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(handleInput(data))
})
