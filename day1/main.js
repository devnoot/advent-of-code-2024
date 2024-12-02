import { list1 as data1 } from './list1.js'
import { list2 as data2 } from './list2.js'

// day1.0

// test data
const tlist1 = [3, 4, 2, 1, 3, 3].sort((a, b) => (a - b))
const tlist2 = [4, 3, 5, 3, 9, 3].sort((a, b) => (a - b))

// real data
const list1 = data1.sort((a, b) => (a - b))
const list2 = data2.sort((a, b) => (a - b))

const distances = []

for (let arrayIndex = 0; arrayIndex < list1.length; arrayIndex++) {
  const distance = Math.abs(list1[arrayIndex] - list2[arrayIndex])
  distances.push(distance)
}

const totalDistance = distances.reduce((a, b) => a + b)
console.info('Total distance:', totalDistance)


// day 1.5
// occurs have this structure 
// {
//  list1Index: number
//  list1Value: number
//  occurancesInList2: number
// }

function findOccurances(l1, l2) {
  const occurs = []

  l1.forEach((v, i) => {
    let o = 0
    l2.forEach((l2v, l2i) => {
      if (v === l2v) {
        o++
      }
    })
    occurs.push({
      list1Index: i,
      list1Value: v,
      occurancesInList2: o
    })
  })

  return occurs
}

function findSimilarityScore(l) {
  let sum = 0

  l.forEach((v, i) => {
    sum += (v.list1Value * v.occurancesInList2)
  })

  return sum
}


const sum = findSimilarityScore(findOccurances(list1, list2))
console.info('Similarity score:', sum)
