//内存中缓存,不用每次都要从硬盘里找  
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.obj = {};  //key
  this.arr = [];
}

LRUCache.prototype.get = function(key) {
  //根据key在obj中查找  并 设置为最近值
  //可能没有
  //容量不大的内存服务于最多的进程
  var val = this.obj[key]
  if(val > 0 ){
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    console.log(obj[key]);
  } else {
    return -1;
  }
}
LRUCache.prototype.set = function(key, value) {
  //如果有key 返回
  if(this.obj[key]){
    this.obj[key] = value;   //更新   最近最新使用放在数组[0]
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
  }

  //没有的话，存进去；  可能内存满了  arr.pop()
  if(this.capacity === this.arr.length) {
    //放满了
    var k = this.arr.pop();
    //删除
    this.obj[k] = undefined;
  }

  this.obj[key] = value;
  this.arr.unshift(key);
}