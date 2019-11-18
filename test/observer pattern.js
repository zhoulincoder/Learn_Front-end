var event = {
  msgCenter: [],
  listen: function (key, fn) {
    if (!this.msgCenter[key]) {
      this.msgCenter[key] = []
    }
    this.msgCenter[key].push(fn)
  },
  triger: function () {
    let key = Array.prototype.shift.call(arguments)
    console.log(key);
    let funcs = this.msgCenter[key]
    if (!funcs || funcs.length === 0) {
      return false
    }
    for (let i = 0, func; func = funcs[i++];) {
      func.apply(this, arguments)
    }
  }

}


var installEvent = function (obj) {
  for (let i in event) {
    obj[i] = event[i]
  }
}

let yourMsg = {}
installEvent(yourMsg)

yourMsg.listen('happy', function (name) {
  console.log('happy', name);
})

yourMsg.listen('happy', function () {
  console.log('marrage')
})

yourMsg.listen('sad', function (name) {
  console.log('sad', name);

})

console.log(event.msgCenter);

yourMsg.triger('happy', 'zhang')
yourMsg.triger('sad', 'zhoulin')
// yourMsg.remove('sad')