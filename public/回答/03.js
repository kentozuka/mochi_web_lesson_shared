/**
 * ゼロつける例
 * 1 => 01, 10 => 10, 5 => 05のように
 * 
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

function zero(x) {
  if (x > 9) return `${x}` // stringにしてる
  else return `0${x}`
}

/**
 * 短く
 * 
 * function zero (x) {
 *  return x > 9 ? `${x}` : `0${xx}`
 * }
 */

console.log(zero(5))
console.log(zero(10))
console.log(zero(1))

// ちなみに typeof xで xのデータタイプを返す
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof
console.log(typeof 5) // => number
console.log(typeof 'kento')
console.log(typeof [1, 2])
console.log(typeof zero(6))

// 数字の前に０をつける

function zero(x) {
  if (x > 9) return `${x}` // stringにしてる
  else return `0${x}`
}

// 短く(条件三項演算子)

function zero(x) {
  return (x > 9 ? `${x}` : `0${x}`)　// バックティックで囲んだらstring
}

// numberのままじゃできないのかな　⇒　できない
// 数値のままだと足し算をしちゃう

 

console.log(zero(5))
console.log(zero(10))
console.log(zero(1))

// ちなみに typeof xで xのデータタイプを返す
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof

console.log(typeof 5) // => number
console.log(typeof 'kento')　// => string
console.log(typeof [1, 2])  // => object 配列は特殊なオブジェクト
console.log(typeof zero(6))  // => string