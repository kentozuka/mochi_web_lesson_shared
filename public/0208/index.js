const nums = [1, 2, 3, 4, 5, 6, 7, 8, 90, 10, 20, 29, 42, 23, 23]

// min & max = = = = = = = = = = = = = = 
const min = findMinimum(nums)
const max = findMaxim(nums)

function findMinimum(arr1) {
  let n = arr1[0]
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < n) {
      n = arr1[i];
    }
  }
  return n;
}

function findMaxim(x) {
  let m = 0
  for (let i = 0; i < x.length; i++) {
    if (x[i] > m) {
      m = x[i]
    }
  }
  return m
}

// console.log(...nums, nums)
// console.log(Math.max(...nums), Math.min(...nums))

// average = = = = = = = = = = = = = = 
function average(x) {
  const sum = x.reduce((a, b) => a + b, 0)
  const len = x.length
  return Math.round(sum / len) // round === 四捨五入 Math.ceil() Math.floor()
}

function averageChanto(x) {
  let total = 0

  for (let i = 0; i < x.length; i++) {
    total += x[i]   // total = total + x[i]
  }

  return total / x.length
}

console.log(average(nums))
console.log(averageChanto(nums))

// duplicate 重複
function findDuplicates(x) {
  let obj = {}

  for (el of x) {
    obj[el] = obj[el] ? ++obj[el] : obj[el] = 1
  }

  return obj
}

console.log(findDuplicates(nums))
console.log(nums.reduce((a, b) => {
  return {
    ...a,
    [b]: (a[b] || 0) + 1
  }
}), {})

// const obj = {
//   name: 'kento',
//   age: 0
// }
// const { name, age } = obj
// console.log(name, age)

