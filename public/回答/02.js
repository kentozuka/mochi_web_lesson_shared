/**
 * 平均点出す系の問題
 * 
 * */

const kento = {
  name: 'kento iizuka',
  age: 20,
  points: {
    japanese: 20,
    english: 90,
    math: 80
  }
}

const mochi = {
  name: 'koharu mochida',
  age: 19,
  points: {
    japanese: 90,
    english: 30,
    math: 80
  }
}

function calc(person) {
  const { points, name, age } = person // object desrructuring https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

  const values = Object.values(points) // objectのvalueだけarrayにreturnする　Object.keys(), Object.entries()もある https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/values
  const total = values.reduce((a, b) => a + b, 0)
  const ave = total / values.length

  const txt = `${name}は${age}歳で、平均点は${Math.round(ave)}点です。` // Math.round https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  return txt
}


console.log(calc(kento))
console.log(calc(mochi))

/**
 * 平均点出す系の問題(ろんと私それぞれの平均点を出す)
 * 
 * */

const kento = {
  name: 'kento iizuka',
  age: 20,
  points: {
    japanese: 20,
    english: 90,
    math: 80
  }
}

const mochi = {
  name: 'koharu mochida',
  age: 19,
  points: {
    japanese: 90,
    english: 30,
    math: 80
  }
}

// 平均点は合計点÷教科数
// 合計点は.reduce()メソッドを使って単一の値を出す
// それをpointsオブジェクトのキーの数で割らないと
// 人がかわっても年齢と点数を出せるものにしないと意味ない = 関数

function d(students) {        // studentsに生徒の名前(kento,mochi)を渡す⇒オブジェクトがargumentとして渡される
  const { name, age, points} = students // studentsにはkenotoとmochiのオブジェクトが入ってくる(右辺)、左辺にプロパティ名(キー)を置くと分割代入でオブジェクトの値(value)だけ取り出せる
  const points2 = Object.values(points)  // ここでも分割代入使おうと思ったけど関数の中に関数を定義することはできないから上記のようにはいかない 
  const total = points2.reduce((a,b) => a + b, 0)
  const ave = total / points2.length
  const result = `${name}は${age}歳で、平均点は${ave}点です。`
  return result
}
console.log(d(kento));  // 呼び出し元
console.log(d(mochi));　// 呼び出し元


// // RON  = = = = = = = = = = = = = = = = = = = = = = = = =

// function calc(person) {
//   const { points, name, age } = person // object desrructuring https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//   const values = Object.values(points) // objectのvalueだけarrayにreturnする　Object.keys(), Object.entries()もある https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/values
//   const total = values.reduce((a, b) => a + b, 0)
//   const ave = total / values.length

//   const txt = `${name}は${age}歳で、平均点は${Math.round(ave)}点です。` // Math.round https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round
//   return txt
// }


// console.log(calc(kento))
// console.log(calc(mochi))
