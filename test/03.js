var eventEmitter = {
  emit: function (eventName) {
    var callbackArr = events[eventName]
    if ( callbackArr && callbackArr.length) {
      for (var i = 0; i < callbackArr.length; i++) {
        callbackArr[i]()
      }
    }
  }
};
var events = {};
var eventListener = {
  on: function (eventName, callback) {
    if (!events[eventName]) {
      events[eventName] = []
    }
    events[eventName].push(callback)
  },
  remove: function (eventName, callback) {
    var callbackArr = events[eventName] 
    if (callbackArr && callbackArr.length) {
      var index = callbackArr.indexOf(callback);
      callbackArr.splice(index, 1);
    }
  }
};

var clickCallback = function () {
  console.log('click callback'); 
}
eventListener.on('click', clickCallback)
eventListener.on('click', function () {
  console.log('other click callback')
})
eventEmitter.emit('click');
eventListener.remove('click', clickCallback)
eventEmitter.emit('click');