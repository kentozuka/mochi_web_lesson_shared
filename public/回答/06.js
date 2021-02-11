/**
 * 配列を小さい順に並び替えるfunctionを作成して
 * 
 */

// const arr1 = [3, 5, 8, 29, 23, 34, 6, 2, 9, 2]
// const arr2 = [1, 12, 12, 3, 5, 7, 2, 19, 19, 13, 9, 1, 2, 2]

// function sortArray(x) {

// }

// console.log(sortArray(arr1))
// console.log(sortArray(arr2))

// 簡単なやり方
// console.log(arr1.sort((a, b) => a - b))
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

/**
 * 配列を小さい順に並び替えるfunctionを作成して
 * 
 */

// 小さい順に新しい配列をつくる
// 一つずつ比べるのだと対Aに対するBの大小しかわからないからダメ　できるかも？
// 大きい数値から新しい配列に.pushする必要がある
// 一つずつくらべていって、もし小さかったら次のインデックスと比べていく、これを元の配列の.length分やる
// 上のは多分私にはできないから、配列の中で最も小さい数値を.pushしていく工程を.length分繰り返す
// 繰り返しの中に繰り返しができないと無理な気がする

const arr1 = [3, 5, 8, 29, 23, 34, 6, 2, 9, 2]
const arr2 = [1, 12, 12, 3, 5, 7, 2, 19, 19, 13, 9, 1, 2, 2]

// function sortArray(x) {
//     let newArr = []
//     //let n = x[0]
//     //newArr.length = x.length
//     for (let i = 0; i < x.length; i++) {
//         for (let i = 0; i < x.length - i; i++) {
//             if (x[i] < x[i + 1]) {
//                 x[i] = x[i + 1]
//                 //x[i + 1] = n

//             }
//         }
//         // for (let i3 = 0; i3 < x.length; i3++) {
//         //     console.log(x[i3] + '')
//         // }
//     }

//     return newArr
// }

function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    var pivot = array[0];

    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
};

console.log(quicksort(arr1))　// 呼び出し元
console.log(quicksort(arr2))

// 簡単なやり方
// console.log(arr1.sort((a, b) => a - b))
