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


## Demo

* http://shaker.meteor.com
* see the [example](example)


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


## Debouncing

Note that on both Cordova and in mobile browsers, shakes are debounced, so that at least 750ms must pass between two shakes, in order for separate shakes to register.

Debouncing is a technique by which a repeatedly occurring event is handled only once, after a number of miliseconds have passed since the event last happened. It's commonly used to handle resize events and perform complex resizing calculations only after the user appears to have stopped resizing. Without [debouncing](http://underscorejs.org/#debounce), Cordova would fire the shake callback [twice](https://github.com/leecrossley/cordova-plugin-shake-detection/issues/11) by the time the user has stopped shaking, or even three times.


## Difference in sensitivities on Cordova vs. mobile browsers

Mobile browsers and Cordova use different APIs, as explained in the introduction. A sensitivity of 25 is too much for mobile browsers, while 30 is the default for Cordova and 40 is given as an example. A value of "15" fortunately isn't too low for Cordova and seems to work well on all supported platforms. 


## Supported environments

* Android (tested with 4.4 on Samsung Galaxy S5)
* Android Chrome and Opera
* iOS Safari
* iOS (tested with iPhone 5)


## Unsupported environments

* Xcode simulator (no idea why)
* Android emulator - allegedly the emulator doesn't support the accelerometer, but that's [dubious](https://github.com/phonegap/phonegap-start/issues/141)



# License and author

Copyright (C) 2015 Dan Dascalescu.

License: MIT.
