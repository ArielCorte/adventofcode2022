const fs = require('fs')

const handleInput = (input) => {
  const rucksacks = input.split('\n')
  const rucksackCompartments = rucksacks.map((rucksack) => [
    rucksack.slice(0, rucksack.length / 2),
    rucksack.slice(rucksack.length / 2),
  ])
  const sharedItems = rucksackCompartments.map((rucksack) => {
    const firstCompartment = rucksack[0]
    const secondCompartment = rucksack[1]
    for (const item of firstCompartment) {
      if (secondCompartment.indexOf(item) >= 0) return item
    }
  })
  const itemPriority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const sumOfPriorities = sharedItems.reduce((sum, item) => {
    return sum + itemPriority.indexOf(item) + 1
  }, 0)
  return sumOfPriorities
}

fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(handleInput(data))
})
