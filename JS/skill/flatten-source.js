function flatten(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  // 递归解决  
  // 将多层数组的扁平化分为：
  // 多个一维数组跟旁边的元素 contact
  // 退出条件是没有数组了
  const flattenArr = arr.reduce((prev, cur) => {
    return prev.concat(
      Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
  return flattenArr;
}

const arr = [1, [2, [3]]];
console.log(flatten(arr))