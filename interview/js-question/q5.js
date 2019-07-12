// 数组去重
// [1,2,3,2,4,3] uniq 
let arr = [1,2,3,2,4,3]
function uniq (arr) {
  return [...new Set(arr)]
}
console.log(uniq(arr))

function uniq2 (arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if(result.indexOf(arr[i]) === -1) {
      result.push(arr[i])
    }
  }
  return result
}
console.log(uniq2(arr))

function uniq3 (arr) {
  let result = []
  for (let i in arr) {
    if(!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}
console.log(uniq3(arr))

function uniq4(arr) {
  let map = new Map()
  let result = new Array()
  for(let i in arr) {
    if(map.has(arr[i])) {
      map.set(arr[i], true)
    } else {
      map.set(arr[i], false)
      result.push(arr[i])
    }
  }
return {
   map: map,
   result: result
 }
}
var map = uniq4(arr)
console.log(map.map, map.result)

function uniq5(arr) {
  return arr.reduce((prev, cur) => prev.includes(cur) ? prev : [...prev, cur],[1])
}
console.log(uniq5(arr))