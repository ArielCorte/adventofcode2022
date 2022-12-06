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
  let groupRucksacks = []
  for (i = 0; i < rucksacks.length; i += 3) {
    const rucksacksCopy = rucksacks
    groupRucksacks.push(rucksacksCopy.slice(i, i + 3))
  }
  const groupSharedItem = groupRucksacks.map((rucksacks) => {
    const firstElf = rucksacks[0]
    const secondElf = rucksacks[1]
    const thirdElf = rucksacks[2]
    for (const item of firstElf) {
      if (secondElf.indexOf(item) >= 0 && thirdElf.indexOf(item) >= 0)
        return item
    }
  })
  const itemPriority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const sumOfPriorities = groupSharedItem.reduce((sum, item) => {
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
