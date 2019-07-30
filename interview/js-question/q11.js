// 冒泡排序
let arr = [99, 22, 3, 9, 34, 8, 78, 66, 6, 0, 8]
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    var flag = false
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        flag = true
      }
    }
    if (!flag) {
      break
    }
  }
  return arr
}
//  平均事件复杂度 O(n^2)  最好情况 O(n)  空间复杂度O(1)

//选择排序
let arr2 = [99, 22, 3, 9, 34, 8, 78, 66, 6, 0, 8]
function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    var curr = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[curr] > arr[j]) {
        let midd = arr[curr]
        arr[curr] = arr[j]
        arr[j] = midd
      }
    }
  }
  return arr
}
// console.log(selectSort(arr2));  
// 平均事件复杂度 O(n^2)  空间复杂度 O(1) 

// 插入排序
let arr3 = [99, 22, 3, 9, 34, 8, 78, 66, 6, 0, 8]
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      var temp = arr[i]
      var tIndex = i - 1
      while (tIndex >= 0 && temp < arr[tIndex]) {
        arr[tIndex + 1] = arr[tIndex]
        tIndex--
      }
      arr[tIndex + 1] = temp
    }
  }
  return arr}
// console.log(insertSort(arr3));
// 平均事件复杂度 O(n^2)

// 快速排序
// var arr4 = [85, 24, 12, 63, 45, 17, 31, 96, 50, 1, 3, 4]
// var quickSort = function (arr) {
//   if (arr.length <= 1) { return arr; }
//   var temp = Math.floor(arr.length / 2);
//   var middle = arr.splice(temp, 1)[0];
//   var left = [], right = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < middle) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return quickSort(left).concat([middle], quickSort(right));
// };


// 快速排序2
var arr5 = [85, 24, 12, 63, 45, 17, 31, 96, 50, 1, 3, 4]
function quickSort(arr, low, high) {
  var key = arr[low]
  var end = high 
  var start = low
  while(end > start ) {
    while(end > start && arr[end] >= key) 
      end--
    if(arr[end] < key ) {  //需要判断，因为可能右侧没有比基准值小的
      let temp = arr[end]
      arr[end] = arr[start]
      arr[start] = temp
    }                                                                                                                                                                                                                            
    while(end > start && arr[start] <= key) 
      start ++
    if( arr[start] > key) {   //可能左侧没有比基准值大的
      let temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp
    }
  }
  //排完后start等于end，即基准值在此次排序中的最终位置
  if( start > low+1 ) quickSort(arr, low, start-1)
  //如果start小等于low+1，说明左侧只有0或者1个数字，不需要再进行排序
  if( end < high-1 ) quickSort(arr, end+1, high)
  return arr
}
const newArr = quickSort(arr, 0, arr5.length-1)
console.log(newArr);
