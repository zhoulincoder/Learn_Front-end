function binary_search(arr, data) {
  // 计算出mid, 小于就往左， 大于就往右 => 重复 => 递归
 
  let min = 0, max = arr.length - 1, mid;
   // 退出条件: 只有一个数,不能再分中间
  while( min <= max) {
    //mid = parseInt((min + max) / 2);
    //位移运算 求中间值  
    //console.log( max >> 1)
    
    mid = min + ((max - min) >>1 );
  
    //console.log(mid)
    if(arr[mid] > data) {
      max = mid - 1;
    } else if(arr[mid] < data) {
      min = mid + 1;
    } else {
      return mid;
    }
  }
  return -1
}
console.log(binary_search([1,4,7,9,10,12], 10))

// let arr = [];
// for ( let i = 0; i < 100000000; i++) {
//   // 二分查找哪个地方会有问题? 

//   arr.push(i);
// }
// console.log(binary_search(arr, 2019));
