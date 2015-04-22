Package.describe({
  name: 'shake:shake',
  version: '0.2.0',
  summary: 'Detect shake events in mobile browsers or Cordova apps',
  git: 'https://github.com/dandv/meteor-shake',
  documentation: 'README.md'
});

Cordova.depends({
  'uk.co.ilee.shake': '0.4.0'
});

Package.onUse(function(api) {
  api.export('shake', 'web.browser');  // do not export to "client" because that includes Cordova, and would clobber the shake object exported by the uk.co.ilee.shake plugin
  api.addFiles(['shake.js/shake.js', 'web.browser-export.js'], 'web.browser');
});
