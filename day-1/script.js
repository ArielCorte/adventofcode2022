const fs = require('fs')

const handleInput = (input) => {
  const formattedInput = input.split('\n')
  const slicedInput = formattedInput.reduce(
    (subArray, currentItem, index) => {
      const cloneSubArray = subArray
      if (currentItem === '') {
        cloneSubArray.push([])
        return cloneSubArray
      }
      cloneSubArray[cloneSubArray.length - 1].push(currentItem)
      return cloneSubArray
    },
    [[]]
  )
  const totalCalories = slicedInput.map((elf) => {
    return elf.reduce((a, b) => parseInt(a) + parseInt(b), 0)
  })
  const maxCaloryElves = []
  for (let i = 0; i < 3; i++) {
    const maxCaloryElf = totalCalories.reduce((a, b) => Math.max(a, b))
    maxCaloryElves.push(maxCaloryElf)
    totalCalories.splice(totalCalories.indexOf(maxCaloryElf, 1))
  }
  totalCaloriesMaxCaloryElves = maxCaloryElves.reduce((a, b) => a + b, 0)
  console.log(totalCaloriesMaxCaloryElves)
}

fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  handleInput(data)
})
