# Cross-platform shake detection for Meteor

This package brings together two shake detection plugins:

* Alex Gibson's [shake.js](https://github.com/alexgibson/shake.js), which uses the
  [devicemotion](https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion)
  W3C [API](http://w3c.github.io/deviceorientation/spec-source-orientation.html)
  implemented by mobile browsers
* Lee Crossley's [Cordova shake detection plugin](https://github.com/leecrossley/cordova-plugin-shake-detection),
  using the [apache.cordova.device-motion](http://plugins.cordova.io/#/package/org.apache.cordova.device-motion)
  plugin, which exposes the [`navigator.accelerometer` API](http://docs.phonegap.com/en/edge/cordova_accelerometer_accelerometer.md.html).

Curiously, the Cordova plugin isn't aligned with the W3C spec - a [known issue](https://issues.apache.org/jira/browse/CB-6069).



## Usage

Since the shake.js API is [needlessly complicated](https://github.com/alexgibson/shake.js/issues/26),
this package will let you use a simple and isomorphic (Cordova or mobile browsers) API almost
identical to that of Lee Crossley's package:

    // sensitivity will be passed to Cordova or as `threshold` to shake.js
    shake.startWatch(callback, sensitivity);

or

    // passed as-is to shake.js - won't work for Cordova!
    shake.startWatch(callback, optionsObject);

To stop listening for shakes,

    shake.stopWatch();


## Supported environments

* Chrome for Android
* iOS Safari (though two shakes event may be generated per actual shake)


## Unsupported environments

* Xcode simulator (no idea why)
* Android emulator - allegedly the emulator doesn't support the accelerometer, but that's [dubious](https://github.com/phonegap/phonegap-start/issues/141)



# License and author

Copyright (C) 2015 Dan Dascalescu.

License: MIT.
