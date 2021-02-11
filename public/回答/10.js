/**
 * パスワード生成
 * 
 */

const numberChars = "0123456789"
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerChars = "abcdefghijklmnopqrstuvwxyz"


function generatePassword (length, includeNumbers) {
    let password = ''

    for (el of Array(length).fill(1)) {
        const numRand = uzai(numberChars)
        const upRand = uzai(upperChars)
        const lowRand = uzai(lowerChars)

        const words = [lowRand, upRand]
        const candidate = includeNumbers ? [...words, numRand] : words
        password += uzai(candidate)
    }

    const hasNumber = password.match(/\d+/g)

    if (includeNumbers && !hasNumber) {
        let tmp = password.split('')
        tmp[tmp.length - 1] = 2
        password = tmp.join('')
    }
    
    return password
}

function uzai (x) {
    return x[Math.floor(Math.random() * x.length)]
}

console.log(generatePassword(8, false)) // 8桁の数字を含まないパスワードを生成
console.log(generatePassword(17, true)) // 12桁の数字を含むパスワードを生成

// // hint
// // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// /**
//  * パスワード生成
//  * 
//  */

// const numberChars = "0123456789"
// const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const lowerChars = "abcdefghijklmnopqrstuvwxyz"

// // 全部から選べるように元になる文字列をつくる

// const allChars = numberChars.concat(upperChars, lowerChars)　　// .concat()は文字列も結合する

// // function generatePassword (length, includeNumbers) {
// //     let num1 = ''
// //     let num2 = ''
// //     if (length === 8 && includeNumbers === false) {
// //         num1 = Math.random().toString(10).slice(-8)
// //         console.log(num1)
// //     } else if (length === 12 && includeNumbers === true) {
// //         num2 = Math.random().toString(32).substring(2)
// //         console.log(num2)
// //     }
// // }　// これうまくいかなかった

// function generatePassword (length, includeNumbers) {
//     let num1 = ''
//     if (length === 8 && includeNumbers === false) {
//         for (let i = 0; i < length; i++) {
//             num1 += numberChars[Math.floor(Math.random() * numberChars.length)];
//         }
//     } else if (length === 12 && includeNumbers === true) {
//         for (let i = 0; i < length; i++) {
//             num1 += allChars[Math.floor(Math.random() * allChars.length)];
//         }
//     }
//     return num1
// }

// console.log(generatePassword(8, false)) // 8桁の数字を含まないパスワードを生成
// console.log(generatePassword(12, true)) // 12桁の数字を含むパスワードを生成
