const fs = require('fs')

const winHelper = ['A', 'B', 'C', 'A']
const pointsPerMatch = (opChoice, myChoice) => {
  if (opChoice === myChoice) return 3
  if (winHelper[winHelper.indexOf(opChoice) + 1] === myChoice) return 6
  return 0
}

const pointsPerChoice = (choice) => {
  if (choice === 'A') return 1

  if (choice === 'B') return 2

  if (choice === 'C') return 3
}

const calculateMyChoice = (matchResult, opChoice) => {
  if (matchResult === 'X')
    return winHelper[winHelper.slice(1, 4).indexOf(opChoice)]
  if (matchResult === 'Y') return opChoice
  if (matchResult === 'Z') return winHelper[winHelper.indexOf(opChoice) + 1]
}

const handleInput = (input) => {
  const choiceTranslator = { X: 'A', Y: 'B', Z: 'C' }
  const matchResultPoints = { X: 0, Y: 3, Z: 6 }
  const formattedInput = input.split('\n').map((round) => round.split(' '))
  const totalPoints = formattedInput.reduce((subPoints, currentRound) => {
    //const myChoice = choiceTranslator[currentRound[1]]
    const oponentChoice = currentRound[0]
    const matchResult = currentRound[1]
    let roundPoints = 0

    //roundPoints += pointsPerMatch(oponentChoice, myChoice)
    //roundPoints += pointsPerChoice(myChoice)

    roundPoints += matchResultPoints[matchResult]
    roundPoints += pointsPerChoice(
      calculateMyChoice(matchResult, oponentChoice)
    )

    return subPoints + roundPoints
  }, 0)
  return totalPoints
}

fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(handleInput(data))
})
