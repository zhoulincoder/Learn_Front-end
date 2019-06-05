import LinkedListNode from "./LinkedListNode";
class LinkedList{
    constructor(){
        let arr = [];
        // let item = {
        //     next: ,
        //     content: 
        // }
        this.head = null;
        this.tail = null;
    }
    append(value){
        const newNode = new LinkedListNode(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // newNode.value = value;
        // newNode.next = null;
        // let oldNode = this.tail;
        // oldNode.next = newNode;
        // this.tail = newNode;
        return this
    }
    toArray(){
        const nodes = [];
        let currentNode = this.head;
        while(currentNode){
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
    toString(){
        return this.toArray().map(node=>{
           return node.value;
        })
    }
}



export default LinkedList;