/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function LinkedListNode(val) {
      this.val = val;
       this.next = null;
   }
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new LinkedListNode(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
      // newNode.next = this.head.next;
      // this.head = newNode;
    }
    return this;
  }
}
const partition = (head,x)=>{
  let preHead,preTail,afterHead,afterTail,
    cur = head,next;
    if(head === null)
      return null;
    while(cur){
      next = cur.next;
      cur.next = null;
      if(cur.val <x){
        if(!preHead){
          preHead = cur;
          preTail = cur;
        }else{
          preTail.next = cur;
          preTail = cur;
        }
      }else{
        if(!afterHead){
          afterHead = cur;
          afterTail = cur;
        }else{
          afterTail.next = cur;
          afterTail = cur;
        }
      }
      cur = next;
    }
    if(preTail){
      preTail.next = afterHead;
      return preHead;
    }else{
      return afterHead;
    }
}
const list = new LinkedList();
list
    .append(1)
    // .append(1)
    .append(4)
    .append(3)
    .append(2)
    .append(5)
    .append(2);

let newHead = partition(list.head,3)

while(newHead){
  let next = newHead.next;
  console.log(newHead.val);
  newHead = next;
  
}
// console.log(newHead);
