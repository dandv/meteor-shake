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
this package will let you use a simple and isomorphic (Cordova vs. mobile browsers) API almost
identical to that of Lee Crossley's package:


    shake.startWatch(callback, sensitivity);  // sensitivity will be passed to Cordova

or

    shake.startWatch(callback, optionsObject);  // passed as-is to shake.js
    
To stop listening for shakes,    

    shake.stopWatch();

    
# License and author

Copyright (C) 2015 Dan Dascalescu.

License: MIT.
