function TreeNode(val) {
  this.val = val;
  this.left = this.right = null
  
}

let a1 = new TreeNode(3)
let a2 = new TreeNode(9)
let a3 = new TreeNode(20)
let a4 = new TreeNode(15)
let a5 = new TreeNode(7)
a1.left = a2
a1.right = a3
a3.left = a4
a3.right = a5

// #102
// 从根节点开始  层层遍历
// [[3],[9, 20], [15,7]]
// 按层 每个节点把子节点告诉计算机
// items 
// 子节点可能还有子节点
// 用到队列

var levelOrder = function (root) {
  if(!root) return [];
  const items = [];
  const queue = [root, null];  //队列，等待被了解清况的节点，shift， 未处理的push入队
  let levelNodes = []  //每一层的节点
  // tree node left right
  while(queue.length > 0) {
    const t = queue.shift()
    // 第一次 root
    if(t) {
      levelNodes.push(t.val)
      if(t.left) {
        queue.push(t.left)
      }
      if(t.right) {
        queue.push(t.right)
      }
    } else {
      // null 层次分隔符
      items.push(levelNodes)
      levelNodes = []    // 等待下一层
      //  null  在队列里的节点是下一层所有节点 ，没有下下层的结点 ， 按层来遍历
      if(queue.length > 0) {
        queue.push(null)  //null 层次分隔符
      }
    }
  }
  return items;
}
console.log(levelOrder(a1));
/**
 * queue [root, null]
 * levelNodes []
 * items []
 */


