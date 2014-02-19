var event = require('event')

// based on <http://stackoverflow.com/questions/923299/how-can-i-detect-when-the-mouse-leaves-the-window>
event.bind(window, 'mouseout', function(e){
  e = e ? e : window.event;
  var from = e.relatedTarget || e.toElement;
  if (!from || from.nodeName == "HTML") {
    for (var i = 0; i < callbacks.length; i++){
      callbacks[i]()
    }
  }
})

var callbacks = []

function bind(callback){
  callbacks.push(callback)
}

function unbind(callback){
  var idx = callbacks.indexOf(callback)
  if (idx !== -1){
    callbacks.splice(idx, 1)
  }
}

module.exports = bind

bind.bind = bind

bind.unbind = unbind
