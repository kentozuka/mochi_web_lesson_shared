/**
 * "this is a test"を"tset a si siht""
 * になるようにする。　与えられたStringを反転させるfunctionを作る
 * 
 * "kento" (string)のindex 0: k, 1: e, 2: n ...
 */

// function reverseString(x) {
//   return x
// }

// console.log(reverseString('this is a test'))
// console.log(reverseString('日本語も逆にしてほしい'))

/**
 * "this is a test"を"tset a si siht""
 * になるようにする。　与えられたStringを反転させるfunctionを作る
 * 
 * "kento" (string)のindex 0: k, 1: e, 2: n ...
 */

// .push()は「配列」の最後に追加するから、最後にインデックス０の文字を追加する、配列から要素を取り出して文字列にしないと　
// .subString()で一文字ずつ取り出せばいいかも？　
// 文字列のインデックスを配列のインデックスと結んでpushで反転配列を造る文字列に戻す
function reverseString(x) {
  let newArr = []
  for (let i = 0; i < x.length; i++) {
      let newArr2 = x.substring(i, i+1) 
      newArr.push(newArr2)
  }
  let newArr3 = []
  for (let i2 = newArr.length-1; i2 >= 0; i2--) {
      newArr3.push(newArr[i2])
  }
  // 配列newArr3で反転まではOK、あとは配列から文字列に直す（要素だけ取り出せばいい）
 console.log(newArr3.join(''))  // .join()
  
}

// reverseString('this is a test')
// reverseString('これはテストです')

function rs (x) {
  let text = ''

  for (let i = x.length - 1; i >= 0; i--) {
    text += x[i] // tetx = text + x[i]
  }

  return text
}

console.log(rs('this is a test'))
