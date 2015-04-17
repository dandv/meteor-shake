/*global shake:true*/  // Meteor creates a file-scope global for exporting. This comment prevents a potential JSHint warning.
if (Meteor.isClient) {
  shake = window.Shake;

  shake.startWatch = function shakeStartWatch(callback, options) {
    if (typeof options === "object")
      shake.meteorShakeListener = new shake(options);
    else
      shake.meteorShakeListener = new shake({threshold: options});  // number

    shake.meteorShakeListener.start();
    window.addEventListener('shake', shake.meteorCallback = callback, false);
    // yes, this is redundant and the author knows about it - see issue github.com/alexgibson/shake.js/issues/26
  };

  shake.stopWatch = function shakeStopWatch() {
    window.removeEventListener('shake', shake.meteorCallback, false);
    shake.meteorShakeListener.stop();
  };

  delete window.Shake;
}
