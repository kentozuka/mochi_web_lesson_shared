/**
 * 下のmetrix(arrayのarray)のように
 * 九九の計算結果が入ってるmetrixを作って
 * 
 * 手で打つんじゃなくってループを使って作る
 * 
 * ex
 * [
 *  [1, 2, 3, 4, 5, 6, 7, 8, 9], // (1の段)
 *  [2, 4, 6, 8, 10, 12, 14, 16, 18], // (2の段)
 *  [..., ... ] (3のだん)　9の段まで
 * ]
 *
 */

const metrix = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
] // array inside of an array => metrix

console.log(metrix) // のように

function calculateKuku() {
  return
}

console.log(calculateKuku())
