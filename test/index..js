var obj = {
  count: 0,
  cool: function coolFn() {
    if (this.count < 1) {
      setTimeout(() => { // 箭头函数是什么鬼东西？
        this.count++;
        console.log("awesome?");
      }, 100);
    }
  }
};
obj.cool(); // 很酷吧?