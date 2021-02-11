/**
 * "The quick brown fox jumps over the lazy dog" => "dog lazy the over jumps fox brown quick The"
 * のように単語で区切ってひっくり返して
 * 
 */

// HINT!!
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// const txt = "The quick brown fox jumps over the lazy dog"
// const txt2 = "A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this"

// function changeOrder(x) {
//   return x
// }

// console.log(changeOrder(txt))
// console.log(changeOrder(txt2))

// 単語単位で文字列を反転させる

const txt = "The quick brown fox jumps over the lazy dog"
const txt2 = "A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this"
 
function changeOrder(x) {
    const arr1 = x.split(' ')  // 単語ごとに区切られた配列
    let arr2 = []
    for (let i = arr1.length - 1; i > 0; i--) {
        arr2.push(arr1[i])  // 単語ごとに反転した配列
    }
    console.log(arr2.join('　'))  // 配列から文字列へ変換
}

changeOrder(txt)
changeOrder(txt2)

console.log(txt.split(' ').reverse().join(' '))
