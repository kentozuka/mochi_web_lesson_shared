/**
 * 問題
 * 2つのarrayに存在する数字で最も多く存在する数字を探し、
 * その数字と出てきた回数をconsole.logするようなfunction mostAppearedを作成して
 * 
 * 例
 * 最も多く出てくる数字: 2, 出現回数: 2回　のように算出
 * 
 */

// const arr1 = [3, 5, 8, 29, 23, 34, 6, 2, 9, 2]
// const arr2 = [1, 12, 12, 3, 5, 7, 2, 19, 19, 13, 9, 1, 2, 2]

// function mostAppeared(a, b) {

// }

// console.log(mostAppeared(arr1, arr2))

/**
 * 問題
 * 2つのarrayに存在する数字で最も多く存在する数字を探し、
 * その数字と出てきた回数をconsole.logするようなfunction mostAppearedを作成して
 * 
 * 例
 * 最も多く出てくる数字: 2, 出現回数: 2回　のように算出
 * 
 */


// const nums = [1, 2, 3, 4, 5, 4, 2, 1, 1]

// function findDuplicate(x) {
//     let obj = {}
//     for (el of x) {
//         obj[el] = obj[el] ? ++obj[el] : obj[el] = 1
//     }
//     obj[el] !== 
// }

// console.log(findDuplicate(nums))  // => {1: 3, 2: 2, 3: 1, 4: 2, 5; 1}

const arr1 = [3, 5, 8, 29, 23, 34, 6, 2, 9, 2]
const arr2 = [1, 12, 12, 3, 5, 7, 2, 19, 19, 13, 9, 1, 2, 2]

// 2つのarrを一つに
// 重複の回数がわかるオブジェクトをつくり、その中でvalueが一番大きいkeyが「最も多く出てくる数字」、valueが「出現回数」

function mostAppeared(a, b) {
    const arr3 = a.concat(b)  //2つのarrを一つに
    const objDuplicate = {}
    for (el of arr3) {
        objDuplicate[el] = objDuplicate[el] ? ++objDuplicate[el] : objDuplicate[el] = 1  //　数値ごとの回数がわかるOBJ
    }
    const numTimes = Object.values(objDuplicate)  // 回数だけの配列
    let m = numTimes[0]
    for (let i = 0; i < numTimes.length; i++) {
        if (numTimes[i] > m) {
            m = numTimes[i]
        }
    }
    const mostNumTimes = m
    

    // オブジェクトobjDuplicateのなかでvalueが一番大きい(= 5 = m)keyがわかればいい
    for (property in objDuplicate) {
        if (objDuplicate[property] === mostNumTimes) {
            console.log(`最も多く出てくる数字：${property}`)
        }
    } 
    console.log(`出現回数：${mostNumTimes}回`)
}

// mostAppeared(arr1, arr2)



function kento (x) {
    // return x.sort((a,b) => x.filter(v => v === a).length - x.filter(v => v === b).length).pop()
    const obj = {}

    for (el of x) {
        // if (!obj[el]) {
        //     obj[el] = 1
        // } else if (obj[el]) {
        //     obj[el]++
        // }
        obj[el] = obj[el] ? ++obj[el] : 1
    }

    let max = 0
    let maxKey = ''

    for ([key, value] of Object.entries(obj)) {
        if (value > max) {
            max = value
            maxKey = key
        }
    }

    return `最貧なのは${maxKey}で${max}回でてきたよ`
}

console.log(kento(arr2))

// for ... in __ の書き方
// const obj2 = { a: 1, b: 2, c: 3}
// for (const property2 in obj2) {
//     console.log(`${property2}:${obj2[property2]}`)
// }


