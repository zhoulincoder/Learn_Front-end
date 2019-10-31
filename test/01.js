var obj = {
  name: 'zl',
  times: [1,2,3],
  func: function () {
    this.times.forEach(  function () {
      console.log(this.name)
    })
  }
}
obj.func()