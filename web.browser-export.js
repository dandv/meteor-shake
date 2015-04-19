/*global shake:true*/  // Meteor creates a file-scope global for exporting. This comment prevents a potential JSHint warning.
if (Meteor.isClient) {
  // browser only; Cordova has its own plugin
  shake = window.Shake;

  shake.startWatch = function shakeStartWatch(callback, options) {
    if (typeof options === "number")
      shake.meteorShakeListener = new shake({threshold: options});
    else  // pass object or undefined as-is
      shake.meteorShakeListener = new shake(options);

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
