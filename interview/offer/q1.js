// 二维数组的查找
const array = [[1,2,3], [4,5,6], [7,8,9]]
function Find(target, array) {
  let row = array.length
  let col = array[0].length
  let i = 0
  let j = col - 1
  while(i<row&&j>=0) {
    if(target > array[i][j]) {
      i++
      continue
    } else if(target < array[i][j]) {
      j--
      continue
    } else if(target === array[i][j]) {
      return true
    }
  }
  return false
}

var res = Find(7,array)
console.log(res);
