/*global shake:true*/  // Meteor creates a file-scope global for exporting. This comment prevents a potential JSHint warning.
shake = window.Shake;

shake.startWatch = function shakeStartWatch(callback, options) {
  if (typeof options === "object")
    shake.meteorShakeListener = new window.Shake(options)
  else
    shake.meteorShakeListener = new window.Shake({threshold: options});  // number
    
  window.addEventListener('shake', shake.meteorCallback = callback, false);
}

shake.stopWatch = function shakeStopWatch() {
  window.removeEventListener('shake', shake.meteorCallback, false);
  shake.meteorShakeListener.stop();
}  

delete window.Shake;
